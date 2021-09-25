import renderer from "react-test-renderer";
import PlayerCard from "../components/PlayerCard";

it("navbar snapshot testing", () => {
  const fakename = "MS Dhoni";
  const fakeimage = "https://iplstatic.s3.amazonaws.com/players/210/1.png";
  const fakematches = 15;
  const fakeruns = 416;
  const fakewickets = 0;
  const comp = renderer.create(
    <PlayerCard
      teamName="chennai-super-kings"
      img={fakeimage}
      name={fakename}
      matches={fakematches}
      runs={fakeruns}
      wickets={fakewickets}
    />
  );
  const snap = comp.toJSON();
  expect(snap).toMatchSnapshot();
});
