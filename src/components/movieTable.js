import React, {Component} from 'react'
// import styles from '../App.css';
export class Table extends Component{
    render(){
        // width:'83.5%',
    return(
        <div style={{margin:'auto'}}>
             { this.props.MovieList.map(movieData=>{
                 return(
                    <div style={TileStyle}>
                    <div style={{flex:'1'}}>
                        <img style={imageStyle} src={"https://image.tmdb.org/t/p/w500/"+movieData.poster_path} alt="{movieData.title}"></img>
                    </div>
                    <div style={{flex:'2'}}>
                        <h4 style={movieTT}>{movieData.title}</h4>
                        <p>{movieData.overview}</p>
                    </div>
                    
                 </div>
                 );
                })}
            </div>
    )
            }
}

const TileStyle={
    display:'flex',
    flexWrap:'wrap',
    textAlign:'center',
    borderTop:'2px solid black',
    // width:'300px',
    // height:'530px',
    marginTop:'20px',
    margin:'auto',
    marginBottom:'5px',
    paddingTop:'20px'
}
const imageStyle={
    width: '310px',
    height:'450px'
}
const movieTT={
    // textAlign:'center'
}

export default Table;