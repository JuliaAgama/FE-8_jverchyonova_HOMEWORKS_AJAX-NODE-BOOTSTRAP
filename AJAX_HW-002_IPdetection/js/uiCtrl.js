/*** Ajax. NodeJS. BOOTSTRAP. HOMEWORK #02. IP Detection ****/
;
/******** User Interface Controller ********/

const UserInterfaceController = (function () {

    // one entry-point to get DOM elements:
    let DOM = {
        $header: $('#header'),
        $btnGetIP: $('#btn-get-ip'),
        $resultsSection: $('#results-section')
    }

    return {
        getDOM: function () { // for usage in general controller
            return DOM;
        },

        // function to create DOM elements to display movies list:
        createResultsDOM: function (dataObj) {
            if(DOM.$resultsSection) {
                $('#results-section').remove();
            };
            DOM.$header.after($(
                `<section id="results-section" class="container-fluid p-5">
                    <div class="row justify-content-xl-between" id="results-box">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <p class="pb-1 font-weight-bold">Континент: </p>
                            <p class="pb-3">${dataObj.continent || 'нет данных'}</p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <p class="pb-1 font-weight-bold">Страна: </p>
                            <p class="pb-3">${dataObj.country || 'нет данных'}</p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <p class="pb-1 font-weight-bold">Регион: </p>
                            <p class="pb-3">${dataObj.regionName || 'нет данных'}</p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <p class="pb-1 font-weight-bold">Город: </p>
                            <p class="pb-3">${dataObj.city || 'нет данных'}</p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <p class="pb-1 font-weight-bold">Район: </p>
                            <p class="pb-3">${dataObj.district || 'нет данных'}</p>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <p class="pb-1 font-weight-bold">Индекс: </p>
                            <p class="pb-3">${dataObj.zip || 'нет данных'}</p>
                        </div>
                    </div>
                </section>`));
            }
        }
})();

