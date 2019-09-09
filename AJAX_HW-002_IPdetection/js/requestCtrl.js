/*** Ajax. NodeJS. BOOTSTRAP. HOMEWORK #02. IP Detection ****/
;
/******** REQUEST class for "get" method: ********/

class Request {
    get(url) {
        return $.get(url, "json")
            .then(r => r, e => console.log(e.statusText, '!!! something went wrong with $.get'))
    }
};

/******** REQUEST Controller ********/

const RequestController = (function () {

    return {

        requestID: async function () {
            return new Request().get('https://api.ipify.org/?format=json')
        },

        requestGeo: async function (idReq) {
            let id = await idReq();
            let data = await new Request().get(`http://ip-api.com/json/${id.ip}?lang=ru&fields=continent,country,regionName,city,district,zip`);
            for (key in data) {
                if (data[key] === '') {
                    data[key] = 'нет данных'
                }
            }
            return data;
        },
    }
})();

