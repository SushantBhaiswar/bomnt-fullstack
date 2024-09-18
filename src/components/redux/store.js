// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') || false,
    user: JSON.parse(localStorage.getItem('user')) || null, // 'author', 'user', or null
    token: localStorage.getItem('token') || null, // 'author', 'user', or null
};

// Create a slice for authentication
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user
            state.token = action.payload.token
            console.log(state)
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
});

// Export the actions from the slice
export const { login, logout } = authSlice.actions;

// Create and configure the store
const store = configureStore({
    reducer: authSlice.reducer,
});

export default store;
