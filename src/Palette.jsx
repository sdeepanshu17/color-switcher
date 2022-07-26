import React from "react";
import colors from "./colorsArr";

function Palette() {
    let x = 7;
    let ind = 0;
    let final = [];
    for (let i = 0; i < 6; i++) {
        let temp = [];
        for (let i2 = 0; i2 < x; i2++) {
            temp.push(colors[ind]);
            ind++;
        }
        final.push(temp);
        x += 1;
    }
    for (let i = 0; i < 7; i++) {
        let temp = [];
        for (let i2 = 0; i2 < x; i2++) {
            temp.push(colors[ind]);
            ind++;
        }
        final.push(temp);
        x -= 1;
    }

    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            {final.map((arr) => {
                return (<div style={{margin: "0px"}}> {arr.map((element) => {
                    return <span style={{margin: "0px", padding: "0px"}}><button className={element} style={{backgroundColor: element, margin: "0px"}}></button></span>
                })}</div>)
            })}
        </div>
    )
}

export default Palette;