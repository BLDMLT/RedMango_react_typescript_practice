import React, { useEffect, useState } from 'react'
import { Footer, Header } from '../Components/Layout'
import { Home, Login, MenuItemDetails, NotFound, Register, ShoppingCart } from '../Pages'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice'
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi'

function App() {
  const dispatch = useDispatch()

  const { data, isLoading } = useGetShoppingCartQuery('5c3d70f8-af11-49ca-891f-01d33ec3511d')
  useEffect(() => {
    if (!isLoading) {
      console.log('result', data.result)
      dispatch(setShoppingCart(data.result?.cartItems))
    }
  }, [data])
  return (
    <div className="text-success">
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menuItemDetails/:menuItemId" element={<MenuItemDetails />}></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
