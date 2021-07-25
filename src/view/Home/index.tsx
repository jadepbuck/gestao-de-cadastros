import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png';

import { Container } from './style';

import api from '../../services/api';


interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number; 
}

interface Test {
  cart: IProduct[]
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);


  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
    let product = data[index]
    let push: any = [...cart, cart.push(product)]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  
  function addNome(e: any) {
    setNome(e.target.value)
  }
  function addEmail(e: any) {
    setEmail(e.target.value)
  }
  function addTelefone(e: any) {
    setTelefone(e.target.value)
  }
  function addRua(e: any) {
    setRua(e.target.value)
  } 
  function addNumero(e: any) {
    setNumero(e.target.value)
  }
  function addComplemento(e: any) {
    setComplemento(e.target.value)
  }
  function addBairro(e: any) {
    setBairro(e.target.value)
  }
  function addCep(e: any) {
    setCep(e.target.value)
  } 

  const cliente = {
    nome: nome,
    email: email,
    telefone: telefone,
    rua: rua,
    numero: numero,
    complemento: complemento,
    bairro: bairro,
    cep: cep
  }

  function chamada(){
    const chamadaCliente = JSON.stringify(cliente)
    localStorage.setItem("cliente", chamadaCliente)
  }
  


  return(
    <Container>
      <div className="nav">
          <div>
            <h1>Verde Jade</h1>
          </div>
            <div className="cart">
              <img src={Cart} alt="shopcart" width="50px" height="auto" />
              <span>( {cart.length} ) - Itens</span>
            </div>
      </div>
      
      <div>
          <h2>Peças Exclusivas</h2>
      </div>
      <section>
        { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="joia" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>R${prod.price}</h6>
            <button className="button" onClick={ () => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
        <div>
          <h2 className="oferta">Crie seu cadastro e ganhe 10% de desconto na 1ª compra</h2>
        </div>
      </section>
      <section className="cadastro">
        
        <div className="box">
          <div className="text1">Cadastro</div>
          <p>Dados Pessoais</p>
              <form id="form">
              <div>
                <input type="text" onChange={ e=> addNome (e) }  id="nome" placeholder="Nome"/>
              </div>
              <div>
                <input type="text" onChange={ e=> addEmail (e) }  id="email" placeholder="E-mail"/>
              </div>
              <div>
                <input type="text" onChange={ e=> addTelefone (e) } id="telefone" placeholder="Telefone" />
              </div>
              <div className="endereco">
                <p>Endereço</p>
              <div>
                <input type="text" onChange={ e=> addRua (e) } id="rua" placeholder="Rua"/>
              </div>
              <div>
                <input type="text" onChange={ e=> addNumero (e) } id="numero" placeholder="Número" />
              </div>
              <div>  
                <input type="text" onChange={ e=> addComplemento (e) } id="complemento" placeholder="Complemento"/>
              </div>
              <div>
                <input type="text" onChange={ e=> addBairro (e) } id="bairro" placeholder="Bairro"/>
              </div>
              <div>
                <input type="text" onChange={ e=> addCep (e) } id="cep" placeholder="CEP"/>
              </div>
                <input className="button" onClick={ () => chamada()} type="submit" value="Enviar"/>
              </div>
            </form> 
        </div>
     
      </section>
    </Container>
  );
}

export default Home;