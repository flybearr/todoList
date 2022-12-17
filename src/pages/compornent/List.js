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
                    className={styled.v}
                  />
                  <label htmlFor={v.text} className={styled.check} ></label>
                  {v.editing ? <EditForm updateText={updateText} id={v.id} text={v.text}/> : <p style={v.completed ?{textDecoration:'line-through'}:{}}>{v.text}</p>}
                 
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
