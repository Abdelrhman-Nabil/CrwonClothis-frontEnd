import { Fragment } from "react";
import CategoriesPreview from "../../component/categories-preview/categories-preview";
// redux
import { useSelector } from "react-redux";
import {selectCategoriesMap ,selectIsLoading} from '../../store/categories/categories.selector'
import Spinner from "../../component/sppiner/spinner.component";
const CategoryPreview=()=>{
     const categoriesMap=useSelector(selectCategoriesMap);
     const isloading=useSelector(selectIsLoading)
    return(
        <Fragment>

            {
            isloading? (<Spinner />):
            (Object.keys(categoriesMap).map((title)=>{
                const products=categoriesMap[title];
                return(
                   <CategoriesPreview  title={title} key={title} products={products}/>
                )
       
       
               }))
            }
        
        </Fragment>
    )
}
export default CategoryPreview