import React from 'react';

const GameList = ({infos}) => {
    return (
        <div className="grid">
            {
                infos.map(el =>
                    <div className="box" key={el._id}>
                        <p>Номер тура: {el?.tourNumber}</p>
                        <p>Команда хозяев: {el?.teamHome?.name}</p>
                        <p>Команда гостей: {el?.teamAway?.name}</p>
                        <p>Количество голов, забитых гостями: {el?.scoreFtHome}</p>
                        <p>Количество голов, забитых хозяивами: {el?.scoreFtAway}</p>
                        <p>Дата матча: {el?.date}</p>
                        <p>Название стадиона: {el?.stadium?.name}</p>
                    </div>
                )
            }

        </div>
    );
};

export default GameList;