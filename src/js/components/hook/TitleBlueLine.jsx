import React, { useState, useEffect } from 'react';
import './hook.less';

function Example(props) {
    // hook在class内部是不起作用的
    // 声明一个叫 “count” 的 state 变量。
    console.log("蓝色-title-props", props);
    let data = props.value;

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `your click ${count} times`;
    });



    return (
        <div className='title-blue-line' style={{ width: '100%' }}>            
            <ul>
                <li>{data.titleName}</li>
            </ul>
        </div>
    );
}

export default Example;
