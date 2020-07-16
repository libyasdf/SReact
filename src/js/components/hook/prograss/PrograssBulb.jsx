/*
** 流程图灯泡 暗/亮 
*/
import React, { useState, useEffect } from 'react';
import '../hook.less';
// import brightbilb from 'appPublic/';

function PrograssBulb(props) {
    let data = props.value;// 数据接收
    console.log("流程图灯泡 暗/亮：", process.env.PUBLIC_URL + '/logo192.png');
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `your click ${count} times`;
    });

    return (
        <section className='prograss-bright-bulb'>
            {data.map((item, index) => {
                console.log("?", item);
                return (
                    <div className='prograss-bright-bulb-zone' key={index}>
                        <div className='prograss-bright-bulb-icon'>{item.bright ? <img src={require('@/assets/bulb-bright.jpg')} alt="" /> : <img src={require('@/assets/bulb-dark.jpg')} alt="" />}</div>
                        <div>{item.titlename}</div>
                    </div>
                );
            })}
        </section>
    );
}

export default PrograssBulb;
