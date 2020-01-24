import React from 'react';

import { storiesOf } from '@storybook/react';
import EmojiPicker from '../src';
// import Dist from '../dist';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('EmojiPicker', module).add('EmojiPicker', () => <EmojiPicker onEmojiClick={(e, em) => console.log(em)} emojiUrl="https://static.classdojo.com/emoji/joypixels-5.0.2-premium/png/unicode/512"/>);
