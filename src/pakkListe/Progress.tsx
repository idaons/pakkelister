import styled from "styled-components";
import * as React from "react";

const Style = styled.div<{ $progress: number }>`
  --progress: ${(p) => p.$progress + "%"};
  grid-area: koffert;
  position: relative;
  font-size: clamp(0.5rem, 2.5vw, 1.25rem);
  height: 7em;
  width: 9em;
  justify-self: end;
`;

const svgImage =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 87.512 66.141'%3E%3Cpath d='M2.086 65.406C-.04 64.211.09 66.018.166 38.626.233 14.755.245 14.27.763 13.56c.98-1.34 2.355-1.79 5.474-1.79h2.792l.138-1.222c.095-.842.353-1.437.833-1.918.662-.663.85-.7 3.888-.785 4.412-.123 5.256.27 5.52 2.566l.14 1.227 5.359.038 5.357.037V7.438c0-4.908.235-5.691 2.012-6.71C33.295.144 33.432.137 43.718.133 55.227.128 55.337.143 56.53 1.815c.546.766.596 1.166.673 5.396l.083 4.57 5.34-.072 5.342-.071.14-1.227c.265-2.297 1.109-2.689 5.52-2.566 3.04.084 3.226.122 3.888.785.48.48.739 1.076.834 1.918l.138 1.222h2.834c2.439 0 2.993.084 3.973.602.672.355 1.34.978 1.632 1.521.474.882.491 1.927.425 25.261l-.07 24.342-.59.827c-1.294 1.814 1.948 1.687-42.974 1.682l-40.573-.004zM6.187 38.89V14.15H5.016c-2.174 0-2.004-2.12-2.004 24.877 0 27.057-.206 24.576 2.05 24.592l1.125.008zm72.496 0V14.15H8.833V63.628h69.85zm5.31 24.465c.5-.268.511-.818.511-24.323 0-27.001.17-24.88-2.003-24.88h-1.172v49.476h1.076c.591 0 1.306-.123 1.587-.273zM16.77 10.976v-.793H12.009V11.77H16.77zm37.592-1.918c.04-5.07-.021-5.864-.483-6.218-.56-.427-19.402-.48-20.193-.056-.475.253-.512.594-.512 4.63v4.356h21.167zm21.145 1.918v-.793h-4.762V11.77h4.762z' stroke='%23000' stroke-width='.265'/%3E%3C/svg%3E\")";

const StyledIcon = styled.i`
  background: linear-gradient(
      to top,
      #137113 0%,
      #137113 var(--progress),
      #30ff0d var(--progress),
      #30ff0d 100%
    )
    no-repeat;
  display: inline-block;
  width: 100%;
  height: 100%;
  mask: ${svgImage} no-repeat 50% 50%;
  -webkit-mask: ${svgImage} no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
`;

const Prosent = styled.span`
  left: 51%;
  top: 58%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 1.8em;
`;

function Progress(props: { progress: number }) {
  return (
    <Style $progress={props.progress}>
      <StyledIcon />
      <Prosent>{props.progress}%</Prosent>
    </Style>
  );
}

export default Progress;
