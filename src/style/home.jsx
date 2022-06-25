import styled from "styled-components"


const Style = styled.section`
    padding: 50px 20px ;
    background-color: #e8eff2;
    position: relative ;
    
    .banner{
        background-image: url("/images/bg.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: rgba(0, 0, 0, 0.5);
        background-blend-mode: multiply;
        background-attachment: fixed;
        padding: 150px 20px ;
        margin-bottom: 50px;

        h1{
            text-align: center;
            font-family: Mulish;
            font-weight: 300;
            font-size: 50px;
            color: #fff;
        }
    }

    .container{
        display: flex;
        max-width: 1250px;
        margin: 0 auto;
        flex-wrap: wrap;
        
    }

    @media (max-width: 1280px){
        .container{
            justify-content: center;
        }
    }
`

export default Style