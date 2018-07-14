import types from "./types";
const muations = {
  [types.GET_TODOS]: (state, res) => {
    state.todoList = res.data.data;
    console.log(state.todoList);
  },
  [types.UPDATE_TODO]: (state, reqData) => {
    let todoList = [...state.todoList];
    let index = todoList.findIndex(o => o.id == reqData.id);
    todoList[index] = reqData;
    state.todoList = todoList;
  },
  [types.CREATE_TODO]: (state, res) => {
    state.todoList = [...state.todoList, res.data.data];
  },
  [types.DELETE_TODO]: (state, reqData) => {
    state.todoList = [...state.todoList].filter(o => o.id != reqData.id);
  }
};
export default muations;
