import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../components/NavBar";

it("renders correctly", () => {
  const snapshot = renderer.create(<Navbar />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
