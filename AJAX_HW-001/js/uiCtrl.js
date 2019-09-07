/*** Ajax. NodeJS. BOOTSTRAP. HOMEWORK #01. Star Wars ****/
;
/******** User Interface Controller ********/

const UserInterfaceController = (function () {

    // one place to get DOM elements:
    let DOM = {
        $header: $('#header'),
        $btnGetMovie: $('#btn-get-movie'),
        $moviesSection: $('#movies-list-section'),
        $movies: $('.movie-item'),
    }

    return {
        getDOM: function () { // for usage in general controller
            return DOM;
        },

        // function to create DOM elements to display movies list:
        createMoviesDOM: function (arr) {
            if(DOM.$moviesSection) {
                $('#movies-list-section').remove();
            };
            DOM.$header.after($(
                `<section id="movies-list-section">
                <div class="container-fluid p-5">
                <div class="row">
                <ul class="list-counter-circle" id="movies-list">
                </ul>
                </div>
                </div>
                </section>`));
                const $moviesList = ('#movies-list');
            arr.forEach((el, ind) => {
                let $item = $(`
                <li class="movie-item col-12 pr-5" data-ind="${ind+1}"> ${el.title}
                    </li>
                    <div class="description-box" id="movie-item-desc-${ind+1}" col-12 bg-light ml-3 p-3">
                        <p class="pl-2">Episode # ${el.episode_id}.</p>
                        <p class="pl-2"> <span class="font-weight-bold">Short Description:</span> ${el.opening_crawl}</p>
                        <div class="row mx-auto">
                            <div class="preloader pl-2 row my-5 mx-auto" id="preloader-${ind+1}">
                                <div class="dash uno col-1"></div>
                                <div class="dash dos col-1"></div>
                                <div class="dash tres col-1"></div>
                                <div class="dash cuatro col-1"></div>
                            </div>
                        </div>
                    </div>
                    `);
                $item.appendTo($moviesList);
            })
        },

        // function to create DOM elements to display characters list for every movie:
        createCharactersDOM: function (movieInd, charArr) {
            $(`#preloader-${movieInd}`).addClass('hidden');
            let $movieDesc = $(`#movie-item-desc-${movieInd}`);
            let $charDiv = $(`
                <p class="row pl-2">
                    <span class="font-weight-bold col-12">Characters:</span>
                </p>
            `);
        $charDiv.appendTo($movieDesc);
            charArr.forEach(el => {
                let $item = $(`
                <li class="char-item col-6 col-md-4 col-lg-3 col-xl-2 pr-3">${el.name}</li>
                `);
                $item.appendTo($charDiv);

            })
        }
    }
})();

