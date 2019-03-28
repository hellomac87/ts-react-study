import * as React from "react";

interface ICounterOutputProps {
  counter: number;
}

const counterOutput = (props: ICounterOutputProps) => {
  return <div style={{ textAlign: "center" }}>{props.counter}</div>;
};

export default counterOutput;
