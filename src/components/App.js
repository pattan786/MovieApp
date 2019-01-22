import React, { Component } from 'react'
import Header from './header';
import Body from './nav';
import axios from 'axios';
 
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            MovieList: []
        };
    }
    componentDidMount(){
        axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=ffb2c7798841b0c240fd3a49760ad7b7&language=en-US&page=1'
            )
            .then(res => this.setState({  MovieList: res.data.results })
            )
    }
    render(){ 
        return(
            <div className="App">
            <Header />
            <Body MovieList={this.state.MovieList}/>
            
            </div>
            );
    }
}

export default App;