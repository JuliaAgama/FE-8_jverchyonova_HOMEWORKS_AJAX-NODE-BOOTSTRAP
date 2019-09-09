/*** Ajax. NodeJS. BOOTSTRAP. HOMEWORK #02. IP Detection ****/
;

/********** Main Controller: **********/
((UICtrl, RqstCtrl) => {

    // define variables that come from other modules:
    const $btnGetIP = UICtrl.getDOM().$btnGetIP;
    const createDOM = UICtrl.createResultsDOM;
    const requestID = RqstCtrl.requestID;
    const requestGeo = RqstCtrl.requestGeo;


    // async function that describes general process:
    async function displayResults (getID, getGeo) {
        createDOM ( await getGeo(getID) );
    };


    // set eventlistener on click (button 'get ip'):

    $btnGetIP.on('click', function (event) {
        event.preventDefault();
        try {
            displayResults(requestID, requestGeo );
        } catch (err) {
            console.log('ERROR HERE: ', err)
        }
    });

})(UserInterfaceController, RequestController);

