/**
 * 请求资源 axios
 */

// import React from 'react';
// import http from '@sinoui/http';// https://github.com/sinoui/http
// import $ from 'jquery';
import axios from 'axios';
import Qs from 'qs';

// import 'core-js';
const url = 'http://react.free.idcfengye.com/demo';

const url_liby = "http://192.168.80.4:8080";
var path_liby = "/mypage/wmgl/index/order/getOrderIdAndPhone";

/**
  * http方法
 */
async function main() {
  const data = {
    'name': 'admin',
    'age': 'admin'
  };

  try {
    const result = await axios.post(`${url}/reactEntity`, Qs.stringify(data));
    // const result = await axios({
    //   method: 'post',
    //   url: `${url}/reactEntity`,
    //   data: Qs.stringify(data)
    // });
    console.log('http_hook 返回参数:', result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

/**
  * axios方法
 */
async function testLiby() {
  const requestBody = new FormData();
  requestBody.append('name', '12123213');
  requestBody.append('age', '1231231');
  // const libutext = JSON.stringify(requestBody);
  try {
    const result = await axios.post(`${url}/reactEntity`, requestBody);
    console.log('axios hook 返回参数:', result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

/**
  * ajax方法
 */
// const testData = (data, func) => {
//   // const url_link = url + '/reactMap';// reactMap reactString reactEntity index

//   const url_link = 'http://192.168.90.134/mypage/wmgl/notice/getLast';
//   $.ajax({
//     type: 'post',
//     url: url_link,
//     // crossDomain:true,
//     dataType: 'json',
//     // data,
//     ContentType: ('application/json; charset=UTF-8'),
//     // timeout:5000,//超时5秒没有返回，就进入error回调
//     success(dataResult) {
//       console.log('ajax 返回值为:', dataResult);
//       func(data);
//     },
//     error(xhr) {
//       console.log('ajax 错误回调:', xhr);
//     }
//   });
// };

/**
 * [getTableHeader 扣减表头]
 * @param {[type]} ouid  用户id
 * @param {[type]} superid 上级模块id
 */
const getTableHeader = (data, func) => {
  if (true) {
    // const columns = [
    //   {
    //     title: '姓名',
    //     dataIndex: 'name',
    //     key: 'name',
    //   },
    //   {
    //     title: '年龄',
    //     dataIndex: 'age',
    //     key: 'age',
    //   },
    //   {
    //     title: '住址',
    //     dataIndex: 'address',
    //     key: 'address',
    //   },
    // ];
    const columns = [{
      title: '序号', // 1
      dataIndex: 'serial_number',
      key: 'serial_number',
      width: 45
      // children: [{
      //   title:"1",
      //   key:'num_1'
      // }]
    }, {
      title: '单位民称', // 2
      dataIndex: 'company_name',
      key: 'company_name'
      // children: [{
      //   title:"2",
      //   key:'num_2'
      // }]
    }, {
      title: '职员姓名(按拼音排序)', // 3
      dataIndex: 'staff_name',
      key: 'staff_name'
      // children: [{
      //   title:"3",
      //   key:'num_3'
      // }]
    }, {
      title: '', // 4
      dataIndex: 'secret',
      key: 'secret'
    }, {
      title: '证件号码(此信息隐藏)', // wu
      dataIndex: 'id_number',
      key: 'id_number'
    }, {
      title: '人员ID', // 5 唯一标志
      dataIndex: 'staff_id',
      key: 'staff_id'
    }, {
      title: '扣减执行标准',
      dataIndex: 'DE_standard',
      key: 'DE_standard',
      children: [{
        title: '2019年9月1日至30日', // 5
        dataIndex: 'data_upper',
        key: 'data_upper'
      }, {
        title: '2019年10月1日至30日', // 6
        dataIndex: 'data_lower',
        key: 'data_lower'
      }
      ]
    }, {
      title: '扣减项目 单位：天',
      dataIndex: 'DE_items',
      key: 'DE_items',
      children: [{
        title: '病假', // 7
        dataIndex: 'sick_leave',
        key: 'sick_leave'
      }, {
        title: '事假', // 8
        dataIndex: 'personal_leave',
        key: 'personal_leave'
      }, {
        title: '探亲假', // 9
        dataIndex: 'home_leave',
        key: 'home_leave'
      }, {
        title: '产假', // 10
        dataIndex: 'maternity_leave',
        key: 'maternity_leave'
      }, {
        title: '陪产假', // 11
        dataIndex: 'paternity_leave',
        key: 'paternity_leave'
      }, {
        title: '哺乳假', // 12
        dataIndex: 'lactation_leave',
        key: 'lactation_leave'
      }, {
        title: '婚假', // 13
        dataIndex: 'marriage_leave',
        key: 'marriage_leave'
      }, {
        title: '丧假', // 14
        dataIndex: 'funeral_leave',
        key: 'funeral_leave'
      }, {
        title: '参加脱产全日制学历教育', // 15
        dataIndex: 'fulltime_education',
        key: 'fulltime_education'
      }
      ]
    }, {
      title: '迟到早退 (单位：次)', // 16
      dataIndex: 'early_leave',
      key: 'early_leave'
    }, {
      title: '其他情况 单位：天',
      dataIndex: 'other',
      key: 'other',
      children: [{
        title: '加班', // 17
        dataIndex: 'work_overtime',
        key: 'work_overtime'
      }, {
        title: '倒休', // 18
        dataIndex: 'shfit_leave',
        key: 'shfit_leave'
      }, {
        title: '干休假', // 19
        dataIndex: 'PLA_vacation',
        key: 'PLA_vacation'
      }]
    }, {
      title: '2019年9月1日至30日',
      dataIndex: 'time_upper',
      key: 'time_upper',
      children: [{
        title: '扣减天数（选项）', // 20
        dataIndex: 'upper_deduction_days',
        key: 'upper_deduction_days'
      }, {
        title: '小记金额', // 21
        dataIndex: 'upper_small_amount',
        key: 'upper_small_amount'
      }]
    }, {
      title: '2019年10月1日至15日',
      dataIndex: 'time_lower',
      key: 'time_lower',
      children: [{
        title: '扣减天数（选项）', // 22
        dataIndex: 'lower_deduction_days',
        key: 'lower_deduction_days'
      }, {
        title: '小记金额', // 23
        dataIndex: 'lower_small_amount',
        key: 'lower_small_amount'
      }]
    }, {
      title: '总金额', // 24
      dataIndex: 'total_amount',
      key: 'total_amount'
    }, {
      title: '备注', // 25
      dataIndex: 'remark',
      key: 'remark'
    }];
    const result = {
      'tablename': '统计周期内扣减加班补贴和执勤岗位津贴明细表（2019年9月1日至10月15日）',
      'columns': columns
    };
    func(result);
  } else {

  }
};
/**
 * [initTable 扣减表数据]
 * @param {[string]} time
 * @param {[string]} department 部门
 */
const initTable = (time, department, func) => {
  if (true) {
    const dataSource = [
      {
        key: '0',
        serial_number: '1',
        company_name: '2',
        staff_name: '3',
        fixed: true
      },
      {
        key: '2',
        serial_number: '1',
        company_name: 'saffa',
        staff_name: 'sdfasfas'
      },
      {
        key: '3',
        serial_number: '1',
        company_name: 'saffa',
        staff_name: 'sdfasfas'
      },
      {
        key: '4',
        serial_number: '1',
        company_name: 'saffa',
        staff_name: 'sdfasfas'
      },
      {
        key: '5',
        serial_number: '1',
        company_name: 'saffa',
        staff_name: 'sdfasfas'
      },
      {
        key: '6',
        serial_number: '1',
        company_name: 'saffa',
        staff_name: 'sdfasfas'
      },
      {
        key: '7',
        serial_number: '1',
        company_name: 'saffa',
        staff_name: 'sdfasfas'
      },
      {
        key: '8',
        serial_number: '1',
        company_name: 'saffa',
        staff_name: 'sdfasfas'
      },
      {
        key: '9',
        serial_number: '1',
        company_name: 'saffa',
        staff_name: 'sdfasfas'
      }
    ];
    func(dataSource);
  } else {

  }
};

export {
  main,
  testLiby,
//   testData,
  getTableHeader,
  initTable
};

