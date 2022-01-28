import React, {useState} from 'react';
import Card from './Card';
import '../style/game.css'
import { useNavigate } from 'react-router-dom'


export default function Game(props) {
    const navigate = useNavigate();
    
    const [computerDeck, setComputerDeck] = useState([{name: 0, value: 0, type:'none'}])
    const [playerDeck, setPlayerDeck] = useState([{name: 0, value: 0, type:'none'}])
    const [currentCard, setCurrentCard] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [playerScore, setPlayerScore] = useState(0)
    const [b1, setB1] = useState(true);


    const createDeks = () => {
      let cards = []

      for(let i=1 ; i<=13 ; i++) {
          if (i<=10) {
              let Dcard = {name: `${i}`, value: i, type:'Diamond'}
              cards.push(Dcard)
              let Ccard = {name: `${i}`, value: i, type:'Clubs'}
              cards.push(Ccard)
              let Hcard = {name: `${i}`, value: i, type:'Hearts'}
              cards.push(Hcard)
              let Scard = {name: `${i}`, value: i, type:'Spades'}
              cards.push(Scard)         
          }
          else if (i===11) {
              let Dcard = {name: 'J', value: i, type:'Diamond'}
              cards.push(Dcard)
              let Ccard = {name: 'J', value: i, type:'Clubs'}
              cards.push(Ccard)
              let Hcard = {name: 'J', value: i, type:'Hearts'}
              cards.push(Hcard)
              let Scard = {name: 'J', value: i, type:'Spades'}
              cards.push(Scard)      
          }
          else if (i===12) {
              let Dcard = {name: 'Q', value: i, type:'Diamond'}
              cards.push(Dcard)
              let Ccard = {name: 'Q', value: i, type:'Clubs'}
              cards.push(Ccard)
              let Hcard = {name: 'Q', value: i, type:'Hearts'}
              cards.push(Hcard)
              let Scard = {name: 'Q', value: i, type:'Spades'}
              cards.push(Scard)      
          }
          else if (i===13) {
              let Dcard = {name: 'K', value: i, type:'Diamond'}
              cards.push(Dcard)
              let Ccard = {name: 'K', value: i, type:'Clubs'}
              cards.push(Ccard)
              let Hcard = {name: 'K', value: i, type:'Hearts'}
              cards.push(Hcard)
              let Scard = {name: 'K', value: i, type:'Spades'}
              cards.push(Scard)      
          }
  
      }
    
          let tempPlayer = [];
          let tempComputer = [];
          let rndIndex;
          while(cards.length > 0) {
              rndIndex = Math.floor(Math.random() * cards.length)
              tempPlayer.push(cards[rndIndex])
              cards.splice(rndIndex, 1)
  
              rndIndex = Math.floor(Math.random() * cards.length)
              tempComputer.push(cards[rndIndex]);
              cards.splice(rndIndex, 1)
          }

        setPlayerDeck(tempPlayer);
        setComputerDeck(tempComputer);
        setB1(false)
    }

    const hitCard = () => {
        if(currentCard < playerDeck.length-1) {
            checkRoundWinner();
            setCurrentCard(currentCard + 1);
        } else {
            if (playerScore<=computerScore) {
                props.addGame(props.nowPlay.name,playerScore,computerScore)
                props.correctScore(playerScore,computerScore)
                alert(`you lose ${playerScore}-${computerScore}`)
                navigate('/Endpage')    
            }
            else{
                props.addGame(props.nowPlay.name,playerScore,computerScore)
                props.correctScore(playerScore,computerScore)
                alert(`you win ${playerScore}-${computerScore}`)
                navigate('/Endpage')  
            }   
        }
        
    }

    const checkRoundWinner = () => {

        if(playerDeck[currentCard].value > computerDeck[currentCard].value) {
            setPlayerScore(playerScore + 1)

        } else if (playerDeck[currentCard].value < computerDeck[currentCard].value) {
            setComputerScore(computerScore + 1) 
        }
    }
  
  return <div>
    <h1>round number {currentCard}</h1>
    <h2>Computer</h2>
    <h3>Computer score:{computerScore}</h3>
    <div className='cardAndButton'>
    <Card card={computerDeck[currentCard]}/>
    <div className='buttens'>
    <button onClick={hitCard} disabled={b1}>hit</button>
    <button onClick={createDeks} disabled={!b1}>deck</button>    
    </div>
    <Card card={playerDeck[currentCard]}/>
    </div>
    <h3>{props.nowPlay.name} score:{playerScore}</h3>
    <h2>{props.nowPlay.name}</h2>
            
  </div>;
}
