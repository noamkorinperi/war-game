import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './comp/Home';
import Game from './comp/Game';
import Endpage from './comp/Endpage';
import ErrorPage from './comp/ErrorPage';

function App() {

  const [player, setPlayer] = useState([{name:''}]);
  const [nowPlay, setNowPlay] = useState({name:'noam'});
  const [games, setGames] = useState([]);
  const [score, setScore] = useState({win:0,lose:0});

  const addPlayer=(e)=>setPlayer([{name:e}, ...player])
  const correctPlayer=(nowPlay)=>setNowPlay({name:nowPlay})
  const correctScore=(a,b)=>setScore({win:a,lose:b})
  const addGame=(a,b,c)=>setGames([{name:a, win:b, lose:c},... games])

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<Home
          addPlayer={addPlayer}
          correctPlayer={correctPlayer}
          games={games}
        />}/>
        <Route exact path='/Game' element={<Game
          nowPlay={nowPlay}
          addGame={addGame}
          correctScore={correctScore}
        />}/>
        <Route exact path='/Endpage' element={ <Endpage
          nowPlay={nowPlay}
          score={score}
        />}/>
        <Route  path='*' element={ <ErrorPage/>}/>        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
