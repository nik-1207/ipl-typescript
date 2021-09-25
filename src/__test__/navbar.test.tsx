import renderer from "react-test-renderer";
import Navbar from "../components/NavBar";

it("navbar snapshot testing", () => {
  const comp = renderer.create(<Navbar />);
  const snap = comp.toJSON();
  expect(snap).toMatchSnapshot();
});
