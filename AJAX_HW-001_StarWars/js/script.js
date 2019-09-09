/*** Ajax. NodeJS. BOOTSTRAP. HOMEWORK #01. Star Wars ****/

/********** General Controller: **********/
;
((UICtrl, RqstCtrl) => {

    // set eventlistener on click (button 'get movies'):
    const $btnGetMovie = UICtrl.getDOM().$btnGetMovie;
    $btnGetMovie.on('click', function (event) {
        event.preventDefault();

        //get functions that create DOM elements:
        let doMovsDOM = UICtrl.createMoviesDOM;
        let doCharsDOM = UICtrl.createCharactersDOM;

        // send requests to server and display all: movies and characters:
        RqstCtrl.displayAll(doMovsDOM, doCharsDOM);
    });

})(UserInterfaceController, RequestController);

