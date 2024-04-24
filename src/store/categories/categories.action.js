import {CATEGORIES_ACTION_TYPES} from './categories.type';
import { ReduserAction } from '../../utils/reduser/reduser';
import {getCategoriesAndDocument} from '../../utils/fireBase/fireBase.utils'
export const setCategories = (categoriesArray) =>
  ReduserAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart=()=>
ReduserAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  ReduserAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesfailed = (error) =>
  ReduserAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error);


export const fetchCategoriesStartAsync=()=>async(disPatch)=>{
  disPatch(fetchCategoriesStart());
  try{
    const categoriesArray =await getCategoriesAndDocument('categories');
    disPatch(fetchCategoriesSuccess(categoriesArray))
  }
  catch(error){
    disPatch(fetchCategoriesfailed(error))
  }
}
