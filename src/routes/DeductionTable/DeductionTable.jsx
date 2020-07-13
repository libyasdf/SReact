import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Table } from 'antd';
import * as ServiceCall from '../../Util/ServiceCall';
import * as CommonMethod from '../../Util/CommonMethod';
import '../../index.less';

class DeductionTable extends Component {
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
    console.log('11.11:', this.state);

    const result_liby = ServiceCall.main();
    console.log('result_liby:', result_liby);

    const result_indata = ServiceCall.testLiby();
    console.log('result_indata', result_indata);

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
    const data = { name: 'foo', age: 'story' };
    // ServiceCall.testData(data, (result) => {
    //   console.log('0000000000:', result);
    // });
  }

  // handleShow = () => {
  //    this.setState( prevState => ({
  //      showModal: !prevState.showModal,
  //      clicksNumber: prevState.clicksNumber + 1
  //    }));
  //  }

  // handleHide = () => {
  //   this.setState({showModal: false});
  // }

  render() {
    console.log('history.state:', window.history.state);
    const { match, history } = this.props;
    const liby = match.params.parameter;
    console.log('props:', liby);

    const { dataSource, headername, columns } = this.state;
    const dataTest = JSON.stringify({
      'one': 'dsd',
      'two': 'e'
    });

    const header = (
      <div className="deduction_table_header">
        <div className="deduction_table_name"><span>{ headername }</span></div>
        <div className="deduction_table_explain"><span>填表说明：请如实填写《明细表》列7至列20，列22；21、23、24为自动计算项，无需填写。</span></div>
        <div className="deduction_table_note">
          <span>盖章：</span>
          <span>填表人：</span>
        </div>
        <button type="button" onClick={() => history.push(`/sec-react-tj/somepage/${dataTest}`)}>测试</button>
      </div>
    );

    const fakeHeader = (
      <table>
        <thead>
          <tr>
            <th style={{ width: 45 }}>序号</th>
            <th>单位民称</th>
          </tr>
        </thead>
      </table>
    );
    // const ModelChoose = this.state.showModal ? (
    //   <Modal>
    //     <div className='modal'>
    //       <button onClick={this.handleShow}>Hide modal</button>
    //     </div>
    //   </Modal>
    // ) : null;

    // <p>number of clicks: {this.state.clicksNumber}</p>
    // <button onClick={this.handleShow}>Show modal</button>
    // {ModelChoose}
    return (
      <div className="portal-zone">
        {header}
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          scroll={{ y: 240, x: '100vw' }}
          title={() => fakeHeader}
        />
      </div>
    );
  }
}

export default DeductionTable;
