import types from "./types";
const muations = {
  [types.INCREASE_COUNT]: state => {
    state.count++;
  },
  [types.DECREASE_COUNT]: state => {
    state.count--;
  }
};
export default muations;
