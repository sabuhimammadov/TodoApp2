import { AddInfo } from "../Components/AddTodoItem/AddInfo"
import { TodoList } from "../Components/TodoList"

export const TodoContainer = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <AddInfo  />
            <TodoList />
        </div>
    )
}