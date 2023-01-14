import React, { useState, useRef, useEffect } from "react";
import { TextViewer, CustomEditor } from "./index";
import styles from "./../styles/Page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

/**
 *
 * @param {showButton, toggle, editMode} props
 * @returns function to show buttons, on hover
 * @returns function which change editMode and showButton
 * @returns boolean to display editor or viewer
 */
function PageButtons(props) {
  const { showButton, toggle, editMode, deletePage } = props;

  if (!editMode) {
    return (
      <div className={styles.pageButtons}>
        {showButton ? (
          <div>
            <div className={styles.pageIconButtons}>
              <FontAwesomeIcon
                size="xl"
                icon={faPenToSquare}
                onClick={toggle}
              />
            </div>
                <div className={styles.pageIconButtons}>
              <FontAwesomeIcon
                size="xl"
                icon={faTrash}
                onClick={deletePage}
            />
            </div>
          </div>
        ) : null}
      </div>
    );
  } else {
    return <></>;
  }
}

function PageBody(props) {
  const { editMode, htmlData, toggle, setHtmlData, handleKeyDown, pageRef } =
    props;
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.addEventListener("keydown", handleKeyDown);
      return () => {
        if (pageRef.current) {
          pageRef.current.removeEventListener("keydown", handleKeyDown);
        }
      };
    }
  }, []);

  return editMode ? (
    <CustomEditor
      htmlData={htmlData}
      toggle={toggle}
      setHtmlData={setHtmlData}
    />
  ) : (
    <TextViewer
      htmlData={htmlData}
      tabIndex={0}
      handleKeyDown={handleKeyDown}
      pageRef={pageRef}
    />
  );
}

export default function Page(props) {
  const { readOnly, data, actionTrigger, index } = props;
  var htmlData = data;
  const [showButton, setShowButton] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const pageRef = useRef(null);
  const toggle = () => {
    setShowButton(!showButton);
    setEditMode(!editMode);
  };
  const setHtmlData = (htmlString) => {
    actionTrigger("UPDATE", index, htmlString);
  };
  const deletePage = () => {
    actionTrigger("DELETE",index);
  }
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === " ") {
      actionTrigger("INSERT", index);
    }
  };
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.addEventListener("keydown", handleKeyDown);
      return () => {
        if (pageRef.current) {
          pageRef.current.removeEventListener("keydown", handleKeyDown);
        }
      };
    }
  }, []);

  if (readOnly) {
    return (
      <div
        ref={pageRef}
        tabIndex={0}
        className={styles.page}
        onMouseOver={() => setShowButton(true)}
        onMouseOut={() => setShowButton(false)}
      >
        {showButton && !editMode && (
          <PageButtons
            showButton={showButton}
            toggle={toggle}
            editMode={editMode}
            deletePage={deletePage}
          />
        )}
        <PageBody
          editMode={editMode}
          htmlData={htmlData}
          toggle={toggle}
          setHtmlData={setHtmlData}
          handleKeyDown={handleKeyDown}
          pageRef={pageRef}
        />
        {/* {showButton && editMode && <PageButtons showButton={showButton} toggle={toggle} editMode={editMode}/>} */}
      </div>
    );
  } else {
    return <TextViewer htmlData={htmlData} />;
  }
}
