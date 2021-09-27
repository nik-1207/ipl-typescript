import { fireEvent, render, screen } from "@testing-library/react";
import TeamCard from "../components/TeamCard";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

it("testing Player card", async () => {
  const id = "chennai-super-kings";
  const teamName = "Chennai Super Kings";
  const winningYears = [2010, 2011, 2018];
  const venue = "M. A. Chidambaram Stadium";

  render(
    <TeamCard
      teamName={teamName}
      img={""}
      id={id}
      venue={venue}
      winningYears={winningYears}
    />
  );
  const card = await screen.findByTestId("cards-teams");
  expect(card).toMatchSnapshot();
  fireEvent.click(card);
  expect(mockHistoryPush).toHaveBeenCalled();
});
