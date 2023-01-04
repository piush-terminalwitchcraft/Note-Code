import React, { useState } from "react";
import community from "../models/community";
import styles from "../styles/cellframe.module.css";
import { ReactSVG } from "react-svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

function DropDown(props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      // className={dropDownStyles.body}
      onClick={() => {
        setOpen(!open);
        props.onClick(open);
      }}
      style={{
        // height: "4rem",
        width: "24px",
      }}
      
    >
      <FontAwesomeIcon icon={!open?faCaretRight:faCaretDown} />
     
    </div>
  );
}

function Childrens(props){
  var data = props.childData
    console.log('children data',props.childData);
    return (
      <>
      {data.map((child)=>{
        return <CellFrame cellData={child} 
        key={child.id} 
        anchestor={[...props.anchestor,1]}  
        lastChildIndex={data.length-1}/>;
      })}
      </>
    )
}

// function Ranger(props){

// }

function CellFrame(props) {
  var data = props.cellData;
  console.log(data.id,props.anchestor,props.lastChildIndex);
  // If dropdown exists show recursive cell frames
  const [showChildren, setShowChildren] = useState(false);

  // When dropdown is clicked , change the states
  const dropDownClick = () => setShowChildren(!showChildren);
  // const [community,setCommunity] = useState(props.cellData);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.nodeData}>
        {/* <Ranger anchestor={props.anchestor} lastChildIndex={props.lastChildIndex}/> */}
        {data.children.length ? (
          <DropDown onClick={dropDownClick} />
        ) : (
          <></>
        )}
        <div className={styles.heading}>{data.heading}</div>
      </div>
          {showChildren? <Childrens childData={data.children} 
          anchestor={props.anchestor} lastChildIndex={props.lastChildIndex}/>:<></>}
      
    </div>
  );
}


  export default CellFrame;