import ArrowRight from "@/icons/arrow-right.svg";
import Link from "next/link";
import styled from "styled-components";

export default function VolumeNavigation({ nextVolume, previousVolume }) {
  const NavigationLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: ${({ $align = "start" }) => "flex-" + $align};
    align-items: center;
    width: var(--width-wrapper);
  `;

  const LinkContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ $align = "start" }) => "flex-" + $align};
  `;

  return (
    <>
      {previousVolume ? (
        <NavigationLink href={`/volumes/${previousVolume.slug}`}>
          <LinkContentContainer>
            <span>Previous Volume</span>
            <span>{previousVolume.title}</span>
          </LinkContentContainer>
          <ArrowRight />
        </NavigationLink>
      ) : null}
      {nextVolume ? (
        <NavigationLink href={`/volumes/${nextVolume.slug}`} $align="end">
          <LinkContentContainer $align="end">
            <span>Next Volume</span>
            <span>{nextVolume.title}</span>
          </LinkContentContainer>
          <ArrowRight />
        </NavigationLink>
      ) : null}
    </>
  );
}
