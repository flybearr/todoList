import React, { useState, useEffect, useRef } from "react";
import styled from "../style/TodoList.module.scss";
export default function TodoList() {

  const lsitData = [
    {
      id: 1,
      text: "Learn React.js",
      completed: true,
      editing: false,
    },
    { id: 2, text: "Learn goLang", completed: false, editing: false },
  ];

  const [todos,setTodos] =useState(lsitData)
  const [newText,setNewText] =useState('')
  const [btn,setBtn] =useState(false)

  //排序已完成的
  const alreadyFinsih=()=>{
    
    if(!btn){
      const newTodos = [...todos]
      newTodos.sort((a,b)=>a.completed-b.completed)
      setTodos(newTodos)
    }else{
      const newTodos = [...todos]
      newTodos.sort((a,b)=>b.completed-a.completed)
      setTodos(newTodos)
    }
    setBtn(!btn)
  }

  //進度條
  const progressBar = () => {
    let howMuchCompelete = 0
    todos.map((v2,i2)=>{
      if(v2.completed) return howMuchCompelete +=1
    })

    let present =  (Math.floor((howMuchCompelete/todos.length) * 100) + '%') 
    if(howMuchCompelete===0){
      present  = '0%'
    }
    
    return  <div className={styled.progressBar}>
    <p>{present}</p>
    <div className={styled.empty}>
    <div className={styled.howLong} style={{width:`${present}`}}></div>
    </div>
  </div>
   
    
  };


  //刪除該項list
  const delList = (v)=>{
   const newTodos =  todos.filter((v2,i2)=>{
      return v2.id !== v.id
    })
    setTodos(newTodos)
  }
  //新增該做的事
  const addTodo = (text)=>{
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    };
    // 加入輸入的文字到todos陣列中
    // 三步驟的方式(拷貝 -> 加入到新陣列中 -> 設定回state)
    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
  }

    // 用在某個id項目，切換completed屬性true/false
    const toggleTodoCompleted = (id) => {
      const newTodos = todos.map((v, i) => {
        if (v.id === id) return { ...v, completed: !v.completed };
  
        return { ...v };
      });
  
      setTodos(newTodos);
    };


  return (
    <div className={styled.card}>
      <div className={styled.container}>
        <h1>Todo List</h1>
        <div className={styled.title}>Add things to do</div>
        {progressBar()}
        <div className={styled.listWrap}>
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
                  <label htmlFor={v.text}>{v.text}</label>
                </div>
                <div className={styled.right}>
                  <i class="fa-solid fa-x" onClick={()=>{delList(v)}}></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styled.switchArea}>
        <p>Move done things to end</p>
        <div class={styled.switch}>
          <input class={styled.switchCheckbox} id="switchID1" type="checkbox" name="switch-checkbox" checked={btn} onClick={()=>{alreadyFinsih()}}/>
          <label class={styled.switchLabel} for="switchID1">
              <span class={styled.switchTxt} turnOn="1" turnOff="2"></span>
              <span class={styled.switchRoundBtn}></span>
          </label>
       </div>
       </div>
        <div>Add to List</div>
          <div className={styled.bottom}>
            <div className={styled.search}>
              <input type="text"  value={newText} onChange={(e)=>{
                setNewText(e.target.value)
              }}/>
            </div>
            <div className={styled.add} onClick={()=>{
              addTodo(newText)
            }}>
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
      </div>
    </div>
  );
}
