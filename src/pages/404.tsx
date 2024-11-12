import LinkButton from "../ui/LinkButton";
import styled from "styled-components";

const Style = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
`;

export default function NotFound() {
  return (
    <Style>
      <h1>Ingenting her... 🤷‍♀</h1>
      <LinkButton href="/">Gå til forsiden</LinkButton>️
    </Style>
  );
}
