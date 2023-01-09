import React from "react";
import parse from "html-react-parser";
import SyntaxHighlighter from "react-syntax-highlighter";
import styles from './../styles/viewer.module.css'
import {
  monokai,
  atelierLakesideDark,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function extractCode(node) {
  const language = node.attribs.class.replace("language-", "");
  const code = node.children[0].data;
  return code ? (
    <div className={styles.code}>
      <CopyToClipboard
        text={code}
        className={styles.copyIcon}
      >
        <FontAwesomeIcon icon={faCopy} size="1xl"
        />
      </CopyToClipboard>

      <SyntaxHighlighter language={language} style={atelierLakesideDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  ) : null;
}

function TextViewer(props) {
  return (
    <div>
      {parse(props.htmlData, {
        replace: (node) => {
          if (
            node.type === "tag" &&
            node.name === "pre" &&
            node.children.length === 1 &&
            node.children[0].type === "tag" &&
            node.children[0].name === "code"
          ) {
            return extractCode(node.children[0]);
          }
        },
      })}
      <button onClick={() => console.log(props.htmlData)}>Print HTML</button>
    </div>
  );
}

export default TextViewer;
