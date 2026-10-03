import { Check, Calendar, Edit3, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../store/todoSlice";
import TodoForm from "./TodoForm";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  // Only start the exit animation; the actual delete happens in handleTransitionEnd
  const handleDelete = () => {
    if (isDeleting) return;
    setIsDeleting(true);
  };

  const handleEdit = (text) => {
    dispatch(updateTodo({ id: todo.id, text:text.trim()})); 
    setIsEditing(false);
  }

  const handleTransitionEnd = (e) => {
    // Ignore transitions bubbling up from child elements (e.g. the hover action buttons)
    if (e.target !== e.currentTarget) return;
    if (isDeleting && e.propertyName === "opacity") {
      dispatch(deleteTodo(todo.id));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // A single opacity class avoids conflicts between the deleting and completed states
  const opacityClass = isDeleting
    ? "opacity-0 scale-95"
    : todo.completed
      ? "opacity-75 scale-100"
      : "opacity-100 scale-100";

    if(isEditing){
        return <div className="p-4 bg-gray-100">
            <TodoForm  initialValue={todo.text} onSubmit={handleEdit} onCancel={() => setIsEditing(false)} placeholder="update this task"/>
        </div>
    }

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`group p-4 hover:bg-gray-100 transition-all duration-200 ${opacityClass}`}
      style={{
        animationDelay: `${index * 50}ms`,
        animation: "slideInUp 0.3s ease-out forwards",
      }}
    >
      <div className="flex items-center gap-3">
        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition duration-200 ${
            todo.completed
              ? "bg-green-500 border-green-500 text-white hover:bg-green-600"
              : "border-gray-400 hover:border-green-500 hover:bg-green-50"
          }`}
        >
          {todo.completed && <Check size={14} />}
        </button>

        {/* TODO content */}
        <div className="flex-1 min-w-0">
          <div className="text-gray-800 leading-relaxed">{todo.text}</div>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>Created at {formatDate(todo.createdAt)}</span>
            </div>
            <span>Updated at {formatDate(todo.updatedAt)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-all duration-200"
            title="Edit TODO"
          >
            <Edit3 size={16} />
          </button>

          <button
            onClick={handleDelete}
            className="p-2 text-red-500 hover:text-red-600 hover:bg-gray-200 rounded-lg transition-all duration-200"
            title="Delete TODO"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;