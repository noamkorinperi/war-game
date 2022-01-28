import React from 'react';
import { useNavigate } from 'react-router-dom'


export default function Endpage(props) {
    const navigate = useNavigate();
    let score= props.score
    const check =()=>{
        if (score.lose>=score.win) {
            return (
                <div>
                    computer
                </div>
            )
        }
        else{
            return (
                <div>
                    {props.nowPlay.name}
                </div>
            )  
        }
    }
    return  <div>
        <h1>The winner is {check()}</h1>
        <h2>score</h2>
        <h3>{score.win}-{score.lose}</h3>
        <button className='b3' onClick={()=>{navigate('/')}}>log out</button>
        <br/>
        <button className='b3' onClick={()=>{navigate('/Game')}}>new game</button>
    </div>;
}
