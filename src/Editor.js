// import Editor from "ckeditor5-custom-build/build/ckeditor";
import { Editor as ClassicEditor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Container } from "reactstrap";
import { Component } from "react";
import axios from "axios";

class EditorPage extends Component {
  render() {
    const { data, setData } = this.props; // <- Dont mind this, just handling objects from props because Im using this as a shared component.

    const custom_config = {
      extraPlugins: [MyCustomUploadAdapterPlugin],
    };

    return (
      <Container className="container-max">
        <CKEditor
          required
          editor={ClassicEditor}
          config={custom_config}
          data={data}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
          }}
        />
      </Container>
    );
  }
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    // Configure the URL to the upload script in your back-end here!
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  constructor(loader) {
    // CKEditor 5's FileLoader instance.
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then((uploadedFile) => {
      return new Promise((resolve, reject) => {
        const data = new FormData();
        data.append("image", uploadedFile);

        axios({
          url: "https://banjosdev.codinghands.in/cms/image-upload",
          method: "post",
          data,
          headers: {
            "Content-Type": "multipart/form-data;",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmFuam9zZGV2LmNvZGluZ2hhbmRzLmluXC9hZG1pblwvY21zIiwiaWF0IjoxNjY0NDY5NTI5LCJleHAiOjE2NjQ2ODU1MjksIm5iZiI6MTY2NDQ2OTUyOSwianRpIjoiT05oMG42bG1NbHNQcnBDYSIsInN1YiI6MiwicHJ2IjoiMjBkNmE0MzEzN2I1NGE2MzY5NjlmOWRlODE3MTRiZmU3NjUwNTJjNyJ9.q0ngDQnga70qaKZ57AN_iI-Jj13IJHhJqtKEw5ORTfI",
          },
          withCredentials: false,
        })
          .then((response) => {
            if (response.data.success) {
              resolve({
                default: response.data.data.image_url,
              });
            } else {
              reject(response.data.message);
            }
          })
          .catch((response) => {
            reject("Upload failed");
          });
      });
    });
  }
}

export default EditorPage;
