/*** Ajax. NodeJS. BOOTSTRAP. HOMEWORK #01. Star Wars ****/
;
/******** REQUEST Controller ********/

const RequestController = (function () {
    return {

        displayAll: function (doMoviesDOM, doCharactersDOM) {
            let request = new Request();
            // request.getXHR('https://swapi.co/api/films/')
            // request.getFetch('https://swapi.co/api/films/')
            // request.getAxios('https://swapi.co/api/films/')
            // request.getJQget('https://swapi.co/api/films/')
            request.getJQajax('https://swapi.co/api/films/')

            .then (r => {
                doMoviesDOM(r.results);
                return r.results;
            }).then (r => {
                r.forEach((el, ind)=> {
                    // Promise.all(el.characters.map(request.getXHR))
                    // Promise.all(el.characters.map(request.getFetch))
                    // Promise.all(el.characters.map(request.getAxios))
                    // Promise.all(el.characters.map(request.getJQget))
                    Promise.all(el.characters.map(request.getJQajax))

                    .then(arr => {
                        doCharactersDOM(ind+1, arr);
                    });
                })
            }).catch (e => {
                console.log('ERROR HERE: ', e)})
        }
    }

})();



