interface IEmployee{
    code: number;
    name: string
}

let employee: IEmployee = {
    code : 10,
    name:  "John",
};

let employee2: {code: number, name: string}={
    code: 10,
    name: 'Louis'
}