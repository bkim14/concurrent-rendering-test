import Row from "./Row.tsx";
import React from "react";

const Body = React.memo(({num, mult, from}:{num:number, mult:number, from:number})=>{
    return <div style={{display:'flex', flexDirection:'column'}}>
        {Array(mult).fill(0).map((_,idx)=>idx).filter((_,idx)=>idx>=from).map((val)=>{

            return <Row key={`${mult}-${num}-${val}`} myKey={`${mult}-${num}-${val}`} num={val*num}/>;


/*
            return <Row key={`${idx}`} myKey={`${idx}`} num={val*num}/>;
*/


        })}
    </div>;
});

export default Body;
