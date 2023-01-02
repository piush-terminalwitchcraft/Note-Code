import React from "react";
import style from "../styles/main.page.module.css";
import Split from "react-split";


import { CustomEditor } from "../components";
export default function Main() {
  return (
    <div className={style.mainBody}>

      <div className={style.header}>
          Welcome to note
      </div>
      <Split  sizes={[20,80]} className={style.mainContainer}  >
        <div className={style.leftPart}>

            
        </div>
        <div className={style.rightPart}><CustomEditor/></div>
      </Split>
    </div>
  );
}
