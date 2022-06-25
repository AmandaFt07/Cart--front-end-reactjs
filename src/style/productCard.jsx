import styled from "styled-components"

const Style = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    max-width: 250px;
    width: 100%;
    margin-bottom: 25px ;
    
    &:not(last-child){
        margin-right: 20px;
    }

    &:hover{
        box-shadow: 6px 9px 18px rgba(0,0,0,0.5);
    }

    .imgbox{
        max-width: 250px;
        height: 250px;
        overflow: hidden;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .infos{
        padding-top: 20px;
        display: flex;
        flex-direction: column;

        span{
            text-align: center;
            margin-bottom: 10px;
            font-family:  Mulish;
        }

        button{
            padding: 10px;
            cursor: pointer;
        }
    }
`

export default Style