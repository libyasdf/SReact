// .storybook/config.js
// import { configure } from '@storybook/react';

// const req = require.context('../stories/', true, /\.jsx$/);

// function importAll(r) {
//     r.keys().forEach((filename) => req(filename))
// }
// configure(() => {
//     importAll(req)
// }, module);

import { configure } from '@storybook/react';

function loadStories() {
  require('../src/js/stories/index.js'); // 指定 story 的位置
  // 可以是任意目录，根据自己需要写路径
}

configure(loadStories, module);