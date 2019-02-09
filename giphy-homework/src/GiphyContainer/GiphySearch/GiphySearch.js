import React from 'react';

const GiphySearch = (props) => {
    return(
        <div>
            <h1> GiphyContainer</h1>

            {/* search form */}
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="giphyQuery" value={props.giphyQuery} onChange={props.handleInput}/>
                <input type="Submit"/>
            </form>
        </div>
    )
}

export default GiphySearch;