import styled from "styled-components";

export default function TextContainer({ description }) {
  const TextContainer = styled.p`
    font: var(--font-body);
  `;

  return <TextContainer>{description}</TextContainer>;
}
