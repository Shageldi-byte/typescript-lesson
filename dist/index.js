"use strict";
// let Small = 1;
// let Medium = 2;
// let Large = 3;
// let objectTshirt = {
//     name:'dfsfd',
//     size:1
// }
// if(objectTshirt.size===1){
// }
// null checker
// function some(param:number,param2: string,param3?:number): number{
//     if(param3 && param3<=2000)
//         return 0;
//     return 1;
// }
// let result=some(1,'dsfd');
// let result2=some(1,'dsfd',3);
// type User={
//     readonly id: number,
//     name?: {
//         value?: string
//     },
//     getDetails: (id: number) => void,
//     age?: number
// }
// let user:User = {
//     id:1,
//     name: {
//         value: 'Shageldi'
//     },
//     getDetails: (id: number) => {
//         console.log('sdgfdgfhg')
//     },
//     age:1
// };
// let user2:User = {
//     id:1,
//     name: {
//         value: 'Shageldi'
//     },
//     getDetails: (id: number) => {
//         console.log('sdgfdgfhg')
//     },
//     age:2
// };
// let array: Array<User> = [
//     {
//         id:1,
//         name: {
//             value: 'Shageldi'
//         },
//         getDetails: (id: number) => {
//             console.log('sdgfdgfhg')
//         },
//         age:2343
//     },
//     {
//         id:1,
//         name: {
//             value: 'Shageldi'
//         },
//         getDetails: (id: number) => {
//             console.log('sdgfdgfhg')
//         },
//         age:2
//     }
// ]
// if(user.name?.value?.toUpperCase()){
// }
// function some2(param: string | number): number{
//     if(typeof param === 'string'){
//         return parseInt(param)*2;
//     } else {
//         return param*2;
//     }
// }
// some2(2);
// some2('2');
// let weight: number & string;
// type Draggable={
//     drag: ()=>void;
// }
// type Resizable = {
//     resize: ()=>void;
// }
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//     drag:()=>{},
//     resize:()=>{}
// }
// interface IPerson {
//     name: string;
//     dob: Date;
//     job: string;
// }
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;
// type Metric = 'cm' | 'inch';
// let metric: Metric = 'cm';
// class
// class Person {
//     id: number=1;
//     constructor(private _name: string,private _dob: Date){};
//     get name(){
//         return this._name;
//     }
//     set name(value:string){
//         this._name = value;
//     }
// }
// let myPerson: Person = new Person('Shageldi',new Date('2000-11-18'));
// myPerson.name='Shageldi';
// console.log(myPerson.name);
// implementation
// interface Shape {
//     getArea: () => number;
// }
// class Rectangle implements Shape {
//     public constructor(private readonly width: number, private readonly height: number){}
//     public getArea(): number {
//         return this.width*this.height;
//     }
// }
// class Square extends Rectangle {
//     public constructor(width: number){
//         super(width, width);
//     }
//     public override getArea(): number {
//         return super.getArea();
//     }
// }
// abstract class
// abstract class Polygon {
//     public abstract getArea(): number;
//     public toString(): string {
//         return `Polygon[area=${this.getArea()}]`;
//     }
// }
// class Rec2 extends Polygon {
//     public constructor(private readonly width: number, private readonly height: number){
//         super();
//     }
//     public getArea(): number {
//         return this.width*this.height;
//     }
// }
// console.log(new Rec2(100,200).toString());
// interface extends
// interface Rectangle {
//     height: number;
//     width: number;
// }
// interface ColoredRectangle extends Rectangle{
//     color: string;
// }
// const coloredRectangle: ColoredRectangle = {
//     color: 'red',
//     width: 100,
//     height: 100
// }
// casting
// let x: unknown = 'hello';
// console.log((x as string).length);
// console.log((<string> x).length);
// Partial
// interface Point {
//     x?: number;
//     y?: number;
//     location: number;
// }
// let myPoint: Partial<Point> = {
// }
// let myPoint: Required<Point> = {
// }
// let nameAgeMap: Record<string,number> = {
//     'Shageldi':22,
//     'Merdan':23
// }
// let myPoint: Omit<Point, 'x'|'y'>={
//     location:123,
//     x:0
// }
// let myPoint: Pick<Point,'location'>={
//     location:123
// }
// type Primative = string | number | boolean;
// const value: Exclude<Primative,string>=true;
// let myHeader:HTMLHeadingElement = document.getElementById('myHeader') as HTMLHeadingElement;
