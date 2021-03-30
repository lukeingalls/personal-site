import * as React from "react";
import Header from "./header";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
