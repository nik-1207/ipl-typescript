import { render, screen } from "@testing-library/react";
import PlayerCard from "../components/PlayerCard";

it("testing Player card", async () => {
  const teamName = "chennai-super-kings";
  const name = "MS Dhoni";
  const img = "https://iplstatic.s3.amazonaws.com/players/210/1.png";
  const matches = 15;
  const runs = 416;
  const wickets = 0;

  render(
    <PlayerCard
      teamName={teamName}
      img={img}
      name={name}
      matches={matches}
      runs={runs}
      wickets={wickets}
    />
  );
  const card = await screen.findByTestId("player-card");
  expect(card).toMatchSnapshot();
});
