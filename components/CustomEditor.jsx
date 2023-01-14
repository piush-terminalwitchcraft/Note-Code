import React,{useState} from "react";
import { CKEditor } from "ckeditor4-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function CustomEditor(props) {
  const {toggle, setHtmlData} = props;
  const [htmlString, setHtmlString] = useState(props.htmlData);
  return (
    <div >
      <CKEditor 
        config={{
          toolbar: [
            {
              name: "styles",
              items: ["Format", "Font", "FontSize"],
            },
            {
              name: "document",
              items: ["Print"],
            },
            {
              name: "align",
              items: [
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock",
              ],
            },
            {
              name: "links",
              items: ["Link", "Unlink"],
            },
            {
              name: "basicstyles",
              items: [
                "Bold",
                "Italic",
                "Underline",
                "Strike",
                "RemoveFormat",
                "CopyFormatting",
                "CodeSnippet",
                "SpecialChar"
              ],
            },
            {
              name: "insert",
              items: ["Image", "Table"],
            },
            {
              name: "paragraph",
              items: [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "-",
                "Blockquote",
              ],
            },
            
          ],
          // Add the code snippet and image plugins here
          extraPlugins: "codesnippet,image,uploadimage,font",
          // Configure the code snippet plugin
          codeSnippet_theme: "atelier-lakeside.dark",
          // Configure the image plugin
          codeSnippet_language: {
            javascript: "JavaScript",
            php: "PHP",
          },
          // For customizing theme
          uiColor: "#b9d7ea",
          // TAB ISSUE 
          tabSpaces: 4,
          //dsiabling source tags 
          removePlugins: 'elementspath',
  
          // For browser upload of image
          filebrowserBrowseUrl: "/browser/browse.php",
          filebrowserUploadUrl: "/uploader/upload.php",
          image: {
            // You can add custom styles for the image here
            styles: {
              float: "left",
              margin: "0 10px 0 10px",
            },
            // You can enable or disable the "Upload" tab in the image dialog here
            uploadUrl: "/api/upload/image",
            uploadMethod: "POST",
            // Add the size limitations here
            maximumFileSize: 500000, // 500 kB = 500000 B
            // withCredentials: true
          },
          fontSize_sizes: '8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px'
        }}
        tabindex="-1"
        initData={htmlString}
        onChange={(event) => setHtmlString(event.editor.getData())}
        style={ {
          borderRadius: '12px',
          border:'none'
        } }
      />
      <FontAwesomeIcon 
      icon={faCircleCheck}
      size="xl"
      onClick={()=>{
        toggle();
        setHtmlData(htmlString);
      }} 
      style={{float:"right",margin:"8px",backgroundColor:"var(--color1)",borderRadius:"24px"}}
      />
    </div>
  );
}

export default CustomEditor;
