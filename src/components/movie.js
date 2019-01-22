import React, {Component} from 'react'
export class Tiles extends Component{
    render(){
       
    return(
        <div style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
             { this.props.MovieList.map(movieData=>{
                 return(
                    <div style={TileStyle}>
                    <img style={imageStyle} src={"https://image.tmdb.org/t/p/w500/"+movieData.poster_path} alt="{movieData.title}"></img>
                    <p style={movieTT}>{movieData.title}</p>
                 </div>
                 );
                })}
            </div>
    )
            }
}

const TileStyle={
    background: '#D8D8D8',
    width:'300px',
    height:'530px',
    marginTop:'20px',
    margin:'auto',
    marginBottom:'5px'
}
const imageStyle={
    width: '300px',
    height:'450px'
}
const movieTT={
    textAlign:'center'
}

export default Tiles;