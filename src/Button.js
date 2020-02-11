import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick}>{props.buttonText}</button>
    );
};

// const Button = props => {
//     return <button/>;
// }

export default Button;