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
  const progressBar = () => {};
  return (
    <div className={styled.card}>
      <div className={styled.container}>
        <div className={styled.title}>Todo List</div>
        <div className={styled.title}>add things to do</div>
        <hr />
        <div className={styled.listWrap}>
          {lsitData.map((v, i) => {
            return (
              <div className={styled.list}>
                <div className={styled.left}>
                  <input
                    type="checkbox"
                    name={v.text}
                    id={v.text}
                    checked={lsitData.completed}
                  />
                  <label htmlFor={v.text}>{v.text}</label>
                </div>
                <div className={styled.right}>
                  <i class="fa-solid fa-x"></i>
                </div>
              </div>
            );
          })}
          <div>Add to List</div>
          <div className={styled.bottom}>
            <div className={styled.search}>
              <input type="text" />
            </div>
            <div className={styled.add}>
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
