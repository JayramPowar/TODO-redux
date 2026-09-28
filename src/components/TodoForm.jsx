import { Check, X } from "lucide-react";


const TodoForm = () => {
  return (
    <div className="flex items-center gap-3">
        <div className="flex-1">

            <input className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-gray-800 placeholder:bg-gray-600" maxLength={500} />
        </div>
        <div className="flex items-center gap-2.5">
            <button type="submit" className="flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200" title="Save TODO">
                <Check size={18} />
            </button>

            <button type="submit" className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200" title="Save TODO">
                <X size={18} />
            </button>
        </div>
    </div>
  )
}

export default TodoForm;
