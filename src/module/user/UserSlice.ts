import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus, IUserForm, IUserState } from "./User.type";
import { createUserApi, getUserListApi } from "./UserService";


const initialState: IUserState = {
    list: [],
    listStatus: ApiStatus.ideal,
    createUserFormStatus: ApiStatus.ideal,
};

export const getUserListAction = createAsyncThunk("user/getUserListAction", 
    async () => {
        const res = await getUserListApi();
        return res.data;
    }
);

export const createUserAction = createAsyncThunk(
    "user/createUserAction",
    async (data: IUserForm) => {
        const res = await createUserApi(data);
        return res.data;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetCreateListStatus : (state) => {
            state.createUserFormStatus = ApiStatus.ideal
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserListAction.pending, (state) => {
            state.listStatus = ApiStatus.loading
        });
        builder.addCase(getUserListAction.fulfilled, (state, action) => {
            state.listStatus = ApiStatus.ideal
            state.list = action.payload
        });
        builder.addCase(getUserListAction.rejected, (state) => {
            state.listStatus = ApiStatus.error
        })

        //create user status
        builder.addCase(createUserAction.pending, (state) => {
            state.createUserFormStatus = ApiStatus.loading
        });
        builder.addCase(createUserAction.fulfilled, (state, action) => {
            state.createUserFormStatus = ApiStatus.success
        });
        builder.addCase(createUserAction.rejected, (state) => {
            state.createUserFormStatus = ApiStatus.error
        })
    }
});


export default userSlice.reducer
export const { resetCreateListStatus } = userSlice.actions