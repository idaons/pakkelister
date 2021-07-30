import LinkButton from "../utils/baseComponents/LinkButton";
import styled from "styled-components";

const Style = styled.div`
  padding: 2rem;
`;

export default function NotFound() {
  return (
    <Style>
      <span>Not found 🤷‍♀</span>
      <LinkButton href="/">Gå til startside</LinkButton>️
    </Style>
  );
}
