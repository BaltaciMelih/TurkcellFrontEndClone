import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk("register",async(data)=>{
    const res = await fetch(`http://localhost:3008/posts`,{
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
    })
    return await res.json();
})

export const formSlice = createSlice({
    name: 'user',
    initialState: {
    msg: "",
    user: "",
    token: "",
    loading: "",
    error: "",   
    },
    reducers: {

    },
    extraReducers: {
        [registerUser.pending]: (state,action) => {
            state.loading = true;
        },
        [registerUser.fulfilled]: (state,{payload:{error, msg}}) => {
            state.loading = false;
            if(error){
                state.error = error
            }else{
                state.msg = msg
            }
        },
        [registerUser.rejected]: (state,action) => {
            state.loading = true;
        }, 
    }
});

export default formSlice.reducer;