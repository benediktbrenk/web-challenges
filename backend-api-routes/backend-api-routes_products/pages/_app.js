import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

const fetcher = async (url) => {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      const error = new Error("An error occured while fetching the data.");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }

    return response.json();
  } catch (error) {
    console.log("failed to fetch");
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
