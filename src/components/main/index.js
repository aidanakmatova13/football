import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router"
import axios from "axios";
import "./style.css"
import GameList from "../gamelist";

const Main = () => {
    const [infos, setInfos] = useState([])
    const [searchGame, setSearchGame] = useState('')
    let navigate = useNavigate()
    useEffect(() => {
        axios("https://footballista.ru/api/seasons/5099/calendar_paginated?limit=94&offset=0")
            .then(({data}) => setInfos(data.items))
    }, [])
    const handleInput = (e) => {
        setSearchGame(e.target.value)
    }
    const Search = () => {
        if (searchGame.trim()) {
            navigate(`/${searchGame}`)
        }
    }
    return (
        <main className="main">
            <div className='top'>
                <h1 className='menu-title'>РАСПИСАНИЕ МАТЧЕЙ ПО ФУТБОЛУ</h1>
                <input className='search-input' onChange={handleInput} type='text' placeholder='type...'/>
                <button  className="search-button" onClick={Search}>Search &#8634; </button>
            </div>

            <GameList infos={infos}/>
            <button type="magic" count="2" hide-if-last="true" libs="no-thanks">Показать еще</button>

        </main>
    );
};

export default Main;