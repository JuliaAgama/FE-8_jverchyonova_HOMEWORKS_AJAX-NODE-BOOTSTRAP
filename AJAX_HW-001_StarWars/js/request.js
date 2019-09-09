/*** Ajax. NodeJS. BOOTSTRAP. HOMEWORK #01. Star Wars ****/
;
/******** REQUEST class for various options of request methods: ********/

class Request {
    getXHR(url) {
        return new Promise (function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function () {
                if (xhr.readyState === 4) {
                    if(xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(Error(xhr.statusText));
                    }
                }
            };
            xhr.onerror = function () {
                reject(Error('ERROR WITH URL NETWORK'));
            }
            xhr.send();
        })
    }

    getFetch(url) {
        return fetch(url).then(r => r.json(),
        e => console.log(e));
    }

    getAxios(url) {
        return axios.get(url)
        .then(r => r.data, e => console.log('!!! something went wrong with axios.get: ', e));
    }

    getJQget(url) {
        return $.get(url, "json")
            .then(r => r, e => console.log(e.statusText, '!!! something went wrong with $.get'))
    }

    getJQajax(url) {
        return $.ajax(url, "json")
            .then(r => r, e => console.log(e.statusText, '!!! something went wrong with $.ajax'))
    }
};
