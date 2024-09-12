

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        { categoryId: 1, name: 'Electronics' },
        { categoryId: 2, name: 'Fashion' },
        { categoryId: 3, name: 'Home & Kitchen' },
        { categoryId: 4, name: 'Books' },
        { categoryId: 5, name: 'Sports' },
        { categoryId: 6, name: 'Toys' },
        { categoryId: 7, name: 'Automotive' },
        { categoryId: 8, name: 'Health & Beauty' },
        { categoryId: 9, name: 'Grocery' } 
    ],
    selectedCategoryId : 1,
      
}

const Categories = createSlice({
   name: 'categories',
   initialState: initialState,
   reducers:{
      resetCategories: ()=>{
         return initialState
      },
      updateSelectedCategoryId: (state,action)=>{
        state.selectedCategoryId = action.payload
      }
   },
})
export const {resetCategories,updateSelectedCategoryId} = Categories.actions

export default Categories.reducer