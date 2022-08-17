import "./common.scss";
import React, { useEffect } from "react";

import BigFooter from "./BigFooter";
import { BanjosNav } from "./BanjosNav";
import EditorPage from "./Editor";
import { Route, Routes } from "react-router-dom";
import Preview from "./Preview";

const App = () => {
  const [data, setData] = React.useState("<h1>Ab</h1><p>Helloo type here</p>");
  const [isInitial, setIsInitial] = React.useState(true);

  useEffect(() => {
    setIsInitial(false);
    const previewData = JSON.parse(localStorage.getItem("preview"));
    if (previewData) {
      setData(previewData);
    }
  }, []);

  useEffect(() => {
    if (!isInitial) {
      localStorage.setItem("preview", JSON.stringify(data));
    }
  }, [data]);

  return (
    <div>
      <div className="App">
        <BanjosNav />
        <Routes>
          <Route
            path="/"
            element={<EditorPage data={data} setData={setData} />}
          />
          <Route path="/Preview" element={<Preview data={data} />} />
        </Routes>
      </div>
      <BigFooter />
    </div>
  );
};

export default App;
