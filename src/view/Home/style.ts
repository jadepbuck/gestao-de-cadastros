import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  margin: auto;


  .nav{
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #C7D9AD;
  }
  
    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      margin: 7px;
      background: #C7D9AD;
      border-radius: 12px;
    }
    h1{
    font-family: 'Nunito', sans-serif;
    text-align: center;
    color: #627337;
    font-size: 50px;
    padding: 12px;
    margin-left: 8px;
  }
  }

  .button{
    height: 30px;
    width: 150px;
    margin: auto;
    background: #C7D9AD;
    color: #595048;
    border: none;
    border-radius: 20px;
    text-shadow:none;
    transition: 0.2s;
    font-family: 'Rubik', sans-serif;
  }

  .button:hover{
    background: #93A677;
    color: #fff;
    border-radius: 20px;
    box-shadow: none;
    text-shadow:none;
    cursor: pointer;
  }

  .oferta{
    color: #3B402B;
  }

  h2 {
    text-align: center;
    background: #E7F2D5;
    padding: 12px;
    font-size: 30px;
    color: #595048;
    font-family: 'Nunito', sans-serif;
  }

  section {
    height: 80%;
    width: 100%;
    background: #E7F2D5;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .oferta {
      font-size: 30px;
      margin: 40px;
      font-family: 'Nunito', sans-serif;
      display: block;
    }

    .product-content{
      display: grid;
      text-align: center;
      justify-content: space-between;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      margin: 2px 0;
    }

    h4, span, h6{
      font-family: 'Rubik', sans-serif;
      color: #595048;
    }

  }

  .cadastro{
    height: 80%;
    width: 100%;
    text-align: center;


    .box{
      height: 90%;
      width: 70%;
      background-color: #BFB6AE;
      margin-top: 50px;
      padding-bottom: 40px;
      margin-bottom: 100px;
      border-radius: 12px;

      .text1{
        text-align: center;
        font-size: 25px;
        font-family: 'Rubik', sans-serif;
        padding: 10px;
        color: #595048;
      }

      p{
        text-align: center;
        font-family: 'Rubik', sans-serif;
        color: #595048;
      }
      
    }

  }


  input{
    width: 70%;
    height: 20px;
    border-radius: 10px;
    border: none;
    padding: 4px;
    margin: 7px;
    outline: none;
    font-family: 'Rubik', sans-serif;
    
  }




`