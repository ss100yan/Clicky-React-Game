import React from "react";
import Navbar from "./Navbar";


const mapSortMap = (arr) => {
    return (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
)};

const initialSoccerPlayers = [
    {    img: 'img/1.jpg',
        clicked: false
    },
    {   img: 'img/2.jpg',
        clicked: false
    },
    {  img: 'img/3.jpg',
       clicked: false
    },
    {   img: 'img/4.jpg',
        clicked: false
    },
    {   img: 'img/5.jpg',
        clicked: false
    },
    {   img: 'img/6.jpg',
        clicked: false
    },
    {   img: 'img/7.jpg',
        clicked: false
    },
    {   img: 'img/8.jpg',
        clicked: false
    },
   
]


//Each Soccer Player component

class SoccerPlayer extends React.Component{

    handleClick = () => {
        this.props.onPlayerClick(this.props.index);
    }

    render(){ return(
       
            <div className="character">
                <img 
                    src={this.props.character.img} 
                    alt="character" 
                    className="profile-pic"
                    onClick={this.handleClick}/>
            </div>
      
    )
    }
}

// Card with all Soccer Players Component

const SoccerPlayersCard = (props) => {
    return(
        <div className="SoccerPlayersCard">
            {props.characters.map( (character, index) =>
                 <SoccerPlayer character={character} index={index} onPlayerClick={props.onPlayerClick} />)}
        </div>
    )
};








export default class Board extends React.Component {

   
        state = {
                  user: { score: 0 },
                  characters: mapSortMap( initialSoccerPlayers )
                }; 

    
    onPlayerClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: mapSortMap( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    
                    score: this.state.user.score + 1
                }
            });
           
        } else {
            this.setState({
                characters: mapSortMap(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    
                    score: 0
                }
            });
           
        }
        
    }




    
    render(){
        return (
                  
            <div className="Board">
                <Navbar score={this.state.user.score}  />
                <SoccerPlayersCard characters={this.state.characters} onPlayerClick={this.onPlayerClick} />
            </div>
        )
    }

}