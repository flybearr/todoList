import React,{useRef,useEffect} from 'react'
import styled from "../../style/TodoList.module.scss";
export default function List({todos,toggleTodoCompleted,delList,scrollRef}) {
    
  return (
    <div className={styled.listWrap} ref={scrollRef}>
          {todos.map((v, i) => {
            return (

              <div className={styled.list}>
                <div className={styled.left}>
                  <input
                    type="checkbox"
                    id={v.text}
                    checked={v.completed}
                    onClick={()=>{toggleTodoCompleted(v.id)}}
                  />
                  <label htmlFor={v.text} style={v.completed ?{textDecoration:'line-through'}:{}}>{v.text}</label>
                </div>
                <div className={styled.right}>
                  <i class="fa-solid fa-xmark" onClick={()=>{delList(v)}}></i>
                </div>
              </div>
            );
          })}
        </div>
  )
}
