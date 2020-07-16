/*
** 蓝色标题
*/
import React, { useState, useEffect } from 'react';
import '../hook.less';

function TitleBlueLine(props) {

    console.log("蓝色-title-props", props);
    let data = props.value;

    return (
        <div className='title-blue-line' style={{ width: '100%' }}>            
            <ul>
                <li>{data.titleName}</li>
            </ul>
        </div>
    );
}

export default TitleBlueLine;