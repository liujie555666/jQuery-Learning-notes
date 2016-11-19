/**
 * Created by Administrator on 2016/8/17.
 */
$(function () {
    $(".hearder_bg").css({
        width: "100%",
        height: 900,
        backgroundColor: "#FFF2E1",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden"
    });
    $(".hearder_bg div").css({
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    });
    $(".hearder_bg .fk").css({
        position: "absolute",
        left: "50%",
        background: "url(images/header-ani-icon.png) no-repeat",
    });
    $(".hearder_bg .sj").css({
        position: "absolute",
        zIndex: 3,
        left: "50%",
        backgroundRepeat: "no-repeat"
    });
    $(".xfk").css({
        width: 36,
        height: 32,
        top: 100,
        marginLeft: -330,
        backgroundPosition: "0 -53px"
    });
    $(".dfk").css({
        width: 57,
        height: 53,
        top: 230,
        marginLeft: 220
    });
    $(".bsj").css({
        width: 572,
        height: 821,
        top: 80,
        marginLeft: -700,
        backgroundImage: "url(images/header-mi5-white.png)"
    });
    $(".hsj").css({
        width: 400,
        height: 626,
        top: 120,
        marginLeft: 240,
        backgroundImage: "url(images/header-mi5-black.png)"
    });
    $(".hearder_main").css({
        height: "590px",
        position: "relative",
        zIndex: 5
    });
    $(".content").css({
        paddingTop: 85,
        textAlign: "center",
        position: "relative",
        zIndex: 5,
        overflow: "hidden"
    });
    $(".content .logo").css({
        position: "absolute",
        top: 0,
        left: 0,
        width: 69,
        height: 69,
        background: "url(images/logo.png) no-repeat"
    });
    $(".content .links").css({
        position: "absolute",
        top: 20,
        right: 0,
        textAlign: "right"
    });
    $(".content .links a").css({
        marginLeft: 15,
        color: "#e2ad8e"
    });
    $(".content .sub_title").css({
        fontSize: 24,
        color: "#fc6d27"
    });
    $(".content .title").css({
        height: 90,
        background: "url(images/816slogan.png) no-repeat center 0"
    });
    $(".content .desc").css({
        color: "#333",
        fontSize: 16
    });
    $(".content .mi5_con").css({
        paddingTop: 30
    });
    $(".mi5_con .tit").css({
        marginBottom: 3,
        fontSize: 38,
        // fontFamily:"'F375c4'",
        color: "#424242",
        fontWeight: "900"
    });
    $(".mi5_con .pric").css({
        margin: "1em 0",
        color: "#fc6d27"
    });
    $(".mi5_con .pric em").css({
        fontSize: 24,
        fontFamily: 'Avenir',
        lineHeight: 1
    });
    $(".act .btn").css({
        width: 148,
        height: 44,
        lineHeight: "44px",
        margin: "0 5px",
        textIndex: 1
    });
    $(".act .btn_buy").css({
        backgroundColor: "#fc6d27",
        borderColor: "#fc6d27",
        color: "#fff"
    });
    $(".act .btn_go").css({
        borderColor: "#fc6d27",
        color: "#fc6d27"
    });
    $(".nav").css({
        position: "absolute",
        left: "50%",
        top: 502,
        marginLeft: -575,
        width: 1150,
        height: 88,
        zIndex: 10
    });
    $(".nav ul").css({
        marginLeft: -12
    });
    $(".nav li").css({
        float: "left",
        width: 185,
        height: 88,
        marginLeft: 6,
        cursor: "pointer",
        position: "relative",
        textAlign: "left",
        color: "#ff822d",
        backgroundColor: "rgba(255,255,255,.9)",
        transition: "all .4s"
    }).on("mouseenter", function () {
        $(this).css({
            background: "rgba(255, 130, 45,.9)",
            color: "#fff"
        }).children("span.icon").css({
                backgroundImage: "url(images/nav-icons-hover.png)"
            }
        );
    }).on("mouseleave", function () {
        $(this).css({
            background: "rgba(255,255,255,.9)",
            color: "#ff822d"
        }).children("span.icon").css({
                backgroundImage: "url(images/nav-icons.png)"
            }
        );
    });
    $(".nav .txt").css({
        display: "block",
        marginLeft: 60,
        marginTop: 24
    });
    $(".nav li .icon").css({
        position: "absolute",
        top: 26,
        left: 16,
        width: 36,
        height: 36,
        background: "url(images/nav-icons.png) no-repeat",
        transition: "all .4s"
    });
    $(".nav .item1 .icon").css({
        backgroundPosition: "0 -72px"
    });
    $(".nav .item2 .icon").css({
        backgroundPosition: "0 0px"
    });
    $(".nav .item3 .icon").css({
        backgroundPosition: "0 -36px"
    });
    $(".nav .item4 .icon").css({
        backgroundPosition: "0 -108px"
    });
    $(".nav .item5 .icon").css({
        backgroundPosition: "0 -144px"
    });
    $(".nav .item6 .icon").css({
        backgroundPosition: "0 -180px"
    });
    var topHeight = $(".hearder_main").height() - $(".nav").height();
    $(window).scroll(function () {
        var didST = $(document).scrollTop();
        if (didST >= topHeight) {
            $(".nav").css({
                position: "fixed",
                top: 0
            });
        } else {
            $(".nav").css({
                position: "absolute",
                left: "50%",
                top: 502
            });
        }
    });
    $(document).on("mousemove", function (eve) {
        // console.log(eve.pageY);
        // console.log(eve.pageX);
        $(".hearder_fk").offset({
            top: -eve.pageY / 40,
            left: -eve.pageX / 40
        });
        $(".hearder_sj").offset({
            top: -eve.pageY / 160,
            left: -eve.pageX / 160
        });
    });
    $(".secte01").css({
        backgroundImage: "url(images/bg-3.jpg)", zIndex: 2,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 0",
        backgroundColor: "#e2ad8e",
        position: "relative",
        paddingTop: 80
    });
    $(".secte01 .scete_hd").css({
        height: 200,
        position: "relative",
        zIndex: 2

    });
    $(".secte .scete_hd").css({
        textAlign: "center",
        overflow: "hidden"
    })
    $(".secte01 .scete_hd .title").css({
        marginTop: 90,
        color: "#333"
    });
    $(".scete_hd .title").css({
        fontSize: 30,
        lineHeight: "48px"
    })
    $(".secte .title").css({
        fontWeight: "400"
    })
    $(".secte01 .scete_hd .title span").css({
        color: "#f24d41"
    });
    $(".secte01 .scete_hd .desc").css({
        color: "#885536"
    });
    $(".scete_hd .desc").css({
        lineHeight: "24px",
        fontSize: 16
    });
    $(".con_phone01").css({
        backgroundColor: "#fcdcbd",
        backgroundImage: "url(images/mi5-package2.jpg)"
    });
    $(".con_phone02").css({
        backgroundColor: "#fdf1df",
        backgroundImage: "url(images/mi5-package3.jpg)"
    });
    $(".con_phone03").css({
        backgroundColor: "#fcdcbd",
        backgroundImage: "url(images/mi5-package4.jpg)"
    });
    $(".con_phone").css({
        height: 300,
        marginBottom: 10,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 0",
        overflow: "hidden"
    });
    $(".secte .cont").css({
        overflow: "hidden"
    });
    $(".secte01 .cont").css({
        margin: "80px 0 0 192px"
    })
    $(".secte01 .cont_r").css({
        marginLeft: 500
    })
    $(".secte01 .con_phone .title").css({
        margin: "0 0 8px",
        fontSize: 24,
        color: "#333",
        lineHeight: "30px"
    });
    $(".con_phone .desc").css({
        margin: "0 0 30px",
        color: "#333"
    });
    $(".con_phone .btn").css({
        width: 154,
        height: 56,
        marginRight: 10,
        borderColor: "#e84c3a",
        backgroundColor: "#e84c3a",
        color: "#fff",
        lineHeight: 1
    });
    $(".con_phone .btn em").css({
        display: "block",
        marginTop: 10,
        marginBottom: 5,
        fontStyle: "normal",
        fontSize: 16
    });
    $(".secte01 .list").css({
        margin: "0 0 0 -10px"
    });
    $(".secte01 .list li").css({
        float: "left",
        width: 499,
        marginLeft: 10,
        marginBottom: 10,
        paddingBottom: 12,
        backgroundColor: "#fff"
    });
    $(".secte01 .list .pic").css({
        display: "block",
        height: 545,
        backgroundRepeat: "no-repeat"
    });
    $(".secte01 .list .pic a").css({
        display: "block",
        height: 545,
        textIndent: "-9999em"
    });
    $(".secte01 .list .pic01").css({
        backgroundImage: "url(images/mi5-ver-white.jpg)"
    });
    $(".secte01 .list .pic02").css({
        backgroundImage: "url(images/mi5-ver-gold.jpg)"
    });
    $(".secte01 .list .pic03").css({
        backgroundImage: "url(images/mi5-ver-red.jpg)"
    });
    $(".secte01 .list .pic04").css({
        backgroundImage: "url(images/mi5-ver-black.jpg)"
    });
    $(".secte01 .list .btn").css({
        float: "left",
        width: 232,
        height: 110,
        marginLeft: 10,
        borderColor: "#f24d41",
        color: "#333",
        lineHeight: 1,
        transition: "all .1s"
    }).on("mouseenter",function () {
        $(this).css({
            backgroundColor:"#f24d41",
            color:"#fff"
        }).children().css({
            color:"#fff"
        });
    }).on("mouseleave",function () {
        $(this).css({
            backgroundColor:"#fff",
            color:"#333"
        }).children().css({
            color:"#f24d41"
        });
    });
    $(".secte01 .list .actions span").css({
        display: "block",
        marginTop: 30,
        marginBottom: 2,
        fontSize: 24,
        color: "#f24d41"
    });
    $(".secte01 .list .actions span em").css({
        fontStyle: "normal",
        fontSize: 34,
        lineHeight: 1
    });
    $(".secte02 .scete_hd").css({
        height:180,
        backgroundColor:"#e2ad8e"
    });
    $(".secte02 .scete_hd .title").css({
        marginTop: 50,
    color: "#333"
    });
    $(".secte02 .scete_hd .title span").css({
        color:"#f24d41"
    });
    $(".secte02 .scete_hd .desc").css({
        color:"#666"
    });
    $(".secte02 .scete_bd").css({
        backgroundImage:"url(images/bg-1.jpg)"
        ,backgroundColor: "#fff0dd"
    });
    $(".secte .scete_bd").css({

    backgroundPosition: "center 0",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
    });
    $(".pro_box").css({
        position: "relative",
    height: 453,
    marginBottom: 10,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 0",
    overflow: "hidden"
    });
    $(" .pro_b01").css({
        width: "100%",
    height: 435,
    backgroundColor: "#333",
        backgroundImage:"url(images/hm3x.jpg)"
    });
    $(" .pro_b01 .cont").css({
        margin:"130px 0 0 500px"
    });
    $(" .pro_b01 .more").css({
        left:0
    });
    $(" .pro_b01 .title,.pro_b01 .desc").css({
        color:"#fff"
    });
    $(" .pro_b01 .title span,.pro_b03 .title span,.secte02 .scete_bd .price").css({
        color:"#f24d41"
    });
    $(" .pro_b01 .price del").css({
        color:"#eaeaea"
    });
    $(".pro_b01 .btn_p").css({
        display:"block"
    });
    $(".pro_b02").css({
        backgroundImage:"url(images/mimax.jpg)",
        backgroundColor: "#eaeaea"
    });
    $(".pro_b02 .cont").css({
        margin:"130px 0 0 560px"
    });
    $(" .pro_b02 .more").css({
        left:0
    });
    $(".pro_b02 .title,.pro_b01 .btn_p").css({
        color:"#333"
    });
    $(".pro_b02 .desc,.pro_item .price del").css({
        color:"#666"
    });
    $(".pro_b03").css({
        backgroundImage:"url(images/mi5gp.jpg)",
        backgroundColor: "#f7c63a",
        float:"left",
        width:"100%",
        height:435
    });
    $(".pro_b03 .cont").css({
        margin:"100px 0 0 114px"
    });
    $(" .pro_b03 .more").css({
        right:0
    });
    $(".pro_b03 .title,.pro_b03 .desc").css({
        color:"#333"
    });

    $(" .pro_box .more").css({
        position:"absolute",
        textIndent:"-9999em",
        top:0,
        width:"50%",
        height:"100%"
    });
    $(".pro_box .title").css({
        margin: "0 0 8px",
    fontSize: 26,
    lineHeight: "32px"
    });
    $(".pro_box .desc").css({
        lineHeight:"20px"
    });
    $(".pro_box .price").css({
        margin:"35px 0 20px"
    });
    $(".pro_box .price em").css({
        fontSize:28
    });
    $(".secte .price em").css({
        fontFamily: 'Avenir',
    fontStyle: "normal",
    lineHeight: 1
    });
    $(".secte .price del").css({
        marginLeft:6
    });
    $(".pro_box .btn_p").css({
        display:"block",
        marginBottom:6
    });
    $(".btn_p").css({
        borderColor: "#f24d41",
    backgroundColor: "#f24d41",
    color: "#eaeaea"
    });
    $(".pro_item").css({
        float: "left",
    width: 499,
    height: 598,
    marginBottom: 10
    });
    $(".pro_item .more").css({
        display: "block",
    height: 470,
    backgroundRepeat: "no-repeat",
    textIndent: "-9999em"
    });
    $(".pro_item .cont").css({
        height: 102,
    padding: "26px 60px 0",
    backgroundColor: "#fff"
    });
    $(".pro_item .l").css({
        float: "left",
        width: 230
    });
    $(".pro_item .r").css({
        float: "right",
        width: 142
    });
    $(".pro_item .title").css({
        margin: "0 0 5px",
    fontSize: 22,
    lineHeight: "32px"
    });
    $(".pro_item .desc").css({
        color:"#666"
    });
    $(".pro_item .price").css({
        margin: "0 0 5px"
    });

    $(".pro_item .price em").css({
       fontSize:22,
        lineHeight:"32px"
    });
    $(".pro_it01 .more").css({
        backgroundImage:"url(images/mi5.jpg)"
    });
    $(".pro_it02 .more").css({
        backgroundImage:"url(images/hmpro.jpg)"
    });
    $(".pro_it03 .more").css({
        backgroundImage:"url(images/hmnote3.jpg)"
    });
    $(".pro_it04 .more").css({
        backgroundImage:"url(images/hm3s.jpg)"
    });
    $(".pro_it02,.pro_it04").css({
        marginLeft: 10
    });
});