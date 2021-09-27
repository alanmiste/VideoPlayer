import React from "react";

export default function Button(props){
    return(
        <button className={props.classText} onClick={props.cb}>{props.fontIcon}</button>
    )
}