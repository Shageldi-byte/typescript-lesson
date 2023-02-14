"use strict";
class RequestSender {
    constructor(_baseUrl, _options) {
        this._baseUrl = _baseUrl;
        this._options = _options;
    }
    set baseUrl(val) {
        this._baseUrl = val;
    }
    get baseUrl() { return this._baseUrl; }
    set options(val) {
        this._options = val;
    }
    get options() { return this._options; }
    getErrorInfo(code, message) {
        let errorInfo = {
            code: code,
            message: message,
        };
        return errorInfo;
    }
    Get(url, header) {
        return new Promise((resolve, reject) => {
            fetch(`${this._baseUrl}${url}`, {
                headers: Object.assign(Object.assign({}, this._options.headers), header)
            })
                .then(response => {
                return response.json();
            })
                .then(data => {
                resolve(data);
            })
                .catch(err => {
                reject(this.getErrorInfo(400, (err)));
            });
        });
    }
    POST(url, header, body) {
        return new Promise((resolve, reject) => {
            fetch(`${this._baseUrl}${url}`, {
                headers: Object.assign(Object.assign({}, this._options.headers), header),
                method: 'POST',
                body: JSON.stringify(body)
            })
                .then(response => {
                return response.json();
            })
                .then(data => {
                resolve(data);
            })
                .catch(err => {
                reject(this.getErrorInfo(400, (err)));
            });
        });
    }
}
let Axios2 = new RequestSender('https://jsonplaceholder.typicode.com', {});
Axios2.Get('/posts')
    .then(result => {
    result.forEach(post => {
        console.log(post.title);
    });
})
    .catch(err => { console.log(err); });
Axios2.POST('/posts');
