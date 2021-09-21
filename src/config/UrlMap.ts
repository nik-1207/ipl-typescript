interface map{
  [key:string]:string
}
const URL:map = {
    "": "https://ipl-t20.herokuapp.com/teams",
    "chennai-super-kings":
      "https://ipl-t20.herokuapp.com/teams/chennai-super-kings",
    "delhi-capitals": "https://ipl-t20.herokuapp.com/teams/delhi-capitals",
    "mumbai-indians": "https://ipl-t20.herokuapp.com/teams/mumbai-indians",
    "rajasthan-royals": "https://ipl-t20.herokuapp.com/teams/rajasthan-royals",
    "kings-xi-punjab": "https://ipl-t20.herokuapp.com/teams/kings-xi-punjab",
    "royal-challengers-bangalore":
      "https://ipl-t20.herokuapp.com/teams/royal-challengers-bangalore",
    "sunrisers-hyderabad":
      "https://ipl-t20.herokuapp.com/teams/sunrisers-hyderabad",
    "kolkata-knight-riders":
      "https://ipl-t20.herokuapp.com/teams/kolkata-knight-riders",
  };
  Object.freeze(URL);
  export default URL;