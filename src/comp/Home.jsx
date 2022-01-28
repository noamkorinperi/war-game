import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Table from './Table';

export default function Home(props) {
    const navigate = useNavigate();
    const [err1, setErr1] = useState('');

    const checknamebutten=()=>{
        var num = /([0-9])/
        let name= document.getElementById('input1').value
        if (name.length>=2) {
            if (!name.match(num)) {
                props.correctPlayer(name)
                props.addPlayer(name)
                navigate('/Game')  
            }
            else{
                setErr1('The name mast be only letters')
            }
        }
        else{
            setErr1('The name must be at lest 2 letter')
        }
    }
    const checknameinput=()=>{
        var num = /([0-9])/
        let name= document.getElementById('input1').value
        if (name.length>=2) {
            if (!name.match(num)) {
                setErr1('')
            }
            else{
                setErr1('The name mast be only letters')
            }
        }
        else{
            setErr1('The name must be at lest 2 letter')
        }
    }
  return <div>
        <h1>Ready for WAR</h1>
        <input id='input1' type="text" placeholder='Enter your name' onChange={()=>checknameinput()}/>
        <p>{err1}</p>
        <button className='b2' onClick={()=>checknamebutten()}>start</button>
        <h2>last games</h2>
        <div >
        <Table games={props.games}/>
        </div>
  </div>
}
