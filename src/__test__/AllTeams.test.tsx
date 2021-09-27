import { getByTestId, render, waitForElement } from "@testing-library/react";
import axios from "axios";
import { act } from "react-test-renderer";
import AllTeams from "../pages/AllTeams";
const mockedAxios = axios as jest.Mocked<typeof axios>;
it("testing All Teams Page", async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: [
      {
        id: "chennai-super-kings",
        teamName: "Chennai Super Kings",
        winningYears: [2010, 2011, 2018],
        venue: "M. A. Chidambaram Stadium",
      },
      {
        id: "delhi-capitals",
        teamName: "Delhi Capitals",
        winningYears: [],
        venue: "Feroz Shah Kotla Ground",
      },
      {
        id: "kings-xi-punjab",
        teamName: "Kings XI Punjab",
        winningYears: [],
        venue: "IS Bindra Stadium",
      },
      {
        id: "kolkata-knight-riders",
        teamName: "Kolkata Knight Riders",
        winningYears: [2012, 2014],
        venue: "Eden Gardens",
      },
      {
        id: "mumbai-indians",
        teamName: "Mumbai Indians",
        winningYears: [2013, 2015, 2017, 2019],
        venue: "Wankhede Stadium",
      },
      {
        id: "rajasthan-royals",
        teamName: "Rajasthan Royals",
        winningYears: [2008],
        venue: "Sawai Mansingh Stadium",
      },
      {
        id: "royal-challengers-bangalore",
        teamName: "Royal Challengers Bangalore",
        winningYears: [],
        venue: "M. Chinnaswamy Stadium",
      },
      {
        id: "sunrisers-hyderabad",
        teamName: "Sunrisers Hyderabad",
        winningYears: [2016],
        venue: "Rajiv Gandhi Intl. Cricket Stadium",
      },
    ],
  });
  const { getAllByTestId } = render(<AllTeams />);

  const resolvedSpan = await waitForElement(() => getAllByTestId("cards"));
});
