/* Tentativa de utilizar botão "Scroll to the top" - "Voltar para o topo"

-----------------------------------------------------------------------------------------------

Java Script

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

-----------------------------------------------------------------------------------------------

HTML

<a href="#top" class="glyphicon glyphicon-chevron-up"></a>

-----------------------------------------------------------------------------------------------

CSS

a[href="#top"]{
    padding:10px;
    position:fixed;
    top: 90%;
    right:40px;
    display:none;
    font-size: 30px;
}
a[href="#top"]:hover{
    text-decoration:none;
}

*/