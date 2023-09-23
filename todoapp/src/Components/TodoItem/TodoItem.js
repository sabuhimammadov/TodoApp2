import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import styles from "../TodoList/TodoList.module.css";
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../share/store/slices/todoSlices';
import Swal from 'sweetalert2';

export const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
    const removeItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeTodo(id));
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    }
console.log("list")
    return (
        <>
            <li className='d-flex align-items-center justify-content-between text-white gap-5 mb-4'>
                <span>{todo.text}</span>
                <div className='d-flex gap-4 ms-5'>
                    <span className={`${styles.icon} ${styles["bg-1"]}`} ><BiSolidEditAlt /></span>
                    <span className={`${styles.icon} ${styles["bg-2"]}`} onClick={()=>removeItem(todo.id)}><MdDelete /></span>
                </div>
            </li>

            
        </>
    );
}
