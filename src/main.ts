interface IRequestOptions{
    headers?: Record<string, string>;
}
interface IError {
    message?: string;
    code?: number;
}
class RequestSender {
    constructor(private _baseUrl: string, private _options: IRequestOptions){}
    set baseUrl(val: string){
        this._baseUrl = val;
    }
    get baseUrl(): string {return this._baseUrl}

    set options(val: IRequestOptions){
        this._options = val;
    }

    get options(): IRequestOptions{return this._options}

    getErrorInfo(code: number,message:string): IError {
        let errorInfo: IError={
                code: code,
                message: message,
        };
        return errorInfo;
    }

    public Get<T>(url: string, header?: Record<string, string>){
        return new Promise<T>((resolve, reject) => {
            fetch(`${this._baseUrl}${url}`,{
                headers: {
                    ...this._options.headers,
                    ...header
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data=>{
                resolve(data);
            })
            .catch(err=>{
                reject(this.getErrorInfo(400,(err) as string));
            });
        })
    }
    
    public POST<T,B>(url: string,  header?: Record<string, string>, body?: B){
        return new Promise<T>((resolve, reject) => {
            fetch(`${this._baseUrl}${url}`,{
                headers: {
                    ...this._options.headers,
                    ...header
                },
                method: 'POST',
                body: JSON.stringify(body)
            })
            .then(response => {
                return response.json();
            })
            .then(data=>{
                resolve(data);
            })
            .catch(err=>{
                reject(this.getErrorInfo(400,(err) as string));
            });
        })
    }
}









// let MyAxios = new RequestSender('https://jsonplaceholder.typicode.com',{
//     headers: {}
// });
// interface IResponse {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// MyAxios.Get<IResponse[]>('/posts',{})
// .then(response=>{
//     console.log(response);
// })
// .catch(err => {
//     console.log(err);
// });

// interface IBody{
//     title: string;
//     body: string;
//     userId: number;
// }

// MyAxios.POST<{id: number},IBody>('/posts',{},{
//     body: 'Body',
//     title: 'Title',
//     userId: 1
// })
// .then(result=>{
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// });

interface IPost{
    userId: number;
    id: number;
    title: string;
    body: string;
}
let Axios2=new RequestSender('https://jsonplaceholder.typicode.com',{});
Axios2.Get<IPost[]>('/posts')
.then(result=>{
    result.forEach(post=>{
        console.log(post.title);
    })
})
.catch(err => {console.log(err)})




