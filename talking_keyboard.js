// Talking_Keyboard.js
// Written by Aaron Gaba
//
// jQuery functions for animation and speech


// A small utility function that returns true if the given keycode
// is associated with an alphanumeric key (based upon jQuery's event.which property).
function isAlphanumericKey(keycode) {
    return (keycode >= 48) && (keycode <= 90);
}


$(document).ready(function(){

    $(".keyboard-key").on({
        // Upon mouse-down, make the selectedLetter region immediately visible again
        // and show the letter that was pressed (which is exactly the button's label).
        // Also, speak the letter.
        mousedown: function() {
            $("#selectedLetter").stop().css('opacity', '1.0').text($(this).text());
            responsiveVoice.speak($(this).text().toLowerCase(), "UK English Male");
        },

        // Upon mouse-up, fade away the shown letter.
        mouseup: function() {
            $("#selectedLetter").stop().animate({opacity: 0}, 1000);
        }

    });

});


// Emulates a mousedown event on a keyboard-key button.
$(document).keydown(function (e) {
    if (isAlphanumericKey(e.which)) {
        var myID = "#key-" + String.fromCharCode(e.which);
        $(myID).trigger("mousedown").addClass('active-style');
    }
});

// Emulates a mouseup event on a keyboard-key button.
$(document).keyup(function (e) {
    if (isAlphanumericKey(e.which)) {
        var myID = "#key-" + String.fromCharCode(e.which);
        $(myID).trigger("mouseup").removeClass('active-style');
    }
});