import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from '../pages/Home'
import { NewPlate } from '../pages/NewPlate'
import { Preview } from '../pages/Preview'
import { EditPlate } from '../pages/EditPlate'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/new" element={<NewPlate />}/>
      <Route path="/details/:id" element={<Preview />}/>
      <Route path="/edit/:id" element={<EditPlate />}/>
      <Route path="*" element={<Navigate to='/'/>}/>
    </Routes>
  )
}