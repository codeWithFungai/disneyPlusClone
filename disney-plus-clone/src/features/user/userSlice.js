import { createSlice } from '@reduxjs/toolkit';

const initialState = { //before the user logs in, keep the username, email and photo blank.
    name: "",
    email:"",
    photo: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {  //when the user logs in, remember the username, email and photo.
           state.name = action.payload.name;
           state.email = action.payload.email;
           state.photo = action.payload.photo; 
        },

        setSignOutState: state => { //when the user signs out, clear the data for the username, email and photo.
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;


//make the currently logged in user's name, email and photo accessible in other parts of the app.
export const selectUserName = state => state.user.name;   
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo; 

export default userSlice.reducer;