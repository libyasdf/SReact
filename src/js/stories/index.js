// import '@storybook/addon-actions/register';
// import '@storybook/addon-links/register';
// import '@storybook/addon-notes/register';
// import 'storybook-readme/register';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo'; // 这里引入你想展示的组件
import Example from '../components/presentational/Testcon';
import Input from '../components/presentational/Input';
import TitleBlueLine from '../components/hook/title/TitleBlueLine';// 小标题蓝色底线 灰色底线
import PrograssBulb from '../components/hook/prograss/PrograssBulb';// 流程图灯泡 暗/亮

storiesOf('测试|test', module)
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
storiesOf('公文系统|标题类', module)
  .add('小标题-蓝色底线', () => <TitleBlueLine value={{ titleName: '待办事项' }} />);


storiesOf('公文系统|弹窗类', module)
  .add('1293✖️700px', () => <Example />);

const prograssbulbvalu = [{ bright: true, titlename: 'liucheng1' }, { bright: true, titlename: 'liucheng1' }, { bright: true, titlename: 'liucheng1' }, { bright: false, titlename: '22222222' }, { bright: false, titlename: '33333333' }];
storiesOf('公文系统|流程类', module)
  .add('灰亮灯泡', () => <PrograssBulb value={prograssbulbvalu} />);