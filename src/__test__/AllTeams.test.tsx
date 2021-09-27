import { render, screen } from "@testing-library/react";
import axios from "axios";
import renderer from "react-test-renderer";
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
  render(<AllTeams />);
  const cards = await screen.findAllByTestId("cards");

  expect(cards[0]).toHaveTextContent("Chennai Super Kings");
  expect(cards[0]).toHaveTextContent("M. A. Chidambaram Stadium");
  expect(cards[0]).toHaveTextContent("2010 2011 2018");
  expect(cards[0]).toHaveTextContent("Team Home");

  expect(cards[1]).toHaveTextContent("Delhi Capitals");
  expect(cards[1]).toHaveTextContent("Feroz Shah Kotla Ground");
  expect(cards[1]).toHaveTextContent("Team Home");

  expect(cards[2]).toHaveTextContent("Kings XI Punjab");
  expect(cards[2]).toHaveTextContent("IS Bindra Stadium");
  expect(cards[2]).toHaveTextContent("Team Home");

  expect(cards[3]).toHaveTextContent("Kolkata Knight Riders");
  expect(cards[3]).toHaveTextContent("Eden Gardens");
  expect(cards[3]).toHaveTextContent("2012 2014");
  expect(cards[3]).toHaveTextContent("Team Home");

  expect(cards[4]).toHaveTextContent("Mumbai Indians");
  expect(cards[4]).toHaveTextContent("Wankhede Stadium");
  expect(cards[4]).toHaveTextContent("2013 2015 2017 2019");
  expect(cards[4]).toHaveTextContent("Team Home");

  expect(cards[5]).toHaveTextContent("Rajasthan Royals");
  expect(cards[5]).toHaveTextContent("Sawai Mansingh Stadium");
  expect(cards[5]).toHaveTextContent("2008");
  expect(cards[5]).toHaveTextContent("Team Home");

  expect(cards[6]).toHaveTextContent("Royal Challengers Bangalore");
  expect(cards[6]).toHaveTextContent("M. Chinnaswamy Stadium");
  expect(cards[6]).toHaveTextContent("Team Home");

  expect(cards[7]).toHaveTextContent("Sunrisers Hyderabad");
  expect(cards[7]).toHaveTextContent("Rajiv Gandhi Intl. Cricket Stadium");
  expect(cards[7]).toHaveTextContent("Team Home");
});
