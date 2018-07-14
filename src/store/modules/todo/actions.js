import types from "./types";
import comTypes from "../com/types";
import { request, METHODS } from "@/utils";
const actions = {
  getTodoList: context => {
    context.commit(comTypes.SET_LOADING, true, { root: true });
    request("/api/todo/v1/todos").then(res => {
      context.commit(types.GET_TODOS, res);
      context.commit(comTypes.SET_LOADING, false, { root: true });
    });
  },
  createTodo: (context, reqData) => {
    return request("/api/todo/v1/todo", reqData, METHODS.POST).then(res => {
      context.commit(types.CREATE_TODO, res);
    });
  },
  updateTodo: (context, reqData) => {
    return request(
      `/api/todo/v1/todo/${reqData.id}`,
      reqData,
      METHODS.PATCH
    ).then(res => {
      context.commit(types.UPDATE_TODO, reqData);
    });
  },
  deleteTodo: (context, reqData) => {
    return request(
      `/api/todo/v1/todo/${reqData.id}`,
      undefined,
      METHODS.DELETE
    ).then(res => {
      context.commit(types.DELETE_TODO, reqData);
    });
  }
};
export default actions;
