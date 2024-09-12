
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [
        {
          "name": "Winter Jacket",
          "description": "A warm and cozy winter jacket perfect for cold weather.",
          "image": "https://example.com/images/winter-jacket.jpg",
          "donationItemId": 2,
          "categoriesIds": [1, 5],
          "price": 50.00
        },
        {
          "name": "School Backpack",
          "description": "Durable school backpack with multiple compartments.",
          "image": "https://example.com/images/school-backpack.jpg",
          "donationItemId": 1,
          "categoriesIds": [10],
          "price": 25.00
        },
        {
          "name": "Reading Glasses",
          "description": "High-quality reading glasses with anti-glare lenses.",
          "image": "https://example.com/images/reading-glasses.jpg",
          "donationItemId": 9,
          "categoriesIds": [2,12],
          "price": 15.00
        },
        {
          "name": "Baby Blanket",
          "description": "Soft and gentle baby blanket, perfect for newborns.",
          "image": "https://example.com/images/baby-blanket.jpg",
          "donationItemId": 12,
          "categoriesIds": [1,5],
          "price": 20.00
        },
        {
          "name": "Cooking Pot Set",
          "description": "A set of non-stick cooking pots in various sizes.",
          "image": "https://example.com/images/cooking-pot-set.jpg",
          "donationItemId": 17,
          "categoriesIds": [4, 7],
          "price": 60.00
        }
      ],
    selectedDonationId: null,
}

const Donation = createSlice({
    name: 'donations',
    initialState: initialState,
    reducers:{
        resetDonation: ()=>{
            return initialState;
        },
        updateSelectedDonationId:(state,action)=>{
            state.selectedDonationId = action.payload
        }
    }
})


export const {resetDonation, updateSelectedDonationId} = Donation.actions
export default Donation.reducer