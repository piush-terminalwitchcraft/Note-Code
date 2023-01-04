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
      new community("201","sub grp","dscewcew",[
        new community("210","sub grp 2","dscewcew",[]),
        new community("211","sub grp 3","dscewcew",[]),
      ]), new community("202","dexeq","axeqdwq",[
        new community("220","sub grp 2","dscewcew",[]),
        new community("221","sub grp 3","dscewcew",[]),
        new community("222","sub grp 3","dscewcew",[]),
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
            
            return <CellFrame key={node.id} cellData={node} anchestor={[0]} lastChildIndex={0}/>;
          })}
            
        </div>
        <div className={style.rightPart}>
          
        </div>
      </Split>
    </div>
  );
}
