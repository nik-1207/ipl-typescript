interface map{
    [key:string]:{[key:string]:unknown}
  }
const BANNER_IMG:map = {
    "chennai-super-kings": {
      "img": require("../assets/CSK.jpg").default,
      "img-huddle": require("../assets/CSK-huddle.jpg").default,
    },
    "kolkata-knight-riders": {
      "img": require("../assets/KKR.jpg").default,
      "img-huddle": require("../assets/KKR-huddle.jpg").default,
    },
    "delhi-capitals": {
      "img": require("../assets/DC.jpg").default,
      "img-huddle": require("../assets/DC-huddle.jpg").default,
    },
    "mumbai-indians": {
      "img": require("../assets/MI.jpg").default,
      "img-huddle": require("../assets/MI-huddle.jpg").default,
    },
    "kings-xi-punjab": {
      "img": require("../assets/KXIP.jpg").default,
      "img-huddle": require("../assets/KXIP-huddle.jpg").default,
    },
    "rajasthan-royals": {
      "img": require("../assets/RR.jpg").default,
      "img-huddle": require("../assets/RR-huddle.jpg").default,
    },
    "royal-challengers-bangalore": {
      "img": require("../assets/RCB.jpg").default,
      "img-huddle": require("../assets/RCB-huddle.jpg").default,
    },
    "sunrisers-hyderabad": {
      "img": require("../assets/SRH.jpg").default,
      "img-huddle": require("../assets/SRH-huddle.jpg").default,
  
    },
  
  };
  export default BANNER_IMG;