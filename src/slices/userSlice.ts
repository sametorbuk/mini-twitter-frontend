import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: number | null;
  name: string | null;
  surname: string | null;
  phoneNumber: string | null;
  email: string | null;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  surname: null,
  phoneNumber: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        email: string;
        token: string;
        phoneNumber: string;
      }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.phoneNumber = action.payload.phoneNumber;
    },

    logout: (state) => {
      state.email = null;
      state.id = null;
      state.phoneNumber = null;
      state.surname = null;
      state.token = null;
      state.name = null;
    },

    updateUser: (
      state,
      action: PayloadAction<{
        id?: number;
        name?: string;
        email?: string;
        surname?: string;
        token?: string;
        phoneNumber?: string;
      }>
    ) => {
      const updates = action.payload;

      for (const key in updates) {
        if (Object.prototype.hasOwnProperty.call(updates, key)) {
          state[key as keyof typeof updates] =
            updates[key as keyof typeof updates] ?? null;
        }
      }
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;
