// const emptyArr: [] = [];
// const stringArr: string[] = ["Salom", "hello"];
// const numberArr: number[] = [5, 15, 20];
// const numberStringArr: (number | string)[] = [5, "Salom"];

const emptyArr: [] = [];
const stringArr: Array<string> = ["Salom", "hello"];
const numberArr: Array<number> = [5, 15, 20];
const numberStringArr: Array<number | string> = [5, "Salom"];

interface IData {
  id: number;
  age: number;
  user: string;
}

type TData = IData[];

let data: TData = [
  {
    id: 1,
    age: 18,
    user: "user1",
  },
];
