import React from 'react';

const SnippetForm = props => {
    return (
        <form onSubmit={props.onClick}>
            <label for="newSnippet">Add your own text to the game:</label>
            <input onChange={props.onChange} value={props.value} name="newSnippet" type="text" id="newSnippet"/>
            <input type="submit" value="Submit"></input>
            {console.log('props:', props)}
        </form>
    );
};

export default SnippetForm;