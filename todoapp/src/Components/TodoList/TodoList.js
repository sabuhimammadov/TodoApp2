import { useDispatch, useSelector } from 'react-redux';
import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import styles from "./TodoList.module.css";
import { editTodo, handleSave, removeTodo } from '../../share/store/slices/todoSlices';

export const TodoList = () => {
    const selTodo = useSelector((state)=>state.todos.lists)
    const dispatch = useDispatch()
    console.log("seldodo",selTodo)
      const handleEditClick = (id) => {
        dispatch(editTodo(id))
        
      };
      const handleSaveClick = (id, newText) => {
        dispatch(handleSave({id,newText}))
      
      };

      const removeItem = (id)=>{
        dispatch(removeTodo(id))
      }
      return (
        <div className=''>
          <ul>
            {selTodo.map((todo) => (
              <li key={todo.id} className={`d-flex align-items-center justify-content-between text-white gap-5 mb-4 mt-4 ${styles.todoItem}`}>
                {todo.isEditing ? (
                  <div>
                    <input
                    className={styles["add-item"]}
                      type="text"
                      defaultValue={todo.text}
                      onBlur={(e) => handleSaveClick(todo.id, e.target.value)}
                    />
                  </div>
                ) : (
                  <div className='d-flex  align-items-center justify-content-between  gap-5'>
                    {todo.text}
                    <div className={`d-flex gap-4  `}>
                <span className={`${styles.icon} ${styles["bg-1"]}`} onClick={() => handleEditClick(todo.id)}><BiSolidEditAlt /></span>
                <span className={`${styles.icon} ${styles["bg-2"]}`} onClick={() => removeItem(todo.id)}><MdDelete /></span>
            </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
}
// return (
//     <TodoItem/>
//     // <li className={`d-flex align-items-center justify-content-between text-white gap-5 mb-4 ${styles.todoItem}`} key={todo.id}>
//     //     <>
//     //         <span>{todo.text}</span>
            
//     //     </>

//     // </li>
// );