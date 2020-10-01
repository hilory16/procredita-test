import styled from 'styled-components';
// #F89521
export const Wrapper = styled.div`
    padding:30px 0 30px 0;
    position:fixed;
    left:0;
    width:100%;
    top:0;
    z-index:1000;
    background:rgba(255,255,255,.8);
    .menu-icon{
        width:40px;
    }
    ul{
        li{
            list-style:none;
            font-size:14px;
            font-weight:400;
            font-family: "Trueno", Helvetica, Arial, sans-serif;
            a{
                color:#000;
            }
        }
        width:fit-content;

        a{
            .header-btn{
                font-size:16px;
                color:#fff;
                background:#0025B4;
                padding:10px 40px;
                border-radius: 4px;
                margin-left:40px;
            }
        }
    }
    @media (max-width:991px){
        .nav{
            position:fixed;
            top: 90px;
            left: 0;
            background: rgba(255,255,255,1);
            height: calc(100vh - 90px);
            transition:all ease .3s;
            ul{
                margin-left:unset !important;
                // display:block;
                padding-left:20px !important;
                
                li{
                    margin-bottom:25px;
                    font-size:20px;
                }
                a .header-btn{
                    margin-left:0;
                }
            }
        }
        .close-icon{
            width:30px;
        }
    }
  
    @media (max-width:800px){
    }
    @media (max-width:500px){
        .nav ul{
            padding-top:20px !important;
        }
        .menu-icon{
            width:30px;
        }
        .close-icon{
            width:20px;
        }
    }
`;

export default Wrapper