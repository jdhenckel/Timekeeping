


$(document).ready(function(){
    $(".topbar button").click(function(x){
//        print(x);
        $('.childwrapper div').hide();
        $(".topbar button").removeClass("selected");
        let b = $(x.target);
        b.addClass("selected");
        $('.view' + b.attr('id')).show();
    });
});

function print(x) {
    console.log(JSON.stringify(x));
}
