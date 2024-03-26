import Image from "./Image";
import logo from "../img/logo.jpg";

export default function Logo() {
  return <Image className="round-image" src={logo} alt="logo" />;
}
