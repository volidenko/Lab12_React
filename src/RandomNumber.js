import React from 'react';

// export default function RandomNumber(props){
//     let min=props.min;
//     let max=props.max;
//     let rnd=Math.floor(Math.random()*(max - min + 1) + min);
// return(
// <h3>Случайное число: {rnd}</h3>
//     );
// }

export default class RandomNumber extends React.Component {
    render() {
        // let min = this.props.min;
        // let max = this.props.max;
        let {min: minLevel, max: maxLevel}=this.props;
        //let rnd = Math.floor(Math.random() * (max - min + 1) + min);
        let rnd = Math.floor(Math.random() * (maxLevel - minLevel + 1) + minLevel);

        return (
            <h3>Случайное число: {rnd}</h3>
        );
    }
}