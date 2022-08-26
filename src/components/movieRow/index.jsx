import React from 'react'

import './styles.scss';


const MovieRow = ({title, items}) => {

    const imageURL = import.meta.env.VITE_GENRES_IMG;
    return (
        <>
            <div>
                <h2>{ title }</h2>
                <div className="movieRowListArea">
                    { items.length > 0 && items.map((item, key) => (
                        <img src={`${imageURL}${item.poster_path}`} alt="" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default MovieRow;