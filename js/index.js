//异步加载页头和页尾
$('#header').load('php/header.php');
$('#footer').load('php/footer.php');
//登录和注册切换
$(".signin").click(function(){
    this.className="signin focus";
    $(".signup")[0].className="signup";
    $(".input_signin")[0].className="input_signin active";
    $(".input_signup")[0].className="input_signup";
});
$(".signup").click(function(){
    this.className="signup focus";
    $(".signin")[0].className="signin";
    $(".input_signup")[0].className="input_signup active";
    $(".input_signin")[0].className="input_signin";
});

//新闻滚动显示
$(function(){
    $('.BreakingNewsController').BreakingNews({
        title: '新闻介绍',
        titlebgcolor: '#cf0c36',
        linkhovercolor: '#fff',
        border: 'none',
        timer: 5000,
        effect: 'slide'
    });
});

//点击显示或隐藏
$('#icon').click(function(){
    if($('#route').is(':hidden')){
        $('#route').show();
    }else{
        $('#route').hide();
    }
});

//Tab切换
$(document).ready(function(){
    $('.tab li').click(function(){
        $('.tab li').eq($(this).index()).addClass('active').siblings().removeClass('active');
        $('.titleShow').hide().eq($(this).index()).show();
    });
});