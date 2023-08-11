import {createButton} from "react-social-login-buttons";

const config = {
  text: "Log in with Smartrobe",
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" }
};

/** My Smartrobe login button. */
const MySmartrobeLoginButton = createButton(config);

export default MySmartrobeLoginButton;