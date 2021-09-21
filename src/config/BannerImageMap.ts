interface map{
    [key:string]:{[key:string]:any}
  }
const BANNER_IMG:map = {
    "chennai-super-kings": {
      "img": require("../assets/CSK.jpg"),
      "img-huddle": require("../assets/CSK-huddle.jpg"),
    },
    "kolkata-knight-riders": {
      "img": require("../assets/KKR.jpg"),
      "img-huddle": require("../assets/KKR-huddle.jpg"),
    },
    "delhi-capitals": {
      "img": require("../assets/DC.jpg"),
      "img-huddle": require("../assets/DC-huddle.jpg"),
    },
    "mumbai-indians": {
      "img": require("../assets/MI.jpg"),
      "img-huddle": require("../assets/MI-huddle.jpg"),
    },
    "kings-xi-punjab": {
      "img": require("../assets/KXIP.jpg"),
      "img-huddle": require("../assets/KXIP-huddle.jpg"),
    },
    "rajasthan-royals": {
      "img": require("../assets/RR.jpg"),
      "img-huddle": require("../assets/RR-huddle.jpg"),
    },
    "royal-challengers-bangalore": {
      "img": require("../assets/RCB.jpg"),
      "img-huddle": require("../assets/RCB-huddle.jpg"),
    },
    "sunrisers-hyderabad": {
      "img": require("../assets/SRH.jpg"),
      "img-huddle": require("../assets/SRH-huddle.jpg"),
  
    },
  
  };
  export default BANNER_IMG;