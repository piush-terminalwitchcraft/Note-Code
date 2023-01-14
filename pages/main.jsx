import React, { useState, useEffect, useRef } from "react";
import ReactDOM, { createPortal } from "react-dom";
import style from "../styles/main.page.module.css";
import Split from "react-split";
import { CellFrame, TextViewer, CustomEditor, Page } from "../components";
import community from "../models/community";

function Body(props) {
  const divRef = useRef(null);
  const { noteData } = props;
  var noteContents = ["<h1>Hello</h1>", "<h2>Kaise ho</h2>"];
  const [components, setComponents] = useState([]);

  function handleKeyDown(event) {
    console.log("clicked something");
    if (event.key === " " && event.ctrlKey) {
      console.log("Ctrl + space invoked");
    }
  }
  const regenerateComponents = () =>
    noteContents.map((htmlData, index) => {
      return (
        <Page
          data={htmlData}
          key={index}
          readOnly={true}
          index={index}
          actionTrigger={actionTrigger}
        />
      );
    });
  const updatePageLocally = (index, htmlString) => {
    noteContents[index] = htmlString;
    setComponents(regenerateComponents);
  };
  const actionTrigger = (command, index, htmlString) => {
    console.log(command, index, htmlString);
    if (command === "UPDATE") {
      updatePageLocally(index, htmlString);
      /**
       * @todo
       * globally bhi update karna hai
       */
      // updateServer();
    } else if (command === "DELETE") {
      noteContents.splice(index,1);
      setComponents(regenerateComponents)
    } else if (command === "INSERT") {
      console.log("Inserting ");
      // Insert a new element into the noteData.content array
      noteContents.splice(index + 1, 0, "Hello new thing inserted!");
      // Update the components state to reflect the change
      setComponents(regenerateComponents);
    } else {
      alert("Error ! action aborted");
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    setComponents(regenerateComponents);
    // divRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
      // divRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={style.contents}>
      {components.length == 0 ? (
        <div>
          <div>
            Contents are empty, click on the button below to enter a new node
          </div>
          <button>Create a new node</button>
        </div>
      ) : (
        <></>
      )}
      {components.map((node, index) => {
        return (
          <div key={index} ref={divRef} tabIndex={0} className={style.contents}>
            {node}
          </div>
        );
      })}
    </div>
  );
}

export default function Main() {
  var dummy = [
    new community("1", "Mera whatsapp group", "ncksjdncks", []),
    new community("2", "Mera whatsapp group 2", "ncksjdncks", [
      new community("21", "sub grp", "dscewcew", [
        new community("211", "sub grp 2", "dscewcew", []),
        new community("212", "sub grp 3", "dscewcew", []),
      ]),
      new community("22", "dexeq", "axeqdwq", [
        new community("221", "sub grp 2", "dscewcew", []),
        new community("223", "sub grp 3", "dscewcew", []),
      ]),
    ]),
    new community("3", "Mera whatsapp group 3", "ncksjdncks", []),
  ];

  const [currentNodeData, setNodeData] = useState(dummy[0]);
  const handleCellFrameClick = (id, nodeData) => {
    console.log(id, nodeData); // id of the CellFrame component that was clicked
    setNodeData(nodeData);
  };

  return (
    
    <div className={style.mainBody}>
      <div className={style.header}>Welcome to note</div>
      <Split sizes={[20, 80]} className={style.mainContainer}>
        <div className={style.leftPart}>
          {dummy.map((node) => {
            return (
              <div key={node.id}>
                <CellFrame
                  cellData={node}
                  anchestor={[1]}
                  lastChildIndex={0}
                  currentIndex={0}
                  onClick={handleCellFrameClick}
                />
                <div className={style.divider}></div>
              </div>
            );
          })}
        </div>
        <div className={style.rightPart}>
          <Body nodeData={currentNodeData} />
        </div>
      </Split>
    </div>
  );
}
