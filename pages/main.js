import React, { useState, useEffect, useRef } from "react";
import ReactDOM, { createPortal } from "react-dom";
import style from "../styles/main.page.module.css";
import Split from "react-split";
import { CellFrame, TextViewer, CustomEditor } from "../components";
import community from "../models/community";

function Body(props) {
  const divRef = useRef(null);
  var noteData = props.data;
  
  const [contents, modifyContent] = useState(noteData.content);
  // if (content.length == 0) modifyContent([...content, ""]);
  function handleKeyDown(event) {
    console.log("clicked something");
    if (event.key === " " && event.ctrlKey) {
      console.log("Ctrl + space invoked");
      const editor = document.createElement("div");
      ReactDOM.render(<CustomEditor />, editor);
      console.log(divRef.current.insertAdjacentElement("beforebegin", editor));
      editor.focus();
    }
  }

  // function handleHover(event) {
  //   console.log("handle hover event triggered");
  //   // Show delete and edit buttons when hovering over an element
  //   const target = event.target;
  //   if (target.classList.contains('text-viewer')) {
  //     target.insertAdjacentHTML('beforeend', `
  //       <div class="toolbar">
  //         <button class="edit-button">Edit</button>
  //         <button class="delete-button">Delete</button>
  //       </div>
  //     `);
  //   }
  // }
  // function handleLeave(event) {
  //   console.log("handle leave event triggered");
  //   // Remove delete and edit buttons when not hovering over an element
  //   const target = event.target;
  //   if (target.classList.contains('text-viewer')) {
  //     const toolbar = target.querySelector('.toolbar');
  //     target.removeChild(toolbar);
  //   }
  // }
  // function handleEdit(event) {
  //   console.log("handle edit event triggered");
  //   // Replace the TextViewer with a CustomEditor when the edit button is clicked
  //   const target = event.target;
  //   if (target.classList.contains('edit-button')) {
  //     const textViewer = target.closest('.text-viewer');
  //     const index = Array.prototype.indexOf.call(textViewer.parentNode.children, textViewer);
  //     const editor = document.createElement('CustomEditor');
  //     textViewer.parentNode.replaceChild(editor, textViewer);
  //     editor.focus();
  //     modifyContent(prev => {
  //       const newContent = [...prev];
  //       newContent[index] = editor.innerHTML;
  //       return newContent;
  //     });
  //   }
  // }
  // function handleHover(event) {
  //   console.log("handle hover event triggered");
  //   // Show delete and edit buttons when hovering over an element
  //   const target = event.target;
  //   if (target.classList.contains('text-viewer')) {
  //     target.insertAdjacentHTML('beforeend', `
  //       <div class="toolbar">
  //         <button class="edit-button">Edit</button>
  //         <button class="delete-button">Delete</button>
  //       </div>
  //     `);
  //   }
  // }
  // function handleDelete(event) {
  //   console.log("handle delete event triggered");
  //   // Remove the element when the delete button is clicked
  //   const target = event.target;
  //   if (target.classList.contains('delete-button')) {
  //     const textViewer = target.closest('.text-viewer');
  //     const index = Array.prototype.indexOf.call(textViewer.parentNode.children, textViewer);
  //     textViewer.parentNode.removeChild(textViewer);
  //     modifyContent(prev => {
  //       const newContent = [...prev];
  //       newContent.splice(index, 1);
  //       return newContent;
  //     });
  //   }
  // }

  useEffect(() => {
    console.log("useEffect called");
    
    divRef.current.addEventListener("keydown", handleKeyDown);
    // divRef.current.addEventListener('mouseenter', handleHover);
    // divRef.current.addEventListener('mouseleave', handleLeave);
    // divRef.current.addEventListener('click', handleEdit);
    return () => {
      divRef.current.removeEventListener("keydown", handleKeyDown);
      // divRef.current.removeEventListener('mouseenter', handleHover);
      // divRef.current.removeEventListener('mouseleave', handleLeave);
      // divRef.current.removeEventListener('click', handleEdit);
    };
  }, []);

  return (
    <div className={style.contents}>
      {contents.length == 0 ? (
        <div>
          <div>
            Contents are empty, click on the button below to enter a new node
          </div>
          <button>Create a new node</button>
        </div>
      ) : (
        <></>
      )}
      {contents.map((node, index) => {
        return (
          <div key={index} ref={divRef} tabIndex={0} className={style.contents}>
            <TextViewer htmlData={node} />
          </div>
        );
      })}
    </div>
  );
}

// function Body(props){
//   const divRef = useRef(null);
//   var noteData = props.data;
//   var contents = noteData.content;
//   var keyNo = 0;

//     return (
//         <div className={style.contents}>

//           {contents.length == 0 ? (
//             <div>
//               <div>
//               Contents are empty, click on the button below to enter a new node
//               </div>
//               <button>
//                 Create a new node
//               </button>
//             </div>
//           ) : (
//             <></>
//           )}
//           {contents.map((node) => {
//             keyNo++;
//             return <div key={keyNo}  ref={divRef} tabIndex={0} className={style.contents}>
//               <TextViewer htmlData={node} />
//             </div>;
//           })}
//         </div>
//       );

// }
export default function Main() {
  var dummy = [
    new community(
      "1",
      "Mera whatsapp group",
      "ncksjdncks",
      ["<p> Hi </p>", "<p> Hello </p>", "<p> kaise ho </p>"],
      []
    ),
    new community(
      "2",
      "Mera whatsapp group 2",
      "ncksjdncks",
      [],
      [
        new community(
          "21",
          "sub grp",
          "dscewcew",
          [],
          [
            new community("211", "sub grp 2", "dscewcew", [], []),
            new community("212", "sub grp 3", "dscewcew", [], []),
          ]
        ),
        new community(
          "22",
          "dexeq",
          "axeqdwq",
          [],
          [
            new community("221", "sub grp 2", "dscewcew", [], []),
            new community(
              "222",
              "sub grp 3",
              "dscewcew",
              [],
              [
                new community("2221", "sub grp 2", "dscewcew", [], []),
                new community(
                  "2222",
                  "sub grp 3",
                  "dscewcew",
                  [],
                  [
                    new community("22221", "sub grp 2", "dscewcew", [], []),
                    new community(
                      "22222",
                      "sub grp 3",
                      "dscewcew",
                      [],
                      [
                        new community(
                          "222221",
                          "sub grp 2",
                          "dscewcew",
                          [],
                          []
                        ),
                        new community(
                          "222222",
                          "sub grp 3",
                          "dscewcew",
                          [],
                          [
                            new community(
                              "2222221",
                              "sub grp 2",
                              "dscewcew",
                              [],
                              []
                            ),
                            new community(
                              "2222222",
                              "sub grp 3",
                              "dscewcew",
                              [],
                              []
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            new community("223", "sub grp 3", "dscewcew", [], []),
          ]
        ),
      ]
    ),
    // new community("3","Mera whatsapp group 3","ncksjdncks",[]),
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
          <Body data={currentNodeData} />
        </div>
      </Split>
    </div>
  );
}
