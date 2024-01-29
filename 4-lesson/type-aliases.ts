type Lang = "uzb" | "eng" | "ru";
let language: Lang = "ru";

// type Base = {
//   id: number;
//   key: string;
// };

// type ListBase = Base & {
//   user: string;
//   date: string;
// };

// type TupleBase = ListBase & {
//   global: string;
// };

interface Base {
  id: number;
  key: string;
}

interface ListBase extends Base {
  user: string;
  date: string;
}

interface TupleBase extends ListBase {
  global: string;
}

// Type aliases deb interface va type ga yatiladi

// interface asosan objectlarga type yozishda ishlatilinadi
