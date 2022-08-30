import React from 'react'
import MovieCard from '../movieCard';

import './styles.scss';


const MovieRow = ({title, items}) => {

    const imageURL = import.meta.env.VITE_GENRES_IMG;
    return (
        <>
            <div className='movieRow'>
                <h2 className='movieRowTitle'>{ title }</h2>
                <div className="movieRowListArea">
                    <div className="movieRowList">
                        { items.length > 0 && items.map((item, key) => (
                            <div className="movieRowItem" key={ key }>
                                <img src={`${imageURL}${item.poster_path}`} alt={`${ item.original_title }`} />
                                {/* <MovieCard key={ item.id } movie={ item } showLink={ false }/> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieRow;