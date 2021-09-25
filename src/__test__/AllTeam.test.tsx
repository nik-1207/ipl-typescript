import renderer from "react-test-renderer";
import AllTeams from "../pages/AllTeams";

it("navbar snapshot testing", () => {
  const comp = renderer.create(<AllTeams />);
  const snap = comp.toJSON();
  expect(snap).toMatchSnapshot();
});
