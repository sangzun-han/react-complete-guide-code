import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("demo");
  return <MyParagraph>{props.show ? "새로 생긴" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
