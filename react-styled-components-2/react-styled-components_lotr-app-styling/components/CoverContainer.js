import styled from "styled-components";
import Image from "next/image";

export default function CoverContainer({ volume, title, cover, books }) {
  const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${volume.color};
    width: 100%;
  `;

  const Books = styled.div`
    display: flex;
    overflow: visible;
    background-color: ${volume.color};
    margin: 1rem 0;
    width: var(--width-wrapper);
  `;
  const StyledImage = styled(Image)`
    box-shadow: var(--box-shadow-book);
    margin: 1rem;
  `;

  const Ul = styled.ul`
    /* padding: 0; */
  `;

  const Li = styled.li`
    display: flex;
    flex-direction: column;
  `;

  const Ordinal = styled.span`
    font: var(--font-caption--italic);
  `;

  const Title = styled.strong`
    font: var(--font-title);
  `;
  return (
    <Div>
      <Books>
        <Ul>
          {books.map(({ ordinal, title }) => (
            <Li key={title}>
              <Ordinal>{ordinal}:</Ordinal>
              <Title>{title}</Title>
            </Li>
          ))}
        </Ul>
        <StyledImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </Books>
    </Div>
  );
}
