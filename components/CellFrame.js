import React, { useState, useEffect } from "react";
import community from "../models/community";
import styles from "../styles/cellframe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function DropDown(props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setOpen(!open);
        props.onClick(open);
      }}
      className={styles.dropDown}
    >
      <FontAwesomeIcon size="1x" icon={!open ? faCaretRight : faCaretDown} />
    </div>
  );
}

function Childrens(props) {
  var data = props.childData;
  var idx = 0;
  // console.log('children data',props.childData);
  return (
    <>
      {data.map((child) => {
        return (
          <CellFrame
            cellData={child}
            key={child.id}
            onClick = {props.onClick}
            anchestor={[...props.anchestor, 1]}
            lastChildIndex={data.length - 1}
            currentIndex={idx++}
          />
        );
      })}
    </>
  );
}

function Ranger(props) {
  const newAnchestor = props.anchestor;
  var listKey = 0;
  function EmptyComponent() {
    return (
      <div style={{ width: "24px", height: "100%", overflow: "hidden" }}></div>
    );
  }
  function LineComponent() {
    return (
      <div className={styles.line}/>
    );
  }
  function LineEndComponent() {
    return (
      <div className={styles.lineEnd} >
         <div className={styles.horizontalDash}></div>
         <div className={styles.verticalDash}>
         </div>
      </div>
    );
  }
  function LineLastComponent() {
    return (
      <div className={styles.lineEnd} >
         <div className={styles.halfHorizontalDash}></div>
         <div className={styles.verticalDash}>
         </div>
      </div>
    );
  }
  return (
    <div style={{ display: "flex" }}>
      {newAnchestor.map((state, index) => {
        listKey++;
        if (index === 0) {
          return <EmptyComponent key={listKey}/>;
        } else if (index === newAnchestor.length - 1) {
          if(props.last){
            return <LineLastComponent key={listKey}/>
          }
          else {
            return <LineEndComponent key={listKey}/>;
          }
        } else {
          return state === 0 ? <EmptyComponent key={listKey} /> : <LineComponent key={listKey} />;
        }
      })}
    </div>
  );
}

function CellFrame(props) {
  var data = props.cellData;
  var anchestor = props.anchestor;
  var newAnchestor = anchestor;

  const handleClick = () => {
    props.onClick(data.id);
  }
  // If dropdown exists show recursive cell frames
  var lastChild = props.lastChildIndex === props.currentIndex;
  const [showChildren, setShowChildren] = useState(false);

  if (lastChild && anchestor.length != 0) {
    newAnchestor = [...anchestor];
    newAnchestor[newAnchestor.length - 1] = 0;
  }

  // console.log("id -> ", data.id);
  // console.log("anchestor ->", anchestor);
  // console.log("last child index -> ", props.lastChildIndex);
  // console.log("current index ->", props.currentIndex);

  // When dropdown is clicked , change the states
  const dropDownClick = () => setShowChildren(!showChildren);
  // const [community,setCommunity] = useState(props.cellData);
  return (
    <div className={styles.mainContainer} >
      <div className={styles.nodeData}>
        <Ranger anchestor={anchestor} last={lastChild} selfKey={data.id}/>
        {data.children.length ? <DropDown onClick={dropDownClick} /> : <></>}
        <div className={styles.heading} onClick={handleClick}>
          <div>{data.heading}</div>
          <div>{data.description}</div>
        </div>
      </div>
      {showChildren ? (
        <Childrens
          childData={data.children}
          anchestor={newAnchestor}
          onClick={props.onClick}
          lastChildIndex={props.lastChildIndex}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default CellFrame;
