interface Map {
  [key: string]: string;
}
const TEAM_LOGO: Map = {
  "CSK-LOGO": require("../assets/csk-logo.png").default,
  "DC-LOGO": require("../assets/dc-logo.png").default,
  "KXIP-LOGO": require("../assets/kxip-logo.png").default,
  "KKR-LOGO": require("../assets/kkr-logo.png").default,
  "MI-LOGO": require("../assets/mi-logo.png").default,
  "RR-LOGO": require("../assets/rr-logo.png").default,
  "RCB-LOGO": require("../assets/rcb-logo.png").default,
  "SRH-LOGO": require("../assets/srh-logo.png").default,
};
Object.freeze(TEAM_LOGO);
export default TEAM_LOGO;
