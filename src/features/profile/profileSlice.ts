import {createSlice} from '@reduxjs/toolkit'
import {ProfileState} from "../../types/profile"

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data: null,
        loading: false,
        error: null,
    } as ProfileState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
        setProfile(state, action) {
            state.data = action.payload
            state.error = null
        },
    }
})

export const {setLoading, setError, setProfile} = profileSlice.actions

export default profileSlice.reducer

