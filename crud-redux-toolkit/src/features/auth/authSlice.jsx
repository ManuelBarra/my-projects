
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.loading = true;
            state.error = null;
            fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(action.payload),
            })
                .then((response) => response.json())
                .then((data) => {
                    state.token = data.token;
                    state.loading = false;
                })
                .catch((error) => {
                    state.error = error.message;
                    state.loading = false;
                });
        },
        logout: (state) => {
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;