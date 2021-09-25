import renderer from "react-test-renderer";
import CustomLoader from "../components/CustomLoader";
it("customLoader snapshot testing", () => {
  const comp = renderer.create(<CustomLoader />);
  const snap = comp.toJSON();
  expect(snap).toMatchSnapshot();
});
