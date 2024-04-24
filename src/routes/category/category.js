import { useParams  } from 'react-router-dom';
import {useState,useEffect ,Fragment } from 'react';
import Spinner from '../../component/sppiner/spinner.component'
import ProductCard from '../../component/product-card/product-card';
import './category.scss'
// reduex
import { useSelector } from "react-redux";
import {selectCategoriesMap ,selectIsLoading} from '../../store/categories/categories.selector'

const Category=()=>{
 const {category}=useParams()
 const categoriesMap=useSelector(selectCategoriesMap)
 const isloading=useSelector(selectIsLoading)
 const [products,setProducts]=useState(categoriesMap[category]);
 useEffect(()=>{
  
    setProducts(categoriesMap[category])
 },[categoriesMap,category])

 return(
    <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>

        { isloading? (<Spinner />) :(<div className='category-container'>
        { products && products.map((product)=>(
            <ProductCard  key={product.id} product={product} />
        ))}
    </div>)}
    </Fragment>


 )
}
export default Category;