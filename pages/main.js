import React from "react";
import style from "../styles/main.page.module.css";
import Split from "react-split";
import { CellFrame } from "../components";
import community from "../models/community";
export default function Main() {
  var dummy = [
    new community("10","Mera whatsapp group","ncksjdncks",[
      new community("11","sub grp","dscewcew",[]), new community("12","dexeq","axeqdwq",[])
    ]),
    new community("200","Mera whatsapp group 2","ncksjdncks",[
      new community("210","sub grp","dscewcew",[
        new community("211","sub grp 2","dscewcew",[]),
        new community("212","sub grp 3","dscewcew",[]),
      ]), new community("220","dexeq","axeqdwq",[
        new community("221","sub grp 2","dscewcew",[]),
        new community("222","sub grp 3","dscewcew",[]),
        new community("223","sub grp 3","dscewcew",[]),
      ])
    ]),
    new community("30","Mera whatsapp group 3","ncksjdncks",[
      // new community("31","sub grp","dscewcew",[]), new community("32","dexeq","axeqdwq",[])
    ]),


  ];
  return (  
    <div className={style.mainBody}>

      <div className={style.header}>
          Welcome to note
      </div>
      <Split  sizes={[20,80]} className={style.mainContainer}  >
        <div className={style.leftPart}>
          {dummy.map((node)=>{
            
            return(
              <div key={node.id}>
              <CellFrame cellData={node} anchestor={[1]} lastChildIndex={0} 
              currentIndex={0}/>
              <div className={style.divider}></div>
              </div>
            )
          })}
            
        </div>
        <div className={style.rightPart}>
          
        </div>
      </Split>
    </div>
  );
}
