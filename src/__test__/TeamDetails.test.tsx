import renderer from "react-test-renderer";
import TeamDetails from "../pages/TeamDetails";

it("TeamDetails  snapshot Integration testing", () => {
  const comp = renderer.create(<TeamDetails />);
  const snap = comp.toJSON();
  expect(snap).toMatchSnapshot();
});
