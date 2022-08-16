import "./common.scss";
import React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BigFooter from "./BigFooter";
import { BanjosNav } from "./BanjosNav";

const App = () => {
  const [data, setData] = React.useState(
    "<p>Banjos</p><img src='https://banjoslivestorage-ordering.s3.ap-southeast-2.amazonaws.com/home-banner/oa0JAlJwN5iYT6JvmpyaufsVL0z38Sjjompg05n8.png' />"
  );

  return (
    <div>
      <div className="App">
        <BanjosNav />
        <div>
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
      <BigFooter />
    </div>
  );
};

export default App;
