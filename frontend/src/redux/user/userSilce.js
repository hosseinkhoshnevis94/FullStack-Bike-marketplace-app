import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: state => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.loading = false;
    },
    logout: state =>{
        state.user=null
        
    }
  }
});

export const { signInStart, signInSuccess, signInFailure ,logout} = userSlice.actions;

export default userSlice.reducer;
