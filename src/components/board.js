import React from "react";
import Navbar from "./Navbar";
const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
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

const CharacterBox = (props) => {
    return(
        <div className="character-box">
            {props.characters.map( (character, index) =>
                 <Character character={character} index={index} onCharacterClick={props.onCharacterClick} />)}
        </div>
    )
};






class Character extends React.Component{

    handleClick = () => {
        this.props.onCharacterClick(this.props.index);
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

export default class Board extends React.Component {

   
        state = {
                  user: { score: 0 },
                  characters: shuffleArray( initialChars )
                }; 

    
    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    
                    score: this.state.user.score + 1
                }
            });
           
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                   
                    score: 0
                }
            });
           
        }
        
    }




    
    render(){
        return (
                  
            <div className="Board">
                 <Navbar   score={this.state.user.score}   />
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}