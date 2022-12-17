import React from 'react'
import styled from "../../style/TodoList.module.scss";
export default function SwitchBtn({btn,alreadyFinsih}) {
  return (
    <div className={styled.switchArea}>
        <p>Move done things to end?</p>
        <div class={styled.switch}>
          <input class={styled.switchCheckbox} id="switchID1" type="checkbox" name="switch-checkbox" checked={btn} onClick={()=>{alreadyFinsih()}}/>
          <label class={styled.switchLabel} for="switchID1">
              <span class={styled.switchTxt} turnOn="1" turnOff="2"></span>
              <span class={styled.switchRoundBtn}></span>
          </label>
       </div>
       </div>
  )
}
