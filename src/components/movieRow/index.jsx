import React from 'react'
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import './styles.scss';


const MovieRow = ({title, items}) => {

    const imageURL = import.meta.env.VITE_GENRES_IMG;

    const [scrollX, setScrollX] = useState(-550);

    const handleLeftArrow = () => {
        //Rolagem de metade da tela
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        //Rolagem de metade da tela
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.length * 200;
        if((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(x);
    }

    return (
        <>
            <div className='movieRow'>
                <h2 className='movieRowTitle'>{ title }</h2>
                <div className="movieRowLeft" onClick={ handleLeftArrow }>
                    <BsChevronLeft style={{ fontSize: 30 }} />
                </div>
                <div className="movieRowRight" onClick={ handleRightArrow }>
                    <BsChevronRight style={{ fontSize: 30 }} />
                </div>
                <div className="movieRowListArea">
                    <div className="movieRowList" style={{
                        marginLeft: scrollX,
                        width: items.length * 200
                    }}>
                        { items.length > 0 && items.map((item, key) => (
                            <div className="movieRowItem" key={ key }>
                                <img src={`${imageURL}${item.poster_path}`} alt={`${ item.original_title }`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieRow;