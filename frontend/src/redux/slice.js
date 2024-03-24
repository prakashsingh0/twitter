import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        otherUsers: null,
        profile: null
    },
    reducers: {
        // multiple actions

        getUser: (state, action) => {
            state.user = action.payload;
            // console.log(state.user);
        },
        getOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
        getMyProfile: (state, action) => {
            state.profile = action.payload;
        },
        followingUpdate: (state, action) => {
            if (state.user.following.includes(action.payload)) {
                //unfollow
                state.user.following = state.user.following.filter((itemId)=>{
                    return itemId !== action.payload;
                })
            } else {
                //follow
                state.user.following.push(action.payload);
            }
        }
    }
})

export const { getUser, getOtherUsers, getMyProfile, followingUpdate } = userSlice.actions;
export default userSlice.reducer;