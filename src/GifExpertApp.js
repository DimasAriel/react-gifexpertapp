//rafc para llamar la importacion y la constante con el return
import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //  const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

//   const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
const [categories, setcategories] = useState(['One Punch']);

//   const handleAdd = () => {

//     // setcategories([...categories, 'One Pieces']);
//     // setcategories( catg => [...categories, 'One Pieces']);

//   }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
           <hr/>
           
           {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
                categories.map(category => (
                    //  <li key={category}>{category}</li>
                    <GifGrid
                    key={category}
                    category={category}
                    />
                    ))
            }
        </ol>

        </>   
    )
}
