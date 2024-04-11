import styled from "styled-components";
import ChevronLeft from "@/icons/chevron-left.svg";
import Link from "next/link";

export default function AllVolumesNavigation() {
  const Header = styled.header`
    display: flex;
    width: var(--width-wrapper);
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
  `;
  return (
    <Header>
      <StyledLink href="/volumes">
        <ChevronLeft /> All Volumes
      </StyledLink>
    </Header>
  );
}
