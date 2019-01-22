import React from 'react'

function Header(){
    return(
        <header class="headerStyle" style={ headerStyle }>
            <h2>Movie !</h2>
        </header>
    )
}
const headerStyle ={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    marginBottom:'40px'   
}
export default Header;