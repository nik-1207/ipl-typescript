import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../App";
jest.mock("../pages/AllTeams", () => () => (
  <div>Hello World from AllTeams</div>
));

it("renders correctly", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const data = await screen.getByText("Hello World from AllTeams");
  expect(data).toBeInTheDocument();
});
