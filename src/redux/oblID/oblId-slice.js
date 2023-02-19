const { createSlice } = require('@reduxjs/toolkit');

const oblIdInitalState = {
  oblId: 0,
};

const oblIdSlice = createSlice({
  name: 'oblId',
  initialState: oblIdInitalState,
  reducers: {
    setOblId(state, action) {
      state.oblId = action.payload;
    },
  },
});

export const { setOblId } = oblIdSlice.actions;
export const oblIdReducer = oblIdSlice.reducer;
