import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setinputValue] = useState('');
    const [inputNumberValue, setInputNumberValue] = useState(10);

    const handleInputChangeText = (e) => {
        const valorFiltrado = numtext(e.target.value);
        const valorLimitado = limLengthStr(valorFiltrado, 25);

        if (valorLimitado) {
            setinputValue(valorFiltrado);
            // console.log('inputValue: ' + inputValue);
            // console.log('valorFiltrado: ' + valorFiltrado);
        }
    }
    const handleInputChangeNum = (e) => {
        const cantidad = 2;
        const inValue = (e.target.value !== "") && e.target.value;
        const valorFiltrado = stringToNum(inValue, cantidad);
        const { valorLimitado } = (valorFiltrado) && limLengthStr(valorFiltrado.toString(), cantidad);

        // console.log('\n');
        // console.log('inValue: ' + inValue);
        // console.log('valorFiltrado: ' + valorFiltrado);
        // console.log('valorLimitado: ' + valorLimitado);
        // console.log('valorAlcanzado: ' + valorAlcanzado);
        // console.log('\n');
        if (valorLimitado) {
            setInputNumberValue(valorFiltrado);
            // console.log('inputValue: ' + inputValue);
            // console.log('valorFiltrado: ' + valorFiltrado);
        }
        if (!valorFiltrado) {
            setInputNumberValue('');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('handleSubmit', inputValue);

        if (inputValue.trim().length > 2) {
            const inputNum = (inputNumberValue !== "") && inputNumberValue;

            // console.log('inputNum: ' + inputNum);

            if (inputNum) {
                // console.log('submit OK');
                // console.log('inputValue ', inputValue, 'typeof inputValue', typeof inputValue);
                // console.log('inputNumberValue ', inputNumberValue, 'typeof inputNumberValue', typeof inputNumberValue);

                setCategorias(cats => [{ num: inputNumberValue, cat: inputValue }, ...cats]);
                setinputValue('');
            }
        }

    }
    const stringToNum = (valNaN, cantidad) => {

        const valNull = (valNaN !== null) && valNaN;
        const regex = /(\d+)/g;

        // console.log('valNaN: ' + valNaN + ' typeof: ' + typeof valNaN);
        // console.log('valNull: ' + valNull + ' typeof: ' + typeof valNull);

        const valString = (typeof valNull !== 'string') ? valNull.toString() : valNull;

        // console.log('valString: ' + valString + ' typeof: ' + typeof valString);

        const num = valString ? valString.match(regex) : null;
        const haveNumber = (num !== null) && num;

        // console.log('num:::: ' + typeof haveNumber + ' ' + haveNumber);

        const resulString = (haveNumber) && (haveNumber.toString()).substring(0, cantidad);
        const resulNumber = Number(resulString);

        return resulNumber;
    }
    const numtext = (val) => {
        let out = '';
        //Se añaden las letras validas
        let filtro = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890';//Caracteres validos

        for (let i = 0; i < val.length; i++)
            if (filtro.indexOf(val.charAt(i)) !== -1)
                out += val.charAt(i);
        return out;
    }
    const limLengthStr = (valor, limite) => {
        // console.log(limite);
        const vmin = 0;
        const vmax = valor.length;
        const valorAlcanzado = (limite === vmax) && true;
        // console.log('\n valor: ' + valor);
        // console.log('vmin: ' + vmin + ' vmax: ' + vmax);
        const valorLimitado = ((vmax >= vmin) && (vmax <= limite)) && true;
        return { valorLimitado, valorAlcanzado };
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div id='formGif'>
                <div id='textGifs'>
                    <label>
                        Imagen
                        <input
                            id="inText"
                            placeholder='Imagen a buscar'
                            type='text'
                            maxLength='25'
                            pattern="[A-Za-z0-9 ]{1,30}"
                            value={inputValue}
                            onChange={handleInputChangeText}
                        />
                    </label>
                </div>
                <div id='numberGifs'>
                    <label>
                        Lote
                        <input
                            id='inNum'
                            placeholder='n°'
                            type='text'
                            maxLength='3'
                            pattern='[0-9]{1,2}'
                            value={inputNumberValue}
                            onChange={handleInputChangeNum}
                        />
                    </label>
                </div>
                <div id='divEnter'>
                    <label>
                        <br />
                        <input type="submit" id="btnForm" value="Ok" />
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
