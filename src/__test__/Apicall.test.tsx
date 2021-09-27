import axios from "axios";
import getData from "../api/ApiCall";
const mockedAxios = axios as jest.Mocked<typeof axios>;
let state: unknown;
const setState = (data: unknown) => {
  state = data;
};
beforeEach(() => {
  setState("");
});
it("testing axios default call", async () => {
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
  await getData(setState, "");
  expect(state).toStrictEqual([
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
  ]);
});
it("testing axios rejected promise", async () => {
  mockedAxios.get.mockRejectedValueOnce({});
  await getData(setState, "");
  expect(state).toBe("invalid url");
});
it("testing axios call for particular team", async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: {
      team: {
        captainId: "2101",
        wicketKeeperId: "2109",
      },
      players: [
        {
          id: "2101",
          name: "MS Dhoni",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/1.png",
          stats: {
            matches: 15,
            runs: 416,
            wickets: 0,
          },
        },
        {
          id: "210898",
          name: "Imran Tahir",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/898.png",
          stats: {
            matches: 17,
            runs: 0,
            wickets: 26,
          },
        },
        {
          id: "2103746",
          name: "Lungi Ngidi",
          nationality: "",
          image: "https://iplstatic.s3.amazonaws.com/players/210/3746.png",
          stats: {
            matches: 10,
            runs: 76,
            wickets: 3,
          },
        },
        {
          id: "2105443",
          name: "Ruthuraj Gaikwad",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/5443.png",
          stats: {
            matches: 0,
            runs: 33,
            wickets: 0,
          },
        },
        {
          id: "210227",
          name: "Shane Watson",
          nationality: "",
          image: "https://iplstatic.s3.amazonaws.com/players/210/227.png",
          stats: {
            matches: 15,
            runs: 398,
            wickets: 10,
          },
        },
        {
          id: "210100",
          name: "Ambati Rayudu",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/100.png",
          stats: {
            matches: 17,
            runs: 282,
            wickets: 0,
          },
        },
        {
          id: "2107",
          name: "Murali Vijay",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/7.png",
          stats: {
            matches: 9,
            runs: 18,
            wickets: 1,
          },
        },
        {
          id: "210297",
          name: "Kedar Jadhav",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/297.png",
          stats: {
            matches: 14,
            runs: 162,
            wickets: 1,
          },
        },
        {
          id: "2109",
          name: "Ravindra Jadeja",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/9.png",
          stats: {
            matches: 16,
            runs: 106,
            wickets: 15,
          },
        },
        {
          id: "210140",
          name: "Deepak Chahar",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/140.png",
          stats: {
            matches: 7,
            runs: 34,
            wickets: 0,
          },
        },
        {
          id: "2104942",
          name: "Narayan Jagadeesan",
          nationality: "Indian",
          image: "https://iplstatic.s3.amazonaws.com/players/210/4942.png",
          stats: {
            matches: 0,
            runs: 0,
            wickets: 0,
          },
        },
      ],
    },
  });

  await getData(setState, "chennai-super-kings");
  expect(state).toStrictEqual({
    team: {
      captainId: "2101",
      wicketKeeperId: "2109",
    },
    players: [
      {
        id: "2101",
        name: "MS Dhoni",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1.png",
        stats: {
          matches: 15,
          runs: 416,
          wickets: 0,
        },
      },
      {
        id: "210898",
        name: "Imran Tahir",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/898.png",
        stats: {
          matches: 17,
          runs: 0,
          wickets: 26,
        },
      },
      {
        id: "2103746",
        name: "Lungi Ngidi",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3746.png",
        stats: {
          matches: 10,
          runs: 76,
          wickets: 3,
        },
      },
      {
        id: "2105443",
        name: "Ruthuraj Gaikwad",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/5443.png",
        stats: {
          matches: 0,
          runs: 33,
          wickets: 0,
        },
      },
      {
        id: "210227",
        name: "Shane Watson",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/227.png",
        stats: {
          matches: 15,
          runs: 398,
          wickets: 10,
        },
      },
      {
        id: "210100",
        name: "Ambati Rayudu",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/100.png",
        stats: {
          matches: 17,
          runs: 282,
          wickets: 0,
        },
      },
      {
        id: "2107",
        name: "Murali Vijay",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/7.png",
        stats: {
          matches: 9,
          runs: 18,
          wickets: 1,
        },
      },
      {
        id: "210297",
        name: "Kedar Jadhav",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/297.png",
        stats: {
          matches: 14,
          runs: 162,
          wickets: 1,
        },
      },
      {
        id: "2109",
        name: "Ravindra Jadeja",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/9.png",
        stats: {
          matches: 16,
          runs: 106,
          wickets: 15,
        },
      },
      {
        id: "210140",
        name: "Deepak Chahar",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/140.png",
        stats: {
          matches: 7,
          runs: 34,
          wickets: 0,
        },
      },
      {
        id: "2104942",
        name: "Narayan Jagadeesan",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/4942.png",
        stats: {
          matches: 0,
          runs: 0,
          wickets: 0,
        },
      },
    ],
  });
});
