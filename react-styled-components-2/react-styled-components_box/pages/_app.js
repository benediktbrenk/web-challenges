import { GlobalStyle } from "../styles";
import "../components/BoxWithClassName/BoxWithClassName.css";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
