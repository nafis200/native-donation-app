
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: 'nata',
    lastName: 'Vacheishvili',
    userId: 1,
    profileImage: 'https://i.postimg.cc/mkGsv8Hy/1000-F-767620795-dc-VEg9-TKd-QQ3-PO8km54pc-A5-C1pd-K87l-U.jpg'
}

export const User = createSlice({
  name : 'user',
  initialState: initialState,
  reducers:{
      updateFirstName: (state,action) =>{
         state.firstName = action.payload.firstName;
      },
      resetToInitialState: ()=>{
        return initialState
     }
  }
});

export const {updateFirstName,resetToInitialState} = User.actions

export default User.reducer;