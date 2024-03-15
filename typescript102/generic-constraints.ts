type MandatoryType = { name: string, age: number, salary: number }
interface MandatoryInterface { name: string, age: number, salary: number }


const mergeCrushAndMyInfo202 = <T extends MandatoryInterface>(myInfo101: T) => {
    const crush002 = "Habiba Noor";
    const newData202 = { ...myInfo202, crush002 };
    return newData202
}
type MyInfoType = {
    name: string;
    age: number;
    salary: number;
}
const myInfo202: MyInfoType = {
    name: 'Saif',
    age: 22,
    salary: 70000
};


const result202 = mergeCrushAndMyInfo202(myInfo202);
// result202. 