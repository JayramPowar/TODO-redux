import { CheckCircle, Clock, List } from "lucide-react";


const TodoFilter = ({currentFilter, stats}) => {

    const filters = [
      {key:"all", label: "All",icon:List, count: stats.total},
      {key:"active", label: "Active",icon:Clock, count: stats.active},
      {key:"completed", label: "Completed",icon:CheckCircle, count: stats.completed}
    ]

  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex bg-gray-200 rounded-lg p-1">
        {filters.map(({key,label,icon:Icon, count}) =>{
            return <button className={`flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentFilter === key ? 
            "text-gray-800 bg-white  shadow-md" : 
            "text-gray-700 hover:text-gray-800 hover:bg-gray-300"}`} key={key}>
              <Icon size={16}/>
              <span>{label}</span>
              <span>{count}</span>
            </button>
        })}
      </div>
    </div>
  )
}

export default TodoFilter;
