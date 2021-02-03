import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ id, title, url }) => {
    // console.log(id, title, url);
    return (
        <div className='card animate__animated animate__fadeInLeft'>
            <img id={id} src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    id : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

/**
 * 1. Enzymme
 * 2. Enzyme to Json
 * 3. Debe mostrar el componente correctamente
 *      * shallow
 *      * wrapper
 *      * wrapper .toMatchSnapshot()
 */
