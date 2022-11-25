import React from 'react'
import './style.css'
import searchIcon from '../assets/searchIcon.png'

export default function FixtureCard(props) {
    return (
        <div className={'fixture-card ' + props?.className} >
            <h3>
                {props?.fixture?.tournament[0]?.name}
            </h3>
            <p>{props?.fixture?.round}</p>
            <div className='fixture-card-result'>
                <p>v/s</p>
                <div className='fixture-score'>
                    <div className='fixture-score-left'>
                        {props?.fixture?.winner === props?.fixture?.team1[0]?.name && <img alt='crown' className='crown' src={searchIcon} />}
                        <img className='flag' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="flag" />
                    </div>
                    <div className='fixture-score-main'>
                        <div>
                            {props?.fixture?.a1 + " - " + props?.fixture?.b1} ,{" "}
                            {props?.fixture?.a2 + " - " + props?.fixture?.b2}{(props?.fixture?.a3 != 0 || props?.fixture?.b3 != 0) && (" , " + props?.fixture?.a2 + " - " + props?.fixture?.b2)}
                        </div>
                    </div>
                    <div className='fixture-score-right'>
                        {props?.fixture?.winner === props?.fixture?.team2[0]?.name && <img className='crown' src={searchIcon} alt='crown' />}
                        <img className='flag' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="flag" />
                    </div>
                </div>
                <div className='fixture-score-name'>
                    <div className='fixture-score-name-left'>
                        <h6>{props?.fixture?.team1[0]?.name}</h6>
                    </div>
                    <div className='fixture-score-name-main'>
                        <img src={searchIcon} alt="logo" />
                    </div>
                    <div className='fixture-score-name-right'>
                        <h6>{props?.fixture?.team2[0]?.name}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
