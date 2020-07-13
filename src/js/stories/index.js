// import '@storybook/addon-actions/register';
// import '@storybook/addon-links/register';
// import '@storybook/addon-notes/register';
// import 'storybook-readme/register';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo'; // 这里引入你想展示的组件
import Example from '../components/hook/Testcon';
import Input from '../components/presentational/Input';

storiesOf('Button|test', module)
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('with text', () => ( // 一个 add 表示添加一个 story
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => ( // 这里是另一个 story
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('input组件', () => {
    const seo_title = 'af';
    return (
      <Input
        text="LIBY title"
        label="seo_title"
        type="text"
        id="seo_title"
        value={seo_title}
        // handleChange={this.handleChange}
      />
    );
  });
// 注意返回

storiesOf('Hook|test', module)
  .add('click hook', () => <Example />);
