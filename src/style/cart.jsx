import styled from 'styled-components'

const Style = styled.section`
    position: relative;

    .openButton{
        position: absolute;
        padding: 5px;
        top: 10px;
        left: -50px;
        width: 40px; 
        height: 40px;
        border-radius: 5px 0 0px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: #ffddd3;
        
    }

    .open{
        transform: translate(20px);
        transition: 2s;
    }

    .close{
        transform: translate(300px);
        transition: 2s;
    }

    .card{
        position: fixed;
        top: 25px;
        right: 0;
        background-color: #fff;
        padding: 20px 30px;
        border-radius: 10px 0 0 10px ;
        box-shadow: 8px 9px 18px #000;
        max-width: 236px;
        width: 100%;
        max-height: 475px;
    
        .containt{
            max-height: 385px;
            overflow: hidden;
            
            ul{
                padding: 0 ; 
                max-height: inherit;
                overflow: auto;
            }
        
            li{
                list-style: none;
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
        
            .imgbox{
                max-width: 100px;
                width: 100%;
                height: 100px;
                overflow: hidden;
                margin-right: 15px ;
        
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
        
            .infos{
                display: flex;
                flex-direction: column;
                margin-right: 15px ;
                max-width: 110px;
                width: 100%;
        
                span{
                    text-align: center;
                    margin-bottom: 5px;
                    font-family:  Mulish;
                    font-size: 15px;
                }
            }
            
            .btns{
                display: flex;
                align-items: center;
                justify-content: space-around;
        
                button{
                    border: none;
                    background-color: #fff;
                    padding: 2px;
                    display: flex;
                    border: 1px solid black;
                    border-radius: 2px;
        
                    &:hover{
                        background-color: #e8eff2;
                    }  
                }
            }
        }
    }
`

export default Style