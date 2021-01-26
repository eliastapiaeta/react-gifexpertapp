import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setinputValue] = useState('');
    const [inputNumberValue, setInputNumberValue] = useState(10);

    const handleInputChangeText = (e) => {
        setinputValue(e.target.value);
    }
    const handleInputChangeNum = (e) => {
        setInputNumberValue(Number(e.target.value));
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategorias(cats => [{ num: inputNumberValue, cat: inputValue }, ...cats]);
            setinputValue('');
        }

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div id='formGif'>
                <div id='textGifs'>
                    <label>
                        Imagen
                        <input
                            placeholder='Imagen a buscar'
                            type='text'
                            value={inputValue}
                            onChange={handleInputChangeText}
                        // onKeyDown={(e) => e.key === 'Enter' && onsubmit}
                        />
                    </label>
                </div>
                <div id='numberGifs'>
                    <label>
                        Lote
                        <input
                            placeholder='Cantidad'
                            type='text'
                            size='11'
                            pattern='[0-9]{1,2}'
                            value={inputNumberValue}
                            onChange={handleInputChangeNum}
                        />
                    </label>
                </div>
                <div id='divEnter'>
                    <label>
                        <br />
                        <input type="submit" id="btnForm" value="Enter" />
                    </label>
                </div>
                <br id='brGifs' />

            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
