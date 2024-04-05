import React from "react";

const Row = React.memo(({num, myKey}:{num:number, myKey:string})=>{
    console.log('myKey  :   ', myKey);
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // Do nothing for 1 ms per item to emulate extremely slow code
        // 매우 느린 코드를 구현하기 위해 항목마다 1ms동안 아무것도 하지 않도록 합니다
    }

    return <text>{num}{'      key:'}{myKey}</text>;
});

export default Row;
