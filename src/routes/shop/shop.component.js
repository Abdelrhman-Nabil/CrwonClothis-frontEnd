import { Route,Routes } from 'react-router-dom';
import './shop.style.scss'
import CategoryPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
// redux
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import{fetchCategoriesStartAsync} from '../../store/categories/categories.action'
const Shop=()=>{
   const disPatch=useDispatch();
    useEffect(()=>{
       disPatch(fetchCategoriesStartAsync())
      },[disPatch])
    return(

        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=':category' element={<Category/>} />
        </Routes>
    )

}
export default Shop