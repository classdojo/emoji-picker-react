require("isomorphic-fetch");
const fs = require("fs");
const emojis = require("./src/emojis.json");

const BASE_URL = "https://static.classdojo.com/emoji/joypixels-5.0.2-premium/png/unicode/512";

async function processEmojis() {
  const existingEmojis = {};
  const missingEmojis = {};
  let total403 = 0;
  let total200 = 0;
  let totalOthers = 0;
  for (const key of Object.keys(emojis)) {
    console.log(key);
    const categoryEmojis = emojis[key];
    existingEmojis[key] = [];
    missingEmojis[key] = [];
    for (const emoji of categoryEmojis) {
      const response = await fetch(`${BASE_URL}/${emoji.u}.png`);
      console.log(emoji.u);
      console.log(response.status);
      if (response.status === 200) {
        existingEmojis[key].push(emoji);
        total200 += 1;
      } else if (response.status === 403) {
        missingEmojis[key].push(emoji);
        total403 += 1;
      } else {
        totalOthers += 1;
      }
    }
    console.log("--------------");
  }
  console.log("***********************************");
  console.log(`TOTAL emojis found: ${total200}`);
  console.log(`TOTAL emojis 403: ${total403}`);
  console.log(`TOTAL emojis others: ${totalOthers}`);

  return new Promise((resolve, reject) => {
    fs.writeFile("./existingEmojis.json", JSON.stringify(existingEmojis), (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  }).then(() => {
    return new Promise((resolve, reject) => {
      fs.writeFile("./missingEmojis.json", JSON.stringify(missingEmojis), (err) => {
        if (err) {
          reject(err);
        }

        resolve();
      });
    });
  }).catch(err => {
    console.error("==============  SOMETHING WENT WRONG");
    console.error(err);
  });
}

(async () => { await processEmojis(); })();
