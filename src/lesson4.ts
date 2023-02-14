interface IRequestOptions{
    headers?: Record<string, string>;
}
interface IError {
    message?: string;
    code?: number;
}
class DeepAxios {
    constructor(
        private _baseUrl: string,
        private _options?: IRequestOptions){}

    set BaseUrl(val: string){
        this._baseUrl = val;
    }

    get BaseUrl(): string {
        return this._baseUrl;
    }

    private getFullUrl(subUrl: string): string {
        if(subUrl.startsWith("http") || subUrl.startsWith('https')) {
            return subUrl;
        }
        return `${this._baseUrl}${subUrl}`;
    }

    private getErrorMessage(message: string, code: number): IError {
        return {
            code: code,
            message: message
        }
    }

    public get<T>(url: string){
        return new Promise<T>((resolve, reject) => {
            fetch(this.getFullUrl(url))
            .then((response) => {
                return response.json();
            })
            .then(result=>{
                if(!result || result === null || typeof result === 'undefined'){
                    reject(this.getErrorMessage(
                        'Something went wrong',
                        400
                    ))
                } else {
                    resolve(result);
                }
            })
            .catch(err=>{
                reject(this.getErrorMessage(err,400));
            })
        })
    }

    public post<Req,Res>(url: string,body?: Req){
        return new Promise<Res>((resolve, reject) => {
            fetch(this.getFullUrl(url),{
                method: 'POST',
                body: JSON.stringify(body)
            })
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                resolve(result);
            })
            .catch(err=>{
                reject(this.getErrorMessage(err,400));
            })

        })
    }


}

let AxiosInstance = new DeepAxios("https://jsonplaceholder.typicode.com");

interface IResponse{
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IWeather {
    temp: number;
    city: string;
}

// AxiosInstance.get<IResponse[]>('/posts')
// .then(response=>{
//     try{
//         response.forEach(item=>{
//             console.log(item.title);
//         })
//     } catch(err){}
// })
// .catch(error=>{
//     console.log(error);
// })

interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface IPostBody {
    title: string;
    body: string;
    userId: number;
}

// AxiosInstance.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos')
// .then(result=>{
//     result.forEach(photo => {
//         console.log(photo.url);
//     })
// })
// .catch(err=>{
//     console.log(err)
// })

AxiosInstance.post<IPostBody,IResponse>('/posts',{
    body:'Hello',
    title:'World',
    userId:1
})
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})

// AxiosInstance.get<>('/get-weather')
// .then(response=>{
//     response.
// })

// AxiosInstance.BaseUrl='vdfbghjghkj';

// get-profile


// 
