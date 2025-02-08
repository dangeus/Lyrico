import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        loginSuccess(state, action) {
            state.user = action.payload
            state.isAuthenticated = true
            state.loading = false
            state.error = null
        },
        logout(state) {
            state.user = null
            state.isAuthenticated = false
            state.loading = false
            state.error = null
        },
        setLoading(state) {
            state.loading = true
        },
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
    }
})

export const {loginSuccess, logout, setLoading, setError} = authSlice.actions

export default authSlice.reducer

