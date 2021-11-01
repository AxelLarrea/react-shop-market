import {useState, useEffect} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    //Hook del state
    const [products, setProducts] = useState([]);

    useEffect(async () => {
         const response = await axios.get(API);
        console.log(response.data);
        setProducts(response.data);
    }, [])

    return products;
}
 
export default useGetProducts;