


$(document).ready(initialize);

//****** Global data ***********

var token;

// call this one time
function initialize() {
    $(".topbar button").click(clickButtonBar);
    
    // simulate button click
    $('#1').click();
}


// click a button on the top bar
function clickButtonBar(x){
    $('.childwrapper > div').hide();
    $(".topbar button").removeClass("selected");
    let b = $(x.target);
    b.addClass("selected");
    $('.view' + b.attr('id')).show();
}


function logon() {
    let userpw = {
        username: $('#user').val(),
        password: $('#pw').val(),
    };
    print('attempt logon', userpw);
    $.post('api/logon', userpw, (data, status) => {
        print('logon result = ', data, status);
        token = data;
        $('#token').text(token);
    });
}


// for debugging stuff
function print(...x) {
    console.log(JSON.stringify(x,null,4));
}
