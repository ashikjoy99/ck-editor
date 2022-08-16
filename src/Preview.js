import React from "react";
import parse from "html-react-parser";

const Preview = ({ data }) => {
  return <div className="container">{parse(data)}</div>;
};

export default Preview;
