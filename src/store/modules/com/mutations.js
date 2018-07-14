import types from "./types";
const muations = {
  [types.SET_LOADING]: (state, loading) => {
    state.loading = loading;
  }
};
export default muations;
