import React, { useRef } from "react";
import styles from "./AddInfo.module.css";
import { useDispatch } from "react-redux";
import {todoAdded } from "../../share/store/slices/todoSlices";
import { toast } from "react-toastify";

export const AddInfo = () => {
  const dispatch = useDispatch()
  const el = useRef()
  const handleSend = () => {
    const newValue = el.current.value
    if(!newValue){
      toast.error("Lutfen todo giriniz")
      return
    }
    dispatch(todoAdded(newValue))
    toast.success("Todo basari ile eklendi")
    el.current.value = ""
  }
  return (
    <div className="d-flex flex-column align-items-center mt-5 ">
      <h2 className={styles.title}>Todo App</h2> <br />
      <div className={styles["add-info"]}>
        <input
          className={styles['add-item']}
          placeholder="Add Todo Item"
          ref={el}
        />
        <button className={styles["add-btn"]} onClick={handleSend}>Add</button>
      </div>
    </div>
  );
};
