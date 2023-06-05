import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Game = () => {
    const [game, setGame] = useState('')
    const [player,setPlayer]=useState('')
    const data = useSelector(store => store.game)
    const dispatch = useDispatch()

    const change = () => (
        dispatch({ type: 'CHANGE_GAME', payload: game })
    )
    const player_change = () => (
        dispatch({ type: 'CHANGE_PLAYER', payload: player })
    )
    return (
        <>
            <h1 className='text-danger text-center'>the game is {data.games} </h1>
            <div className='d-flex justify-content-center'>
                <div className='col-6'>
                    <input type='text' className='form-control'
                        onChange={(e) => setGame(e.target.value)} />
                    <br />
                    <button className='btn btn-warning ' onClick={change}>change game</button>
                </div>
            </div>
           <h1 className='text-danger text-center'>the player is {data.player} </h1>
            <div className='d-flex justify-content-center'>
                <div className='col-6'>
                    <input type='text' className='form-control'
                        onChange={(k) => setPlayer(k.target.value)} />
                    <br />
                    <button className='btn btn-warning ' onClick={player_change}>change player</button>
                </div>
            </div>
        </>
    )
}

export default Game