import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/Home'
import { CartPage } from './pages/Cart'
import { CompleteOrderPage } from './pages/CompleteOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/completeOrder" element={<CompleteOrderPage />}></Route>
      </Route>
    </Routes>
  )
}
