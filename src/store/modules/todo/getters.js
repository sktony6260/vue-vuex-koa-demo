const getters = {
  todos: state => state.todoList.filter(o => o.status == 0),
  completeds: state => state.todoList.filter(o => o.status == 1),
  todoList: state => state.todoList
};
export default getters;
