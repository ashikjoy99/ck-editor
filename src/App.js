import "./common.scss";
import React, { useEffect } from "react";

import BigFooter from "./BigFooter";
import { BanjosNav } from "./BanjosNav";
import EditorPage from "./Editor";
import { Route, Routes } from "react-router-dom";
import Preview from "./Preview";
import { FooterSmall } from "./FooterSmall";

const App = () => {
  const [data, setData] = React.useState(
    '<h1>About Page</h1><p>&nbsp;</p><p style="margin-left:40px;">Banjo’s is a successful Bakery Café franchise with over 40 stores currently across Tasmania, Victoria, New South Wales, Queensland and South Australia, with more to open soon. Our delicious products are made by bakers&nbsp;</p><p style="margin-left:40px;"><img class="image_resized" style="width:30.79%;" src="https://banjosbeta.codinghands.in/storage/home-banner/dmwPrIY1ZUKtLo6JoPjzWaZ1ngp7leaCd0fUnRyF.jpg"></p><p style="margin-left:40px;">who can</p><p style="margin-left:40px;">re about using the best ingredients. Our simple philosophy results in a large number of loyal customers,</p><p style="margin-left:40px;">&nbsp;</p><p style="margin-left:40px;">&nbsp;many who make a visit to Banjo’s part of their daily routine.<br>Our success is not just for our benefit. &nbsp;We have a strong community focus and are committed to give back what we can in the form of sp</p><hr><p><br>&nbsp;</p>'
  );
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
        <BigFooter />
        <FooterSmall />
      </div>
    </div>
  );
};

export default App;
