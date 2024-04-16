import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Main from "@/components/Main";
import Introduction from "@/components/Introduction";

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: var(--width-wrapper);
`;

const Li = styled.li`
  flex: 1;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0;
  gap: 10px;
`;

const FigCaption = styled.figcaption`
  width: 80%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  font: var(--font-caption);
`;

export default function Volumes() {
  return (
    <Main>
      <Introduction
        title={"The Lord of the Rings"}
        description={introduction}
      ></Introduction>
      <Ul>
        {volumes.map((volume) => (
          <Li key={volume.id}>
            <Figure>
              <Image
                src={volume.cover}
                alt={`Cover image of ${volume.title}`}
                width={90}
                height={155}
              />
              <FigCaption>
                <StyledLink href={`/volumes/${volume.slug}`}>
                  {volume.title}
                </StyledLink>
              </FigCaption>
            </Figure>
          </Li>
        ))}
      </Ul>
    </Main>
  );
}
