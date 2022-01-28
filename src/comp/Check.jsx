import React from 'react';

export default function Check(props) {
    let games=props.games
    if (games.lose>=games.win) {
        return (
            <div>
                computer
            </div>
        )
    }
    else{
        return (
            <div>
                {games.name}
            </div>
        )  
    }

}
