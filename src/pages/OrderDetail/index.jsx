import {Container} from "./styles.js"

import { Header} from "../../components/Header"

import { Footer} from "../../components/Footer"

import { MiniOrder } from "../../components/MiniOrder"

import { Link } from "react-router-dom"

import{FaRegCreditCard} from "react-icons/fa"

export function OrderDetail(){
  return(
    <Container>
      <Header/>
      <main>
        <div className="pedidos">
          <h1>Meu pedido</h1>
          <MiniOrder title="Salada Molla" 
          number="1"
          price="25,39"
          img="https://i.ibb.co/VT49VKz/molla.png"
          />
          <MiniOrder title="Salada Molla" 
          number="1"
          price="25,39"
          img="https://i.ibb.co/VT49VKz/molla.png"
          />
          <MiniOrder title="Salada Molla" 
          number="1"
          price="25,39"
          img="https://i.ibb.co/VT49VKz/molla.png"
          />
          <h2>Total: 103,88</h2>
          <Link to='/orders/2'><p> Mais Pedidos</p></Link>
        </div>
        <div className="pagamento">
          <h1>Pagamento</h1>
          <div className="payment_table">
            <div className="pix">
              <div className="cell">
                <FaRegCreditCard/> <p>Pix</p>
              </div>
            </div>
            <div className="credit_card"> 
              <div className="cell">
                <FaRegCreditCard/> <p>Crédito</p>
              </div> 
            </div>
            <div className="window">
              <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M76.8942 37.2394C78.4191 38.8378 78.3595 41.3698 76.7611 42.8947L47.4111 70.8947C45.8647 72.37 43.4316 72.369 41.8865 70.8923L27.2365 56.8923C25.6393 55.3661 25.5819 52.8341 27.1082 51.2369C28.6344 49.6398 31.1664 49.5824 32.7636 51.1086L44.6524 62.47L71.2389 37.1063C72.8374 35.5814 75.3693 35.641 76.8942 37.2394Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M52 8C27.6995 8 8 27.6995 8 52C8 76.3005 27.6995 96 52 96C76.3005 96 96 76.3005 96 52C96 27.6995 76.3005 8 52 8ZM0 52C0 23.2812 23.2812 0 52 0C80.7188 0 104 23.2812 104 52C104 80.7188 80.7188 104 52 104C23.2812 104 0 80.7188 0 52Z" fill="white"/>
              </svg>
              <h2>Pagamento Aprovado!</h2>
            </div>
          </div>
        </div>
      </main> 
      <Footer/>
    </Container>
  )
}