import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading : false
}

const globalLoad = createSlice({
    name: 'global',
    initialState,
    reducers:{
        setLoading(state, action){
            state.loading = action.payload
        }
    }
})

export default {setLoading} = globalLoad.actions;
export default globalLoad.reducer