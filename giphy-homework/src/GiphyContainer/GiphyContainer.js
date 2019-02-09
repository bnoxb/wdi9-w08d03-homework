import React, { Component } from 'react';
import GiphySearch from './GiphySearch/GiphySearch';
import Gif from './Gif/Gif';

class GiphyContainer extends Component {
    constructor(){
        super();

        this.state ={
            giphyQuery: 'query',
            gifs: [],
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.giphyQuery}&api_key=Y4ZoXSx3XBl0RCHtYFDHaBjws65JQKGC&limit=5`);
            
            if(!giphyResponse.ok){
                throw Error(giphyResponse.statusText);
            }
            const parsedGiphy = await giphyResponse.json();
            
            console.log(parsedGiphy.data);
            this.setState({
                gifs: parsedGiphy.data
            })
        }catch(err) {
            console.log(err);
        }
    }

    render(){
        const giphyList = this.state.gifs.map((gif, i) => {
            return <Gif key={i} gif={gif}/>;
        })
        console.log(this.state);
        return(
            <div>
                <GiphySearch handleInput={this.handleInput} giphyQuery={this.giphyQuery} handleSubmit={this.handleSubmit}/>
                {giphyList}
            </div>
       
        )
    }; 
}

export default GiphyContainer;