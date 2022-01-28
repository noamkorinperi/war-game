import React from 'react';
import Check from './Check';
import '../style/table.css'

export default function Table(props) {
    let games= props.games


    return <div>
        <div >
        <table className='tabl'>
                <tr>
                    <th>Name</th>
                    <th>score</th>
                    <th>winer of the round</th>
                </tr>
            </table>
            {games.map((games)=>{
                return(
                    <table className='tabl'>
                        <tr>
                        <td>{games.name}</td>
                        <td>{games.win}-{games.lose}</td>
                        <td><Check games={games}/> </td>
                        </tr>                
                    </table>

                )
            })}
        </div>
    </div>;
}
