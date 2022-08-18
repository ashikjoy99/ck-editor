import React from "react";
import parse from "html-react-parser";
import { Container } from "reactstrap";

const Preview = ({ data }) => {
  return (
    <Container className="container-max">
      <div className="ck-content mt-3">{parse(data)}</div>
    </Container>
  );
};

export default Preview;
