import "./common.scss";
import React, { useEffect } from "react";

import BigFooter from "./BigFooter";
import { BanjosNav } from "./BanjosNav";
import EditorPage from "./Editor";
import { Route, Routes } from "react-router-dom";
import Preview from "./Preview";
import { FooterSmall } from "./FooterSmall";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";

const App = () => {
  const [data, setData] = React.useState("");
  const [isInitial, setIsInitial] = React.useState(true);

  console.log("data", data);

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

  const resetLocalSTorage = () => {
    localStorage.removeItem("preview");
  };

  return (
    <div>
      <div className="App">
        <BanjosNav />
        <Breadcrumb className="breadcrumbWrap">
          <Container className="container-max d-flex">
            <BreadcrumbItem role="button" tag="a">
              Home
            </BreadcrumbItem>
            <BreadcrumbItem active={true}>Our Food </BreadcrumbItem>
          </Container>
        </Breadcrumb>
        <Routes>
          <Route
            path="/"
            element={<EditorPage data={data} setData={setData} />}
          />
          <Route path="/Preview" element={<Preview data={data} />} />
        </Routes>
        <BigFooter />
        <FooterSmall resetLocalSTorage={resetLocalSTorage} />
      </div>
    </div>
  );
};

export default App;
