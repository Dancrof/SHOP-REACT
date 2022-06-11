import React, { useRef } from 'react'
import Page from './Page'

function Header() {
  
  const activeMenu = useRef(null);

  const handleActiveMenu = () => {
    activeMenu.current.classList.toggle('menuActive')
  }

    return (
        <Page 
            setActiveMenu={activeMenu}
            setHandleActiveMenu={handleActiveMenu}
        />
  )
}

export default Header