import styled from 'styled-components';
// #F89521
// 9E1C31
export const Wrapper = styled.div`
   
    min-height:100vh;
    .banner-container{
        max-height:100vh;
        position:relative;

        .banner{
            overflow-y:hidden;
            height:100%;
    
            .big-text{
                font-weight: bold;
                font-size:44px;
                line-height:54px;
                margin-bottom:35px;
                color:#2F281E;
            }
            .small-text{
                margin-bottom:35px;
                line-height: 28px;
                color: #544837;
            }
            
        }
        .content{
            padding-top:95px;
            padding-bottom:20px;
            position:relative;
        }
        .fill{
            position:absolute;
            bottom: -5%;
            left: 5%;
            width:100px;
        }
    }

    .btn-pattern{
        width:245px;
        background-size:contain;
        border-radius: 5px;
        color:#fff;
        padding:20px 0;
        text-align:center;
        font-weight:400;
        font-family: "Trueno", Helvetica, Arial, sans-serif;
        height:66px;
    }
    
    .btn-1-pattern{
        background:url(${require('../../assets/img/banner-btn-bg.svg')}) no-repeat;
    }
    .btn-2-pattern{
        background:url(${require('../../assets/img/pattern-btn-white.svg')}) no-repeat;
        color: #0025B4;
    }
    .btn-1-pattern.space{
        margin-right:30px;
    }
    .button-container{
        .video{
            span{
                color:#0025B4;
                font-weight:600;
                text-decoration:underline;
                font-family: "Trueno", Helvetica, Arial, sans-serif;
            }
        }
    }

    section{
        padding:50px 0;
        .icon{
            margin-bottom:20px;
        }
        h2{
            font-weight: bold;
            line-height: 54px;
            color:#2F281E;
            font-size:36px;
            margin-bottom:40px;
        }
        .main-desc{
            p{
                 font-size:16px;
                 line-height:26px;
                 font-weight:300;
                 margin-bottom:20px;
                 color: #000000;
                 font-family: "Trueno", Helvetica, Arial, sans-serif;
             }
         }
    }

    .about{
        background: #F5F9FF;
        
        .features{
            background: #FFFFFF;
            box-shadow: 0px 15px 55px rgba(0, 0, 0, 0.1);
            padding:70px 40px 30px 40px;
            width:80%;
            margin-top:-45px;
            z-index:100;
            position:relative;

            .ft{
                margin-bottom:45px;
            }

            p{
                font-weight: normal;
                font-size: 16px;
                line-height: 26px;
                text-align: center;
                color: #01114C;
                margin-bottom:0;
            }
            .item{
                padding:0 30px;
                height:100%;
            }

            .feature-line{
                border-right: 0.25px solid #979797;
               
            }
            .icon{
                margin-bottom:83px;
                background: #0025B4;
                border-radius: 19px;
                width:50px;
                height:50px;
            }
            .icon.blue-1{
                background: #0025B4;
                box-shadow:0px 10px 15px rgba(0,37,180,.6)
            }
            .icon.blue-2{
                background: #09B1D9;
                box-shadow:0px 10px 15px rgba(9,177,217,.5)
            }
            .icon.blue-3{
                background: #01114C;
                box-shadow:0px 10px 15px rgba(1,17,76,.5)
            }
           
        }
    }

    .invite{
        h6{
            margin-bottom:30px;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            color: #01114C;
        }
        p{
            font-weight:normal !important;
            margin-bottom:30px !important;
           font-size:16px !important;
        }
    }

    .info{
        background:url(${require('../../assets/img/bg-pattern.jpg')}) no-repeat;
        background-size:cover;
        background-poaition:center;
        color:#fff;
        text-align:center;
        padding-top:60px;
        h4{
            font-weight: bold;
            font-size: 25px;
            line-height: 35px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom:35px;

            span{
                color:#01114C;
            }
        }
    }

    .testimonies{
        padding-top:94px;
        h2{
            margin-bottom:75px;
        }
        .testimony{
            width:90%;
            margin-bottom:78px;
            .placard{
                background: #FFFFFF;
                box-shadow: 0px 15px 55px rgba(0, 0, 0, 0.1);
                border-radius: 15px;
                padding:20px 30px;
                margin-bottom:30px;
            }
            img{
                width: 80px;
                height: 80px;
            }
        }
        .fix{
            margin-right:-80px;
        }
    }

    footer{
        background: rgba(0, 102, 245,  0.07);
        // background:#000;
        background-blend-mode: screen;
        mix-blend-mode: normal;
        // opacity: 0.07;
        padding:100px 0 60px 0;
        .icon{
            margin-bottom:38px;
            img{
                // width:100%;
                width:145px;
            }
        }
        .socials{
            width:145px;
            div{
                background: #0091FF;
                border-radius: 8px; 
                width:30px;
                height:30px;

                img{
                    width:12px;
                    height:12px;
                }
            }
        }
        ul{
            li{
                list-style:none;
                font-family: Raleway;
                font-weight: 500;
                color: #6D7278;
                margin-bottom:10px;
            }
        }
        h6{
            margin-bottom:25px;
            font-family: Raleway;
            font-style: normal;
            font-weight: bold;
            font-size: 21px;
            line-height: 19px;
            letter-spacing: -0.227272px;
            color: #041E8B;
        }
        .contact{
            .map{
                opacity:.7;
            }
            .placard{
                background: #FFFFFF;
                box-shadow: 0px 40px 400px rgba(0, 0, 0, 0.04);
                border-radius: 8px;
                padding:21px;
                width:250px;
                margin-top:-32%;
                margin-left:50%;
                z-index:200;
                position:relative;
            }
            ul{
                li{
                    font-family: Raleway;
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 12px;

                    color: #000000;
                    margin-bottom:20px;
                    img{
                        width:25px;
                        
                    }
                    img.small{
                        width:15px;
                        
                    }
                }
            }
        }
        .head{
            font-family: Trueno;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #041E8B;
            margin-bottom:5px;
            margin-top:45px;
        }
        .cookies{
            font-family: Trueno;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            color: #6D7278;
            margin-bottom:45px;
        }
        .credits{
            font-family: Raleway;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 14px;
            color: #041E8B;
            text-align:center;

        }
    }

    
    .cards{
        overflow-x:scroll;
    }
    
    
    
    .relative{
        position:relative;
    }
    .slick-slider{
        height:90%;
    }

    @media (max-width:1280px){
        section{
            .main-desc{
                p{
                     font-size:15px;
                     line-height:26px;
                     font-weight:300;
                     margin-bottom:20px;
                     color: #000000;
                     font-family: "Trueno", Helvetica, Arial, sans-serif;
                 }
             }
        }
    }

    @media (max-width:1024px){
        .about .features{
            margin-top:40px;
            width:90%;
        }
        .testimonies .fix{
            margin-right:-20px;
        }
        footer .contact .placard{
            margin-left:-20%;
        }
    }

    @media (max-width:991px){
        .about .features .feature-line {
            border-right:none;
        }
        footer .contact .map{
            width:90%;
            margin:0 auto;
        }
        footer .contact .placard {
            margin-left: 40%;
        }
    }
    
    @media (max-width:800px){
        .banner-container {
            max-height: 100%;
        }
    }
    @media (max-width:500px){
        .banner-container .banner .big-text {
            font-size: 38px;
            line-height: 49px;
        }
        .about .features {
            padding: 70px 20px 30px 20px;
        }
        .about .features .icon{
            margin-bottom:30px;
        }
        section h2 {
            line-height: 45px;
            font-size: 33px;
        }
        .info h4 {
            font-size: 22px;
            line-height:33px;
        }
        .testimonies .testimony{
            margin-left:unset !important;
            margin-right:auto;
        }
        .testimonies .fix {
            margin-right:0;
        }
        footer .contact .placard {
            margin-left: 10%;
        }
    }
`;

export default Wrapper