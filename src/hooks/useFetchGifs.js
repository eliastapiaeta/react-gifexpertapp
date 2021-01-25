import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria, quantity) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(categoria, quantity)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })

    }, [categoria, quantity])

    /*   setTimeout(() => {
          setstate({
              data: [1, 2, 3, 4, 5, 6, 7],
              loading: false
          })
      }, 3000); */

    return state;  // { data:[], loading:true }
}

