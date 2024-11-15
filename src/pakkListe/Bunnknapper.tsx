import styled from "styled-components";
import Button from "../ui/Button";
import * as React from "react";

const Style = styled.div`
  grid-area: knapper;
  > * {
    margin-right: 0.5rem;
  }
`;

interface Props {
  navn?: string;
  clearPakkestatus: () => void;
}

function Bunnknapper(props: Props) {
  return (
    <Style>
      <p>
        {`${
          props.navn ? `'${props.navn}'` : "Pakklisten"
        } er lagret på enheten din 🏔🌤️`}
      </p>
      <Button
        onClick={() =>
          confirm("Vil du nullstille lista?") && props.clearPakkestatus()
        }
      >
        Nullstill
      </Button>
    </Style>
  );
}

export default Bunnknapper;
