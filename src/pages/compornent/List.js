import React from 'react'
import styled from "../../style/TodoList.module.scss";
import EditForm from './todoItem/EditForm';
export default function List({todos,toggleTodoCompleted,delList,scrollRef,updateText,toggleTodoEditing}) {
    
  return (
    <div className={styled.listWrap} ref={scrollRef}>
          {todos.map((v, i) => {
            return (

              <div className={styled.list} key={i}>
                <div className={styled.left}>
                  <input
                    type="checkbox"
                    id={v.text}
                    checked={v.completed}
                    onChange={()=>{toggleTodoCompleted(v.id)}}
                  />
                  {v.editing ? <EditForm updateText={updateText} id={v.id} text={v.text}/> : <label htmlFor={v.text} style={v.completed ?{textDecoration:'line-through'}:{}}>{v.text}</label>}
                 
                </div>
                <div className={styled.right}>
                  

                  {v.editing ? '': <button onClick={()=>{
                    toggleTodoEditing(v.id)
                  }}>編輯</button> }

                  <i className="fa-solid fa-xmark" onClick={()=>{delList(v.id)}}></i>
                </div>
              </div>
            );
          })}
        </div>
  )
}
