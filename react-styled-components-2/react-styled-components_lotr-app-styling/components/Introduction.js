import styled from "styled-components";
import TextContainer from "./TextContainer";

export default function introduction({ title, description }) {
  const IntroductionContainer = styled.div`
    width: var(--width-wrapper);
  `;

  const Title = styled.h1`
    font: var(--font-headline-1);
  `;

  return (
    <IntroductionContainer>
      <Title>{title}</Title>
      <TextContainer description={description}></TextContainer>
    </IntroductionContainer>
  );
}
