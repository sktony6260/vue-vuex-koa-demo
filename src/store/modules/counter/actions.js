import types from "./types";
const actions = {
  increaseCount: (context, async = false) => {
    if (async) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
          context.commit(types.INCREASE_COUNT);
        }, 1500);
      });
    } else {
      context.commit(types.INCREASE_COUNT);
    }
  },
  decreaseCount: (context, async = false) => {
    if (async) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
          context.commit(types.DECREASE_COUNT);
        }, 1500);
      });
    } else {
      context.commit(types.DECREASE_COUNT);
    }
  }
};
export default actions;
