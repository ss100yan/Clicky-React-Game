import React from "react";

class Navbar extends React.Component {

render(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
       Soccer Game

      Score: {this.props.score}
    

     
    </nav>
  );}
}

export default Navbar;
