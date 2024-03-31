import Row from "./Row.tsx";
import React from "react";

const Body = React.memo(({num}:{num:number})=>{
    console.log('xx');
    return <div style={{display:'flex', flexDirection:'column'}}>
        {Array(500).fill(0).map((_, idx)=>{
            return <Row key={`${num}-${idx}`} num={idx*num}/>;
        })}
    </div>;
});

export default Body;
