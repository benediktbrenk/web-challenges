import styled from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  &:hover {
    background-color: red;
  }
`;

export default Box;

// ### Bonus: Refactoring

// Did you notice you wrote a component `BoxWithStyledComponents` that has only the purpose to return an instance of `StyledBox` and passes props? This is not necessary! Such a wrapping component around a styled component would be required if you would return multiple child elements or would add logic to the component.

// Try to refactor the code, so that `BoxWithStyledComponents.js` includes only one component, which is created with `styled-components` and is the default export.
