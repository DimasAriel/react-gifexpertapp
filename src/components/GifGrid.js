import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGift } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {loading, data:images} = useFetchGifs(category);
    // const [count, setcount] = useState(0);
 
    // const [images, setImages] = useState([])
    
     

    // useEffect(() =>{
    //     getGift(category)
    //     .then(setImages);
    // }, [category])

    

    // getGift();

    return (
        <>
         
         <h3 className="card animate__animated animate__fadeIn">{category}</h3>
         {/* {loading ? 'cargando...' : 'Data Cargada'} */}
        
        {loading && <p className="card animate__animated animate__flash">Loading...</p>}

        <div className="card-grid">
            <ol>
               {
                   images.map( img =>(
                       // ({id, title})
                       //    <li key={id}>
                       //  {title}
                       //   </li>
                       <GifGridItem
                       key={img.id}
                       {...img} 
                       // img={img}
                       />
                       ))
                    }
            </ol>
            </div>
            </>
)
}

 /*           {/* <h2>{count}</h2>
            <button onClick={()=> setcount(count + 1)}></button> 
        {/* </div> *//**/
