import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }) => {
    const response = await fetch("http://localhost:8800/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ username, password })
    })
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ username, password, email }) => {
    const response = await fetch("http://localhost:8800/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password, email })
    })
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    const response = await fetch("http://localhost:8800/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    info: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.info = null;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.info = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.info = null;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.info = null;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.info = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.info = null;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.info = null;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.info = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.info = null;
        state.error = action.error.message;
      });
    },
});

export default authSlice.reducer;