import types from "./types";
const actions = {
  setLoading: (context, loading) => {
    context.commit(types.SET_LOADING, loading);
  }
};
export default actions;
