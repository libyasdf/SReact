import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Table } from 'antd';
import * as ServiceCall from '@ServiceCall';
import * as CommonMethod from '@CommonMethod';
import '@CssFile';
import Example from '@HookComponent/Testcon';

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

    return (
      <div className="portal-zone">
        {header}
        liby
        <Example />
      </div>
    );
  }
}

export default Test;
