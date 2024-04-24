import { createSelector } from "reselect"
// input
const selectCategoriesReducer=(state)=> state.categories;

export const selectCategories=createSelector(
  [selectCategoriesReducer],(categoriesSlice)=>categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc
  }, [])
)

export const selectIsLoading=createSelector(
  [selectCategoriesReducer],
  (categoriesSlice)=>categoriesSlice.isloading
)

// export const selectCategoriesMap = (state) => {
//     return state.categories.categories.reduce((acc, category) => {
//         const { title, items } = category;
//         acc[title.toLowerCase()] = items;
//         return acc
//     }, [])
// }