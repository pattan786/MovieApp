import React, {Component} from 'react';
import Table from './movieTable';
import Tiles from './movie';

export class Body extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            flag:true
        };
       
    }
    onChange(e){
        
        this.setState({[e.target.name]: e.target.value});
       
        
    }
    flagging(e){
        
        
            this.setState({flag:this.state.flag?false:true});
            
       
    }
    
    render(){

        let filteredList = this.props.MovieList.filter(movieData => {
            return movieData.title.toLowerCase().indexOf(this.state.title.toLowerCase())!== -1;
        }

        );
       
        return(
            <div>
                <form style={navStyle}>
                 <input
                     type="text"
                     name="title"
                     placeholder="search"
                     style= {barStyle}
                     value={this.state.title}
                     onChange={this.onChange.bind(this)}
               
                /> 

              
              <select onChange={this.flagging.bind(this)} style={{width:'8.5%'}}>
                <option value="list">List</option>
                <option value="table">Table</option>
             </select>
 

                 
            </form>


            <div>
               {(this.state.flag ? <Tiles MovieList={filteredList}/>:<Table MovieList={filteredList}/>)}
            </div>
                
            
            
             
            </div>
            
            )

    }
}

const navStyle={
    display:'flex',
    border: '5px solid grey',
    height:'40px',
    width: '80%',
    marginTop : '10px',
    margin: 'auto',
    marginBottom: '40px'

}

const barStyle={
    width :'91.5%',
    fontSize:'20px',
    paddingLeft:'20px'
    
    
}
export default Body;