interface ListeElementMedAntall {
  antall: number;
  element: string;
}

type ListeElement = string | ListeElementMedAntall;

interface ListeType {
  navn: string;
  innhold: ListeElement[];
  lister?: ListeType[];
}
