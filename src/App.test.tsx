import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders tasks", () => {
    const { container } = render(<App />);
    console.log(container);
    expect(container).toHaveTextContent("Hello World");
  });
});
