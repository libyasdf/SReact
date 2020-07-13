import React from 'react';
import Loadable from 'react-loadable';

// 通用的过场组件
// const loadingComponent =()=>{
//     return (
//         <div>loading</div>
//     )
// }

const loadingComponent = (props) => {
  const { error, pastDelay } = props;
  if (error) {
    return (
      <div>
        Error!
        <button type="button" onClick={props.retry}> Retry </button>
      </div>
    );
  }
  if (pastDelay) { // 组件的加载时间要比你设置的delay时间长的时候，你的Loading组件接收的props中会有一个pastDelay属性其值为true
    return <div>Loading...</div>;
  }
  return null;// 避免Loading组件闪屏
};

// 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = loadingComponent) => Loadable({
  loader,
  loading,
  delay: 300
});
// delay值默认为200ms，但是你可以喜欢设置成多少都可以
