import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk("register/postRegister",async(data)=>{
    const res = await fetch(`http://localhost:3008/posts/`,{
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
    }).then(res => res.json()).catch((err) => console.log(err))
})

export const formSlice = createSlice({
    name: 'user',
    initialState: {
    msg: "",
    user: "",
    token: "",
    msg: "",
    loading: false,
    error: null,   
    },
    reducers: {

    },
    extraReducers: (builder) => {
       builder.addCase(registerUser.pending, (state,action)=>{
        state.loading=true;
        state.error = "";
       });
       builder.addCase(registerUser.fulfilled,(state,{action: {error,msg}})=>{
            state.loading = false;
            if(error){
                 state.error = error
             }else{
                 state.msg = msg
             }

       });
       builder.addCase(registerUser.rejected, (state,action)=>{
        state.loading = false;
        state.error = "Error fetching user data"
       })
    }
});

export default formSlice.reducer;

 // [registerUser.pending]: (state,action) => {
        //     state.loading = true;
        // },
        // [registerUser.fulfilled]: (state,{payload:{error, msg}}) => {
        //     state.loading = false;
        //     if(error){
        //         state.error = error
        //     }else{
        //         state.msg = msg
        //     }
        // },
        // [registerUser.rejected]: (state,action) => {
        //     state.loading = true;
        // }, 