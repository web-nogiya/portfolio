$(function(){
    $('a[href^=#]').click(function() {
       var speed = 1000;
       var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
       var position = target.offset().top;
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
    $exp = $('.ansExplain');
    $ableList = $('.ableList');
    $AList = $('.ALists');
    $('.why').hover(
        function(){
          $(this).addClass('hover');
        },function(){
          $(this).removeClass('hover');
    });
    $('.why').click(function(){
        if($(this).hasClass('done')){

        $exp.fadeOut(500);
        $(this).removeClass('done');

    }else{
        $exp.fadeIn(1000);
        $(this).addClass('done');
        }
    });
    
    $('#listContainer').click(function(){
        if($ableList.hasClass('done')){
            $AList.addClass('reList')
            $ableList.fadeOut(500);
            $AList.removeClass('list');
            $ableList.removeClass('done');
            $('#listContainer').text("リストを開ける");
        }else{
            $AList.removeClass('reList');
            $ableList.fadeIn(1000);
            $AList.addClass('list');
            $ableList.addClass('done');
            $('#listContainer').text("リストを閉じる");
        };
    })
});