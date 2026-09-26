import { CheckCircle2, Plus,Trash2, Circle, Filter } from 'lucide-react';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
// import TodoItem from './TodoItem';
const TodoApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Todo Flow</h1>
          <p className="text-gray-600">Organize your tasks efficiently</p>
        </div>
        {/* Stats Card */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 mb-8 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2>Progress Overview</h2>
            <div className="text-2xl font-bold text-green-700">
            {/* complete status logic */}
          </div>
          </div>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        {/* Progress  Bar */}
        <div className="w-full bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"></div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
            <div>
                <div className="text-2xl font-bold text-gray-700">
                    {/* Total Stats Logic */}
                </div>
                <div className="text-sm text-gray-500">Total</div>
            </div>

            <div>
                <div className="text-2xl font-bold text-gray-700">
                    {/* Total Active Logic */}
                </div>
                <div className="text-sm text-gray-500">Active</div>
            </div>

            <div>
                <div className="text-2xl font-bold text-gray-700">
                    {/* Total Completed Logic */}
                </div>
                <div className="text-sm text-gray-500">Completed</div>
            </div>
        </div>
        </div>

        {/* Main TODO container */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-b-2xl border border-gray-300 overflow-hidden">
            {/* Action Bar */}
            <div className="p-6 border-b border-gray-300 ">
                <div className="flex items-center justify-between mb-4">
                    <button className="flex items-center gap-3 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-medium cursor-pointer">
                        <Plus size={20}/> Add your task
                    </button>

                    {/* Clear and Delete Buttons */}
                    <div className="flex items-center gap-2.5">
                        <button className=" flex items-center gap-3  text-red-500 px-4 py-2 rounded-lg  hover:bg-red-200 transition-colors duration-200 text-sm ">
                            <Trash2 size={16}/>
                            Clear completed
                        </button>

                        <button className=" flex items-center gap-3  text-green-500 px-4 py-2 rounded-lg  hover:bg-green-200 transition-colors duration-200 text-sm ">
                            <CheckCircle2 size={16}/>
                            Mark completed
                        </button>
                    </div> 
                </div>
                {/* TODO Filter */}
                <TodoFilter/>
            </div>

                {/* TODO Form */}
            <div className="p-6 border-b border-gray-300 bg-gray-100">
                <TodoForm/>
            </div>

            {/* Todo List */}
            <div className="max-h-96 overflow-y-auto">
                <div className="p-12 text-center">
                    <div className="text-gray-500">
                        <Circle size={48} className="mx-auto mb-4 opacity-50"/>
                        <p className="text-lg font-medium mb-2 text-gray-800">No TODOs to display</p>
                        <p className="text-sm text-gray-500">Add a new task to get started</p>
                    </div>

                    {/* Conditional Rendering */}
                    <div className="text-gray-600">
                        <Filter size={48} className='mx-auto mb-4 opacity-50'/>
                        <p className="text-lg font-medium mb-2 text-gray-800">No TODOs match the filter
                            {/* <TodoItem/> */}
                        </p>
                    </div>

                </div>
            </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6 text-gray-700 text-sm">
            Footer
        </div>
      </div>
    </div>
  );
};

export default TodoApp;