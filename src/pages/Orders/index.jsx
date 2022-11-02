import {Container} from "./styles.js"

import { Header } from "../../components/Header"

import { Footer } from "../../components/Footer"

import { useState,useEffect } from "react"

import { api } from '../../services/api.js';

import { useParams } from "react-router-dom";


export function Orders(){
  const params = useParams()
  const [orders,setOrders] = useState([])
  const colors = {
    Pendente:'red',
    Preparando:'yellow',
    Entregue:'green',
  }
  const [text,setText] = useState(false)
  useEffect(() => {

    async function fetchFoods(){
      console.log(params.number)
      if(params.number == 1 ){
        const response = await api.get(`/adminorders`);
        setOrders(response.data)
        setText(true)
      }else{
      const response = await api.get(`/orders`);
      setOrders(response.data)}
    }
    fetchFoods()
  },[])
  return(
    <Container>
      <Header/>
      <main>
        <h1>{text?'Pedidos de todos os clientes':'Pedidos'}</h1>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
              {text && <th>Id do cliente</th>}
            </tr>
          </thead>
          <tbody>
            {text ? orders.map(order =>{return (

                    <tr key={order.id}>
                      <td><div><span style={{backgroundColor: colors[order.order_status]}}></span>
                       {order.order_status}</div></td>
                      <td>{order.id}</td>
                      <td>{order.foods}</td>
                      <td>{order.created_at}</td>
                      <td>{order.client_id}</td>
                    </tr>
                    )} 
                  )

              :orders.map(order =>{return (

                <tr key={order.id}>
                  <td><div><span style={{backgroundColor: colors[order.order_status]}}></span> 
                  {order.order_status}</div></td>
                  <td>{order.id}</td>
                  <td>{order.foods}</td>
                  <td>{order.created_at}</td>
                </tr>
              )} 
              )
            }
             {/* <tr>
                  <td><div><span ></span> oi</div></td>
                  <td>oi</td>
                  <td>oi</td>
                  <td>oi</td>
                </tr> */}
             
          </tbody>
        </table>
      </main>
      <Footer/>
    </Container>
  )
};