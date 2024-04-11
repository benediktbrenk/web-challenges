import BoxWithClassName from "@/components/BoxWithClassName/BoxWithClassName";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents";
import styled from "styled-components";
import Box from "@/components/BoxWithStyledComponents/BoxWithStyledComponents";

export default function HomePage() {
  const FlexBox = styled.div`
    display: flex;
  `;
  return (
    <FlexBox>
      <BoxWithClassName isBlack></BoxWithClassName>
      <BoxWithClassName></BoxWithClassName>
      <Box $isBlack></Box>
      <Box></Box>
    </FlexBox>
  );
}
