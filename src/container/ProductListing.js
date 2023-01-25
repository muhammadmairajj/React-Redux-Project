import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProduct } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    // const products = useSelector(state => console.log(state.allProducts.products));
    const products = useSelector(state => state.allProducts.products);

    const dispatch = useDispatch();

    useEffect(()=>{
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        // console.log(res.data);
        .catch((err) => {
            console.log("Error: ", err);
        });
        dispatch(setProduct(res.data))
    }
    console.log("Products", products);

  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing