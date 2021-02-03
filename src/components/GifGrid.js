import React, { /* useState, useEffect */ } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';


export const GifGrid = ({ categoria, quantity }) => {

    // console.log(categoria, quantity);
    const { data: images, loading } = useFetchGifs(categoria, quantity);

    return (
        <>
            <h3 className='animate__animated animate__bounceIn'>{categoria} ({quantity})</h3>

            { /* loading ? 'Cargando...' : 'Data cargada' */}
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            {<div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                        // <li key={id}>{title}</li>
                    ))
                } 
            </div>}
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired    
}
