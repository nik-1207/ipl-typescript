import { createUseStyles } from "react-jss";
import BANNER_IMG from "../config/BannerImageMap";
interface Map {
  [key: string]: {};
}

const data: Map = {
  "chennai-super-kings-banner": {
    backgroundImage: `url(${BANNER_IMG["chennai-super-kings"]["img-huddle"]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    backgroundSize: "auto 100%",
    position: " relative",
    height: "400px",
    marginBottom: "30px",
    "&::after": {
      bottom: " 0",
      content: '""',
      clipPath: "polygon(0 0, 90.1% 0, 100% 100%, 0 100%)",
      left: "0",
      position: "absolute",
      width: "63%",
      top: "0",
      background: "linear-gradient(#0081e5 60%, #005699)",
    },
  },
  "delhi-capitals-banner": {
    backgroundImage: `url(${BANNER_IMG["delhi-capitals"]["img-huddle"]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    backgroundSize: "auto 100%",
    position: " relative",
    height: "400px",
    marginBottom: "30px",
    "&::after": {
      bottom: " 0",
      content: '""',
      clipPath: "polygon(0 0, 90.1% 0, 100% 100%, 0 100%)",
      left: "0",
      position: "absolute",
      width: "63%",
      top: "0",
      background: "linear-gradient(#f83430 60%, #d40b07)",
    },
  },
  "mumbai-indians-banner": {
    backgroundImage: `url(${BANNER_IMG["mumbai-indians"]["img-huddle"]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    backgroundSize: "auto 100%",
    position: " relative",
    height: "400px",
    marginBottom: "30px",
    "&::after": {
      bottom: " 0",
      content: '""',
      clipPath: "polygon(0 0, 90.1% 0, 100% 100%, 0 100%)",
      left: "0",
      position: "absolute",
      width: "63%",
      top: "0",
      background: "linear-gradient(#efb04c 60%, #db8e14)",
    },
  },
  "rajasthan-royals-banner": {
    backgroundImage: `url(${BANNER_IMG["rajasthan-royals"]["img-huddle"]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    backgroundSize: "auto 100%",
    position: " relative",
    height: "400px",
    marginBottom: "30px",
    "&::after": {
      bottom: " 0",
      content: '""',
      clipPath: "polygon(0 0, 90.1% 0, 100% 100%, 0 100%)",
      left: "0",
      position: "absolute",
      width: "63%",
      top: "0",
      background: "linear-gradient(#aa9a7f 60%, #857458)",
    },
  },
  "kings-xi-punjab-banner": {
    backgroundImage: `url(${BANNER_IMG["kings-xi-punjab"]["img-huddle"]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    backgroundSize: "auto 100%",
    position: " relative",
    height: "400px",
    marginBottom: "30px",
    "&::after": {
      bottom: " 0",
      content: '""',
      clipPath: "polygon(0 0, 90.1% 0, 100% 100%, 0 100%)",
      left: "0",
      position: "absolute",
      width: "63%",
      top: "0",
      background: " linear-gradient(#c7c8ca 60%, #a0a1a5)",
    },
  },
  "royal-challengers-bangalore-banner": {
    backgroundImage: `url(${BANNER_IMG["royal-challengers-bangalore"]["img-huddle"]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    backgroundSize: "auto 100%",
    position: " relative",
    height: "400px",
    marginBottom: "30px",
    "&::after": {
      bottom: " 0",
      content: '""',
      clipPath: "polygon(0 0, 90.1% 0, 100% 100%, 0 100%)",
      left: "0",
      position: "absolute",
      width: "63%",
      top: "0",
      background: "linear-gradient(#aa9a7f 60%, #857458)",
    },
  },
  "sunrisers-hyderabad-banner": {
    backgroundImage: `url(${BANNER_IMG["sunrisers-hyderabad"]["img-huddle"]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    backgroundSize: "auto 100%",
    position: " relative",
    height: "400px",
    marginBottom: "30px",
    "&::after": {
      bottom: " 0",
      content: '""',
      clipPath: "polygon(0 0, 90.1% 0, 100% 100%, 0 100%)",
      left: "0",
      position: "absolute",
      width: "63%",
      top: "0",
      background: "linear-gradient(#0081e5 60%, #005699)",
    },
  },
  "kolkata-knight-riders-banner": {
    backgroundImage: `url(${BANNER_IMG["kolkata-knight-riders"]["img-huddle"]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    backgroundSize: "auto 100%",
    position: " relative",
    height: "400px",
    marginBottom: "30px",
    "&::after": {
      bottom: " 0",
      content: '""',
      clipPath: "polygon(0 0, 90.1% 0, 100% 100%, 0 100%)",
      left: "0",
      position: "absolute",
      width: "63%",
      top: "0",
      background: "linear-gradient(#efb04c 60%, #db8e14)",
    },
  },

  "chennai-super-kings-overlay": {
    bottom: " 0",
    clipPath: " polygon(0 0, 93% 0, 100% 100%, 0 100%)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "60%",
    zIndex: "5",
    background: " #fdb913",
  },
  "delhi-capitals-overlay": {
    bottom: " 0",
    clipPath: " polygon(0 0, 93% 0, 100% 100%, 0 100%)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "60%",
    zIndex: "5",
    background: "#004c93",
  },
  "mumbai-indians-overlay": {
    bottom: " 0",
    clipPath: " polygon(0 0, 93% 0, 100% 100%, 0 100%)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "60%",
    zIndex: "5",
    background: " #005ea0",
  },
  "rajasthan-royals-overlay": {
    bottom: " 0",
    clipPath: " polygon(0 0, 93% 0, 100% 100%, 0 100%)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "60%",
    zIndex: "5",
    background: "  #004b8c",
  },
  "kings-xi-punjab-overlay": {
    bottom: " 0",
    clipPath: " polygon(0 0, 93% 0, 100% 100%, 0 100%)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "60%",
    zIndex: "5",
    background: " #b32524",
  },
  "royal-challengers-bangalore-overlay": {
    bottom: " 0",
    clipPath: " polygon(0 0, 93% 0, 100% 100%, 0 100%)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "60%",
    zIndex: "5",
    background: " #000",
  },
  "sunrisers-hyderabad-overlay": {
    bottom: " 0",
    clipPath: " polygon(0 0, 93% 0, 100% 100%, 0 100%)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "60%",
    zIndex: "5",
    background: " #fb653f",
  },
  "kolkata-knight-riders-overlay": {
    bottom: " 0",
    clipPath: " polygon(0 0, 93% 0, 100% 100%, 0 100%)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "60%",
    zIndex: "5",
    background: " #fdb913",
  },

  "chennai-super-kings-overlay-img": {
    content: "",
    display: "inline-block",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    backgroundImage: `url(${BANNER_IMG["chennai-super-kings"].img})`,
    opacity: "0.2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "delhi-capitals-overlay-img": {
    content: "",
    display: "inline-block",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    backgroundImage: `url(${BANNER_IMG["delhi-capitals"].img})`,
    opacity: "0.2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "mumbai-indians-overlay-img": {
    content: "",
    display: "inline-block",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    backgroundImage: `url(${BANNER_IMG["mumbai-indians"].img})`,
    opacity: "0.2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "rajasthan-royals-overlay-img": {
    content: "",
    display: "inline-block",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    backgroundImage: `url(${BANNER_IMG["rajasthan-royals"].img})`,
    opacity: "0.2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "kings-xi-punjab-overlay-img": {
    content: "",
    display: "inline-block",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    backgroundImage: `url(${BANNER_IMG["kings-xi-punjab"].img})`,
    opacity: "0.2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "royal-challengers-bangalore-overlay-img": {
    content: "",
    display: "inline-block",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    backgroundImage: `url(${BANNER_IMG["royal-challengers-bangalore"].img})`,
    opacity: "0.2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "sunrisers-hyderabad-overlay-img": {
    content: "",
    display: "inline-block",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    backgroundImage: `url(${BANNER_IMG["sunrisers-hyderabad"].img})`,
    opacity: "0.2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  "kolkata-knight-riders-overlay-img": {
    content: "",
    display: "inline-block",
    bottom: "0",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    backgroundImage: `url(${BANNER_IMG["kolkata-knight-riders"].img})`,
    opacity: "0.2",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  "@media only screen and (max-width: 425px)": {
    "chennai-super-kings-banner": {
      height: "250px",
      marginBottom: "30px",
    },
    "delhi-capitals-banner": {
      height: "250px",
      marginBottom: "30px",
    },
    "mumbai-indians-banner": {
      height: "250px",
      marginBottom: "30px",
    },
    "rajasthan-royals-banner": {
      height: "250px",
      marginBottom: "30px",
    },
    "kings-xi-punjab-banner": {
      height: "250px",
      marginBottom: "30px",
    },
    "royal-challengers-bangalore-banner": {
      height: "250px",
      marginBottom: "30px",
    },
    "sunrisers-hyderabad-banner": {
      height: "250px",
      marginBottom: "30px",
    },
    "kolkata-knight-riders-banner": {
      height: "250px",
      marginBottom: "30px",
    },
  },
};
const BannerStyle = createUseStyles(data);
export default BannerStyle;
