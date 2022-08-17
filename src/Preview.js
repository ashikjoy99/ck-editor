import React from "react";
import parse from "html-react-parser";

const Preview = ({ data }) => {
  return <div className="container-ck-content ck-content">{parse(data)}</div>;
};

export default Preview;
