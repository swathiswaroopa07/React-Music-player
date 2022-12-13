import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const playList = new createSlice({
    name:"playlist",
    initialState:{
        value: [],
        status: "pending",
        error: null
    },
    reducers:{

    },
    extraReducers:(builders)=>{
    builders.addCase(fetch.pending,(state,action)=>{
        state.value = action.payload
    state.status ="pending";
    state.error= null;
    })
    builders.addCase(fetch.fulfilled,(state,action)=>{
    state.value = action.payload;
    state.status ="fulfilled";
    state.error= null;
    })
    builders.addCase(fetch.rejected,(state,action)=>{
    state.status ="rejected";
    state.value = action.payload;
    })
    }

    })
export const fetch = createAsyncThunk("Fetch",async(args )=>{
const value = args.input.split(" ").join("")
console.log(value);
    const data1 = await axios.get(`https://saavn.me/search/songs?query=${value}`)

    return data1.data;



})
export default playList;