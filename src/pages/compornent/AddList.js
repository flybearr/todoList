import React from 'react'
import styled from "../../style/TodoList.module.scss";
export default function AddList({newText,setNewText,addTodo,setOriginTodos}) {
  return (
    <div>
        <div>Add to List</div>
          <div className={styled.bottom}>
            <div className={styled.search}>
              <input type="text"  value={newText} onChange={(e)=>{
                setNewText(e.target.value)
                setOriginTodos(e.target.value)
              }}/>
            </div>
            <div className={styled.add} onClick={()=>{
              addTodo(newText)
            }}>
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
    </div>
  )
}
