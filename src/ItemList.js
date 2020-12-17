import React from 'react';

export function ListItem(props) {
    return <li>{props.name}</li>
}

export default function List(props) {
    let { title, items } = props.data;
    return (
        <>
            <h3 style={{ color: "darkorange" }}>{title}</h3>
            <ul style={{listStyleType:"none"}}>
                {
                    items.map(item => {
                        return <ListItem name={item} key={item}></ListItem>
                    })
                }
            </ul>
        </>
    )
}