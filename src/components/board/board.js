import React, { Component } from 'react';

// import FadeIn from '../transitions/fade-in';
// import CharacterBox from './characterBox';
// import ScoreDisplay from './scoredisplay';



const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Allen Iverson',
        img: 'img/250x180/allen-iverson.png',
        clicked: false
    },
    {
        name: 'Blake Griffin',
        img: 'img/250x180/blake-griffin.png',
        clicked: false
    },
    {
        name: 'Carmelo Anthony',
        img: 'img/250x180/carmelo-anthony.png',
        clicked: false
    },
    {
        name: 'Colby Bryant',
        img: 'img/250x180/colby-bryant.png',
        clicked: false
    },
    {
        name: 'Demar Derozan',
        img: 'img/250x180/demar-derozan.png',
        clicked: false
    },
    {
        name: 'Derrick Rose',
        img: 'img/250x180/derrick-rose.png',
        clicked: false
    },
    {
        name: 'Devin Booker',
        img: 'img/250x180/devin-booker.png',
        clicked: false
    },
    {
        name: 'Draymond Green',
        img: 'img/250x180/draymond-green.png',
        clicked: false
    },
    {
        name: 'James Harden',
        img: 'img/250x180/james-harden.png',
        clicked: false
    },
    {
        name: 'Jeremy Lin',
        img: 'img/250x180/jeremy-lin.png',
        clicked: false
    },
  
]

const CharacterBox = (props) => {
    return(
        <div className="character-box">
            {props.characters.map( (character, index) => <Character character={character} index={index} onCharacterClick={props.onCharacterClick} key={character.name} />)}
        </div>
    )
};



export const ScoreDisplay = (props) => (<div className="score-keeper">Score: {props.score}</div>);

class Character extends Component {

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

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }




    
    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }




    
    render(){
        return (
            <div className="Board">
              
                <ScoreDisplay
                        score={this.state.user.score} />
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}