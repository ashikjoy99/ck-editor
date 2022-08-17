import React from "react";
// import Editor from "ckeditor5-custom-build/build/ckeditor";
import { Editor as ClassicEditor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const EditorPage = ({ data, setData }) => {
  return (
    <div className="container-ck-content">
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onReady={(editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setData(data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </div>
  );
};

export default EditorPage;
