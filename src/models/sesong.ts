export enum Sesong {
  FjellSommer,
  BySommer,
  Vinter,
}

export function getSesongLabel(s: Sesong) {
  let label = "";
  switch (s) {
    case Sesong.FjellSommer:
      label = "Sommer på fjellet";
      break;
    case Sesong.BySommer:
      label = "Sommer i byen";
      break;
    default:
      label = Sesong[s];
  }
  return label;
}
