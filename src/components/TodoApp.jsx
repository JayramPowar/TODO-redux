import { CheckCircle2, Plus, Trash2, Circle, Filter } from "lucide-react";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  selectFilteredTodos,
  selectIsAddingTodo,
  selectTodos,
  selectTodoStats,
} from "../store/selectors";
import { setIsAddingTodo } from "../store/todoSlice";
// import TodoItem from './TodoItem';
const TodoApp = () => {
  const dispatch = useDispatch();

  const todos = useSelector(selectTodos);
  const filteredTodos = useSelector(selectFilteredTodos);
  const stats = useSelector(selectTodoStats);
  const filter = useSelector(selectFilter);
  const isAddingTodo = useSelector(selectIsAddingTodo);

  console.log(todos);
  

  const handleAddTodo = () => {
    dispatch(setIsAddingTodo(true));
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Todo Flow</h1>
          <p className="text-gray-600">Organize your tasks efficiently</p>
        </div>
        {/* Stats Card */}
        {stats.total >0 && (<div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 mb-8 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2>Progress Overview</h2>
            <div className="text-2xl font-bold text-green-700">
              {/* complete status logic */}
              {stats.completionPercentage}%
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            {/* Progress  Bar */}
            <div
              className="w-full bg-linear-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${stats.completionPercentage}%` }}
            ></div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-700">
                {/* Total Stats Logic */}
                {stats.total}
              </div>
              <div className="text-sm text-gray-500">Total</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-gray-700">
                {/* Total Active Logic */}
                {stats.active}
              </div>
              <div className="text-sm text-gray-500">Active</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-gray-700">
                {/* Total Completed Logic */}
                {stats.completed}
              </div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
          </div>
        </div>)}

        {/* Main TODO container */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-b-2xl border border-gray-300 overflow-hidden">
          {/* Action Bar */}
          <div className="p-6 border-b border-gray-300 ">
            <div className="flex items-center justify-between mb-4">
              <button className="flex items-center gap-3 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-medium cursor-pointer" onClick={handleAddTodo}>
                <Plus size={20} /> Add your task
              </button>

              {/* Clear and Delete Buttons */}

              {stats.total > 0 && (
                <div className="flex items-center gap-2.5">
                  {stats.completed > 0 && (
                    <button className=" flex items-center gap-3  text-red-500 px-4 py-2 rounded-lg  hover:bg-red-200 transition-colors duration-200 text-sm ">
                      <Trash2 size={16} />
                      Clear completed
                    </button>
                  )}

                  {stats.active > 0 && (
                    <button className=" flex items-center gap-3  text-green-500 px-4 py-2 rounded-lg  hover:bg-green-200 transition-colors duration-200 text-sm ">
                      <CheckCircle2 size={16} />
                      Mark completed
                    </button>
                  )}
                </div>
              )}
            </div>
            {/* TODO Filter */}
            <TodoFilter currentFilter={filter} stats={stats} />
          </div>

          {/* TODO Form */}
          {isAddingTodo && (
            <div className="p-6 border-b border-gray-300 bg-gray-100">
              <TodoForm  />
            </div>
          )}

          {/* Todo List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredTodos.length === 0 ? (
              <div className="p-12 text-center">
                {todos.length === 0 ? (
                  <div className="text-gray-500">
                    <Circle size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2 text-gray-800">
                      No TODOs to display
                    </p>
                    <p className="text-sm text-gray-500">
                      Add a new task to get started
                    </p>
                  </div>
                ) : (
                  <div className="text-gray-600">
                    <Filter size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2 text-gray-800">
                      No TODOs match the {filter}
                      <p className="text-sm">
                        {filter ==="completed" && "You have completed all tasks!"}
                        {filter ==="active" && "You haven't completed any tasks yet!"}
                      </p>
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="divide-y divide-gray-300"> 
                {filteredTodos.map((todo,index) => (
                  <TodoItem key={todo.id} todo={todo} index={index}/>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6 text-gray-700 text-sm">Footer</div>
      </div>
    </div>
  );
};

export default TodoApp;
