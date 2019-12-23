interface ListeElementMedAntall {
    antall: Number;
    element: String;
}


type ListeElement = String | ListeElementMedAntall;

interface ListeType {
    navn: String;
    innhold: ListeElement[]
    lister?: ListeType[];
}


