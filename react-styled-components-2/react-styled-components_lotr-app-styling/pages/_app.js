import { GlobalStyle } from "../styles";
import Link from "next/link";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
