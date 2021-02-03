import { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from '../components/GifGrid.js';

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon ball'];

    // const [categorias, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon ball']);
    /* 
        const handleAdd = () => {
            // setCategorias([...categorias,'hunterXhunter']);
            setCategorias(cats => [...cats, 'hunterXhunter']);
        }
     */

    const [categorias, setCategorias] = useState(defaultCategories);

    return <>

        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias} />
        <hr />

        {
            // console.log(categorias)
            // categorias === 'undefinded' && console.log(categorias[0])
            categorias.map((category, i) =>
                // <li>{category}</li>
                // console.log(category)

                // limpiar(category.num)
                <GifGrid
                    key={category + i}
                    categoria={category.cat}
                    quantity={category.num}

                />
                // category.map(cat => {
                // let texto = ((typeof cat.text) !== 'undefined') ? cat.text : false;
                // let num = ((typeof cat.num) !== 'undefined') ? cat.num : false;
                // console.log(cat.text);
                // })
                // <GifGrid
                //     key={category + i}
                //     categoria={category}
                // />
            )
        }
    </>

}

export default GifExpertApp;
