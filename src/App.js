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
  const [data, setData] = React.useState(
    '<h1><img class="image_resized" style="width:100%;" src="https://banjos.com.au/wp-content/uploads/2021/05/Website_Homepage_SliderImage_GET-APPY.jpg"></h1><p><img class="image_resized" style="width:100%;" src="https://banjos.com.au/wp-content/themes/banjos/img/wheat.png"></p><p><img class="image_resized" style="width:23.87%;" src="https://banjosbeta.codinghands.in/storage/home-banner/dmwPrIY1ZUKtLo6JoPjzWaZ1ngp7leaCd0fUnRyF.jpg"><img class="image_resized" style="width:13.41%;" src="https://banjosbeta.codinghands.in/storage/promotion/D8s2p9GCxv7gF28RrBWK7ITdYDqg7ky8bCNevODf.png"><img class="image_resized" style="width:13.33%;" src="https://banjosbeta.codinghands.in/storage/products/UXK0uvGo4Az1mGK9salBPTMVyoqHNyFtkGz2bdnP.jpeg"><img class="image_resized" style="width:17.79%;" src="https://banjosbeta.codinghands.in/storage/products/oERNtaPw2TnYFjRRo7a5geJR0Z5LBx4jwjV4n4yu.jpeg"><img class="image_resized" style="width:17.77%;" src="https://banjosbeta.codinghands.in/storage/products/LgNJAD2ExZt0b4Zd2ndCOjJclr0DpoiQAK4MeA7N.jpeg"><img class="image_resized" style="width:13.4%;" src="https://banjosbeta.codinghands.in/storage/products/UXK0uvGo4Az1mGK9salBPTMVyoqHNyFtkGz2bdnP.jpeg"></p><p><img class="image_resized" style="width:13.29%;" src="https://banjosbeta.codinghands.in/storage/promotion/D8s2p9GCxv7gF28RrBWK7ITdYDqg7ky8bCNevODf.png"><img class="image_resized" style="width:13.33%;" src="https://banjosbeta.codinghands.in/storage/products/UXK0uvGo4Az1mGK9salBPTMVyoqHNyFtkGz2bdnP.jpeg"><img class="image_resized" style="width:17.6%;" src="https://banjosbeta.codinghands.in/storage/products/oERNtaPw2TnYFjRRo7a5geJR0Z5LBx4jwjV4n4yu.jpeg"><img class="image_resized" style="width:17.77%;" src="https://banjosbeta.codinghands.in/storage/products/LgNJAD2ExZt0b4Zd2ndCOjJclr0DpoiQAK4MeA7N.jpeg"><img class="image_resized" style="width:13.25%;" src="https://banjosbeta.codinghands.in/storage/products/UXK0uvGo4Az1mGK9salBPTMVyoqHNyFtkGz2bdnP.jpeg"><img class="image_resized" style="width:23.53%;" src="https://banjosbeta.codinghands.in/storage/home-banner/dmwPrIY1ZUKtLo6JoPjzWaZ1ngp7leaCd0fUnRyF.jpg"></p><hr><h2>Banjo’s&nbsp;– not all bread is created equal…</h2><p>&nbsp;</p><p><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);">‘At Banjo’s you can taste the difference’ you will hear people say. &nbsp;A Tasmanian ‘staple’ since 1984 and now with over 40 bakeries across Australia, Banjo’s is home to the freshest and best tasting </span><a href="https://banjos.com.au/product_category/bread/">breads</a><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);">. &nbsp; But, it’s not just bread – the range of delicious products extends to </span><a href="https://banjos.com.au/product_category/sweet-treats/">Sweet</a><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);">, </span><a href="https://banjos.com.au/product_category/savoury-range/">Savoury</a><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);">, </span><a href="https://banjos.com.au/product_category/sandwiches/">Salads</a><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);"> and the highest quality </span><a href="https://banjos.com.au/coffee/">coffee</a><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);"> created by qualified baristas. &nbsp;Join us and make Banjo’s part of your every day!</span></p><p><img class="image_resized" style="width:100%;" src="https://banjos.com.au/wp-content/uploads/2021/02/Website_Header_Premium-Bread_2021-1024x512.jpg"></p><hr><h2 style="margin-left:0px;"><a href="https://banjos.com.au/ancient-grain/"><span style="color:hsl(0,0%,0%);">What’s&nbsp;the fuss about Ancient Grains?</span></a></h2><p><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);">Discover our </span><a href="https://banjos.com.au/product_category/bread/">Ancient Grain bread range</a><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);"> and learn about all that goodness packed inside every </span><a href="https://banjos.com.au/product_category/bread/">Ancient Grain loaf</a><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);">!</span></p><p>&nbsp;</p><p><span style="background-color:rgb(255,255,255);color:rgb(64,64,64);"><img class="image_resized" style="width:100%;" src="https://banjos.com.au/wp-content/uploads/2021/02/Website_Header_Ancient-Grain_2021-1024x512.jpg"></span></p><hr><p>&nbsp;</p>'
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
            <BreadcrumbItem active={true}>Our Coffee </BreadcrumbItem>
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
