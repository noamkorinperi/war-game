import React from 'react';
import '../style/card.css'

export default function Card(props) {
    let card =props.card

    return(<div className="card-contianer">
        <div className="cards">
        <span data-rank={card.name} className={`card ${card.type}`} ></span>
        </div>
    </div>

    )
}
