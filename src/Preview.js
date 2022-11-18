import React from "react";
import parse from "html-react-parser";
import { Container } from "reactstrap";

const Preview = ({ data }) => {
  return <div className="ck-content mt-3">{parse(data)}</div>;
};

export default Preview;
