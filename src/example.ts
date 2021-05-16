// 1. concat

// todo: закоментил т.к. линтер не пропускает коммит:

// function concat(first: string, second: string ): string {
//     return first + second;
// }
//
// concat('Hello ', 'World') // -> Hello World;
//
// type strAndNum = string | number;
//
// type myObj = {
//     howIDoIt: string,
//     simeArray: Array<strAndNum>,
//     withData?: myObj[],
// }
//
// const myHometask: myObj = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }
//
//
// interface MyArray<T> {
//     [N: number]: T;
//
//     reduce<U>(fn: (previousValue: U , currentValue: U) => U ): U;
//  // reduce<U>(fn: (acc: U, el: T) => U, init: U): U; // Вариант Зара.
// }

// todo: old texts from video

//
// let tsStringExample: string = '2';
//
// tsStringExample = 'other string';
//
// let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b )
//
// tsSum([3, 8])
//
// const tsString = '3'
// const tsNum = 5
//
// const resultPlus = tsString + tsNum
// const resultMinus = +tsString - tsNum
//
// type stringOrNumber = string | number
//
// const strOrNum0: string = 'str'
// const strOrNum1: string | number = 5
// const strOrNum2: stringOrNumber = 5
// const strOrNum3: stringOrNumber = '5'
// const strOrNum4: stringOrNumber = 5
//
// type allTypeAlias = string | number | null | undefined | boolean | symbol | bigint | object | []
//
//
// // arrays
//
// const tsArr2: (number | string)[] = [1,2,3 ,'545']
// const tsArr3: stringOrNumber[] = [1,2,3 ,'545']
//
// type arrStrNum = (string | number)
// const tsArr4: arrStrNum[] = [1,2,3 ,'545']
// const tsArr5: Array<arrStrNum> = [1,2,3 ,'545'] //дженерик
//
// const nextArray: [number, string] = [1,'2'] // Tuple
//
// // objects
//
// const tsObject: {name: string, age: number} = {
//     name: 'Vasya',
//     age: 38
// }
//
// type TsObj = {
//     name: string,
//     age: number,
//     birthDay: string | number,
//     male?: string // необязательный параметр
// }
//
// const newTsObject: TsObj = {
//     name: 'Vasya',
//     age: 38,
//     birthDay: '23.02.1980'
// }
//
// interface myFirstInterface {
//     readonly name: string
//     age: number
//     birthDay: string | number
//     male?: string // необязательный параметр
// }
//
// const myNewTsObject: myFirstInterface = {
//     name: 'Vasya',
//     age: 38,
//     birthDay: 23
// }
//
// // myNewTsObject.name = 'Jone' // error
//
// interface indexInterface {
//     [n: string]: string | number
// }
//
// const newNewObj: indexInterface = {
//     name: 'Jhone',
//     age: 3
// }
//
// // functions
//
// enum methodEnum {
//     add = 'add',
//     sub = 'sub',
//     div = 'div'
// }
//
// function calculate (method: methodEnum, first: number, second: number): number {
//    switch (method) {
//        case methodEnum.add: return first + second
//        case methodEnum.sub: return first + second
//        case methodEnum.div: return first / second
//    }
// }
//
// calculate(methodEnum.sub, 8, 9)
//
// type arrowFn = () => number
// type funcDefault = () => void
//
// const myTsFunc: funcDefault = () => console.log('hi!')
//
// // generics
//
// function identity<T>(arg: T): T {
//     return arg
// }
//
// identity(1234) // 1234
// identity('string') // 'string'
// identity<string>('string') // 'string'
//
// interface myArray<T> {
//     [n: number]: T
//
//     map<U>(fn: (el: T) => U): U[]
// }
//
// const tsArray: myArray<number> = [1,2,3,4]
//
// tsArray.map((i) => i + 1)
// tsArray.map((i) => `${i} + 1`)
// tsArray.map<string>((i) => `${i} + 1`)
//
// const tsArray2: Array<number> = [1,2,3,4]
//
// function getLength<T extends Array<any> >(arr: T): number{
//     return arr.length
// }
//
// getLength([1,2,3])
//
