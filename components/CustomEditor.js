import React,{useState} from "react";
import { CKEditor } from "ckeditor4-react";
import parse from 'html-react-parser';
import TextViewer from "./Viewer";
function CustomEditor() {
  const [data, setData] = useState('');
  return (
    <div>
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
            {
              name: "font",
              items: ["FontSize"]
            },
          ],
          // Add the code snippet and image plugins here
          extraPlugins: "codesnippet,image,uploadimage",
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
        }}
        tabindex="-1"
        data={data}
        onChange={(event) => setData(event.editor.getData())}
      />
      <TextViewer htmlData={data}/>
  
    </div>
  );
}

export default CustomEditor;
