import React from 'react';

export default function Quote(props) {
    let stl = {textAlign:"left"};
    return (
        <>
            <blockquote style={stl}>{props.text}</blockquote>
            <div style={{ textAlign: "right", backgroundColor: "lightseagreen" }}>{props.author}</div>
        </>
    )
}
Quote.defaultProps={};
Quote.defaultProps.text="Hello, World!";
Quote.defaultProps.author="Volodymyr Hordiienko";