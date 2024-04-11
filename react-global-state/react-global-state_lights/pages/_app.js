import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 7, name: "Office", isOn: false },
  ]);

  function handleToggle(id) {
    const mutatedLights = lights.map((light) => {
      if (light.id !== id) {
        return light;
      }
      return { ...light, isOn: !light.isOn };
    });
    setLights(mutatedLights);
  }

  function handleToggleAll(toggle) {
    const mutatedLights = lights.map((light) => {
      return toggle === "on"
        ? { ...light, isOn: true }
        : { ...light, isOn: false };
    });
    setLights(mutatedLights);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        onToggle={handleToggle}
        lights={lights}
        onToggleAll={handleToggleAll}
      />
    </Layout>
  );
}
