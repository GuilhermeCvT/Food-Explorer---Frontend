import { Container, Logo, MobileHeader, DesktopHeader, Sidebar } from "./styles";
import { Button } from '../Button'
import { Input } from '../Input'
import { FiSearch, FiLogOut, FiMenu, FiX } from 'react-icons/fi'
import { PiReceiptBold } from "react-icons/pi";
import logo from '../../assets/Polygon 1.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth'

export function Header({onChange}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <Container>
      <DesktopHeader>
        <Logo>
          <img src={logo} alt="" />
          <span>food explorer</span>
        </Logo>
        
        <Input icon={FiSearch} placeholder='Busque por pratos ou ingredientes' type='text' onChange={onChange}/>
        
        {
          (user.position == 'Admin' ? 
            <Button title='Novo prato' onClick={() => navigate('/new')}/>
            :
            <Button $icon={PiReceiptBold} title='Pedidos'/>
          )
        }

        <a onClick={handleSignOut}><FiLogOut /></a>
      </DesktopHeader>

      <MobileHeader>
        <FiMenu onClick={() => setMenuIsOpen(true)}/>

        <Logo>
          <img src={logo} alt="" />
          <span>food explorer</span>
        </Logo>

        <Button $icon={PiReceiptBold}/>
      </MobileHeader>

      <Sidebar data-menu-is-open={menuIsOpen}>
        <div className="button-menu">
          <button onClick={() => setMenuIsOpen(false)}>
            <FiX /> Menu
          </button>
        </div>

        <div className="body-menu">
          <Input icon={FiSearch} placeholder='Busque por pratos ou ingredientes' type='text' onChange={onChange}/>

          {
            (user.position == 'Admin' ? 
              <>
                <a onClick={() => navigate('/new')}>Novo prato</a>
                <div className="line-div"></div>
              </>
              :
              <></>
            )
          }
          <a onClick={handleSignOut}>Sair</a>
          <div className="line-div"></div>
        </div>
      </Sidebar>
    </Container>
  )
}