import "./App.css";
import React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";

const App = () => {
  const [data, setData] = React.useState(
    "<p>Banjos</p><img src='https://banjoslivestorage-ordering.s3.ap-southeast-2.amazonaws.com/home-banner/oa0JAlJwN5iYT6JvmpyaufsVL0z38Sjjompg05n8.png' />"
  );
  console.log("data", data);

  return (
    <div>
      <div className="App">
        <h2>Using CKEditor 5</h2>
        <CKEditor
          editor={Editor}
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
    </div>
  );
};

export default App;
