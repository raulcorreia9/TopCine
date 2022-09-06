import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import './styles.scss';


const MovieRow = ({title, items}) => {

    const imageURL = import.meta.env.VITE_GENRES_IMG;
    return (
        <>
            <div className='movieRow'>
                <h2 className='movieRowTitle'>{ title }</h2>
                <div className="movieRowLeft">
                    <BsChevronLeft style={{ fontSize: 30 }} />
                </div>
                <div className="movieRowRight">
                    <BsChevronRight style={{ fontSize: 30 }} />
                </div>
                <div className="movieRowListArea">
                    <div className="movieRowList">
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