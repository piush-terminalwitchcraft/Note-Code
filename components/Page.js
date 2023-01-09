import React, { useState, useRef } from "react";
import {TextViewer, CustomEditor} from "./index";
import styles from "./../styles/Page.module.css";

/**
 * 
 * @param {showButton, toggle, editMode} props 
 * @returns function to show buttons, on hover 
 * @returns function which change editMode and showButton 
 * @returns boolean to display editor or viewer
 */
function PageButtons(props) {
  const { showButton, toggle, editMode } = props;
  
  if(!editMode){
      return (
        <div className={styles.pageButtons}>
          {showButton ? (
            <div>
              <button onClick={toggle}>Edit</button>
              <button>Delete</button>
            </div>
          ) : null}
        </div>
      );
  }
  else{
    return (
        <></>
      );
  }
}

function PageBody(props) {
  const { editMode, htmlData, toggle, setHtmlData } = props;
  return editMode ? (
    <CustomEditor htmlData={htmlData} toggle={toggle} setHtmlData={setHtmlData}/>
  ) : (
    <TextViewer htmlData={htmlData} tabIndex={0} />
  );
}

export default function Page(props) {

  const { readOnly, data, actionTrigger, index } = props;
  var htmlData = data;
  const [showButton, setShowButton] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggle = () => {
    setShowButton(!showButton);
    setEditMode(!editMode);
  };
  const setHtmlData = (htmlString) =>{
    actionTrigger("UPDATE",index,htmlString);
  }


  if (readOnly) {
    return (
      <div
        className={styles.page}
        onMouseOver={() => setShowButton(true)}
        onMouseOut={() => setShowButton(false)}
      >
        {showButton && !editMode && <PageButtons showButton={showButton} toggle={toggle} editMode={editMode}/>}
        <PageBody editMode={editMode} htmlData={htmlData} toggle={toggle} setHtmlData={setHtmlData}/>
        {/* {showButton && editMode && <PageButtons showButton={showButton} toggle={toggle} editMode={editMode}/>} */}
      </div>
    );
  } else {
    return <TextViewer htmlData={htmlData} />;
  }
}
