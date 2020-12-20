import React from 'react';

export default function Quote(props) {
    //let stl = { textAlign: "right" };
    return (
        <>
            <blockquote>{props.text}</blockquote>
            <div style={{ textAlign: "right", backgroundColor: "lightseagreen" }}>{props.author}</div>
        </>
    )
}
//Quote.defaultProps={text:"Hello, World!", author: "Volodymyr Hordiienko"}
Quote.defaultProps={};
Quote.defaultProps.text="Hello, World!";
Quote.defaultProps.author="Volodymyr Hordiienko";