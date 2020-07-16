/**
 * 穿梭框
 * 
 */
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Table } from 'antd';
import * as ServiceCall from '@ServiceCall';
import * as CommonMethod from '@CommonMethod';
import '@CssFile';
import Example from '@PublicComponent/presentational/Testcon';
import Alertnote from '@PublicComponent/presentational/Alertnote';
import Transfertree from '@PublicComponent/presentational/Transfertree';
import TitleBlueLine from '@HookComponent/title/TitleBlueLine';
import PrograssBulb from '@HookComponent/prograss/PrograssBulb';

import { Popconfirm, message, Button, Popover } from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 370;

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      headername: '表名',
      dataSource: [],
      columns: []
    });
  }

  componentDidMount = () => {
    const time = '2019';
    const department = 'sd';
    console.log('global:', global.constants.pwd);
    console.log('12:12:', this.state);
    // 得到表头
    ServiceCall.getTableHeader(time, (result) => {
      this.setState({
        headername: result.tablename,
        columns: result.columns
      });
    });
    // 得到数据
    ServiceCall.initTable(time, department, (result) => {
      console.log('result:', result);
      this.setState({
        dataSource: result
      });
    });
  }

  render() {
    console.log('history.state:', window.history.state);
    // console.log('props:', this.props.match.params.parameter);

    const { dataSource, headername, columns } = this.state;
    const dataTest = JSON.stringify({
      one: 'dsd',
      two: 'e',
      three: 1
    });

    const header = (
      <div className="deduction_table_header">
        <button type="button" onClick={() => this.props.history.push('/sec-react-tj/home')}>
          Home
        </button>
      </div>
    );
    const confirm = () => {
      message.info('Clicked on Yes.');
    }

    return (
      <div className="portal-zone">
        {header}
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <Button>LT</Button>
          </Popconfirm>
          <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <Button>Left</Button>
          </Popconfirm>
          <Popconfirm
            placement="leftBottom"
            title={text}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button>LB</Button>
          </Popconfirm>
        </div>
        <Alertnote />
        <Example />
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <br />
          <Popover placement="left" title={text} content={content} trigger="click">
            <Button>Left</Button>
          </Popover>
          <Popover placement="leftTop" title={text} content={content} trigger="click">
            <Button>LT</Button>
          </Popover>
          <Popover placement="leftBottom" title={text} content={content} trigger="click">
            <Button>LB</Button>
          </Popover>
        </div>
        <Transfertree />
        <TitleBlueLine value={{titleName: '待办事项'}}/>
        <PrograssBulb value={[{ bright: true, titlename: 'liucheng1' }, { bright: false, titlename: '22222222' }, { bright: false, titlename: '33333333' }]}/>
      </div>
    );
  }
}

export default Test;
