"use strict";
class DeepAxios {
    constructor(_baseUrl, _options) {
        this._baseUrl = _baseUrl;
        this._options = _options;
    }
    set BaseUrl(val) {
        this._baseUrl = val;
    }
    get BaseUrl() {
        return this._baseUrl;
    }
    getFullUrl(subUrl) {
        if (subUrl.startsWith("http") || subUrl.startsWith('https')) {
            return subUrl;
        }
        return `${this._baseUrl}${subUrl}`;
    }
    getErrorMessage(message, code) {
        return {
            code: code,
            message: message
        };
    }
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(this.getFullUrl(url))
                .then((response) => {
                return response.json();
            })
                .then(result => {
                if (!result || result === null || typeof result === 'undefined') {
                    reject(this.getErrorMessage('Something went wrong', 400));
                }
                else {
                    resolve(result);
                }
            })
                .catch(err => {
                reject(this.getErrorMessage(err, 400));
            });
        });
    }
    post(url, body) {
        return new Promise((resolve, reject) => {
            fetch(this.getFullUrl(url), {
                method: 'POST',
                body: JSON.stringify(body)
            })
                .then(response => {
                return response.json();
            })
                .then(result => {
                resolve(result);
            })
                .catch(err => {
                reject(this.getErrorMessage(err, 400));
            });
        });
    }
}
let AxiosInstance = new DeepAxios("https://jsonplaceholder.typicode.com");
// AxiosInstance.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos')
// .then(result=>{
//     result.forEach(photo => {
//         console.log(photo.url);
//     })
// })
// .catch(err=>{
//     console.log(err)
// })
AxiosInstance.post('/posts', {
    body: 'Hello',
    title: 'World',
    userId: 1
})
    .then(result => {
    console.log(result);
})
    .catch(err => {
    console.log(err);
});
// AxiosInstance.get<>('/get-weather')
// .then(response=>{
//     response.
// })
// AxiosInstance.BaseUrl='vdfbghjghkj';
// get-profile
// 
