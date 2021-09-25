import renderer from "react-test-renderer";
import TeamCard from "../components/TeamCard";

it("navbar snapshot testing", () => {
  const fakeid = "chennai-super-kings";
  const faketeamName = "Chennai Super Kings";
  const fakewinningYears = [2010, 2011, 2018];
  const fakevenue = "M. A. Chidambaram Stadium";

  const comp = renderer.create(
    <TeamCard
      img={"http://localhost:3000/static/media/csk-logo.b5134acf.png"}
      id={fakeid}
      teamName={faketeamName}
      venue={fakevenue}
      winningYears={fakewinningYears as [number]}
    />
  );
  const snap = comp.toJSON();
  expect(snap).toMatchSnapshot();
});
