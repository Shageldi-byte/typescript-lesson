// // interface
// interface IPerson{
//     name: string;// not initialized, but no error
//     dob: Date;
//     getAge(): number;
// }
// class Person {
//     name: string='gdhg';
//     dob: Date;
//     constructor(name: string, dob: Date){
//         this.name = name;
//         this.dob = dob;
//     }
//     getAge(): number{
//         // do something
//         return 0;
//     }
// }
// let myPerson: IPerson = {
//     name: 'Shageldi',
//     dob: new Date('2000-01-01'),
//     getAge() {
//         return new Date().getFullYear()-this.dob.getFullYear();
//     }
// }

// console.log(myPerson.getAge());

// type CssPosition = 'absolute' | 'relative';

// interface ISubProps{
//     name: string;
// }

// interface IProductImage {
//     largeImage: string;
//     mediumImage: string;
//     smallImage: string;
// }

// interface IProduct {
//     product_name: string;
//     product_price: number;
//     product_image: IProductImage;
// }



// // {
// //     "products":[
// //         {
// //             "product_name":"Apple",
// //             "product_price":123.0,
// //             "product_image":{
// //                 "largeImage":"url of large image",
// //                 "mediumImage":"url of medium image",
// //                 "smallImage":"url of small image"
// //             }
// //         }
// //     ]
// // }

// interface IProps {
//     x:number;
//     readonly y?:number;
//     position?: CssPosition;
//     subProps?: ISubProps;
// }

// function getArea(params: IProps):number{
//     // if(!params.y){
//     //     params.y=1;
//     // }
//     params.subProps?.name
//     return params.x*(params.y?params.y:1);
// }

// console.log(getArea({
//     x:100,
//     y: 100,
//     position:'relative',
//     subProps:{
//         name:"FDFHKJ"
//     }
// }));

// access modifiers

// #

// class Point {
   
//     constructor(private readonly _x: number, private _y: number){}

//     get x(){
//         return this._x;
//     }

//     set x(value: number) {
//         this._x = value;
//     }
// }

// let myPoint = new Point(100,200);
// myPoint.x=150;
// console.log(myPoint.x);


// class Shape {
//     width: number;
//     height: number;
//     constructor(width: number, height: number){
//         this.width = width;
//         this.height = height;
//     }
//     getArea(): number {
//         return this.width * this.height;
//     }
// }

// type Color = 'red' | 'green' | 'blue';



// class Rectangle extends Shape {
//     color: Color;
//     constructor(width: number, height: number, color: Color){
//         super(width, height);
//         this.color = color;
//     }

//     // rectangle class method
//     toString():string{
//         return 'dfg';
//     }

//     // shape class method
//     override getArea(): number {
//         return this.width + this.height;
//     }
// }



// new Rectangle(100,200,'red').getArea();

// // 

// // Faculty extends University


// interface Shape {
//     getArea(): number;
// }

// class Rectangle implements Shape {
//     getArea() {
//         return 0;
//     }
// }


// abstract class

// abstract class Shape {
//     abstract getArea(): number;

//     toString():string {
//         return `Shape ${this.getArea()}`;
//     }
// }

// class Rectangle extends Shape {
//     constructor(width: number,height: number){
//         super();
//     }
//     getArea(): number {
//         return 0;
//     }
// }

// new Rectangle(100,200).toString();


interface IPlace {
    name: string;
    city: string;
    latitude?: number;
    longitude?: number;
}

// let place: Partial<IPlace> = {

// }

// let place: Required<IPlace> = {
//     name:'fg',
//     city:'fesgfdgf',
//     latitude:0,
//     longitude:1243
// }

// let place: Omit<IPlace, 'name' | 'city'> = {
//     name:'fdsgfdf'
// }

// let place: Pick<IPlace, 'latitude' | 'longitude'> = {
    
// }

// type Primative = string | number | boolean;// Union type

// let some: Exclude<Primative, string> = '43253';


// E-commerce
// Online sowda

// Product
// Order/Sargyt
// Customer
// Category
// Subcategory
// Brand

interface IBrand {
    name: string;
    image: string;
    description?: string;
}

interface IProduct {
    name: string;
    price: number;
    brand: IBrand;
}






