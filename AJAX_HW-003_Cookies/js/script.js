/*** Ajax. NodeJS. BOOTSTRAP. HOMEWORK #03. Cookies. Pricing Table ****/
;

$('#btn-contact').on('click', function (event) {
    event.preventDefault();
    try {
        $.cookie('experiment', 'novalue', {expires: 300/24/60/60}); //seconds to days

        $.cookie('new-user') ? $.cookie('new-user', false) : $.cookie('new-user', true);

    } catch (err) {
        console.log('ERROR HERE: ', err)
    }
});
