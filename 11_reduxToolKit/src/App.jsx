import AddTodo from "./components/addTodo"
import Todoslist from "./components/Todoslist"

function App() {

  return (
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4 flex justify-center">
                        <AddTodo />
                    </div>
                    <div>
                        <Todoslist />
                    </div>
                </div>
            </div>

  )
}

export default App
