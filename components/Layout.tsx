import Navigation from './Navbar'
import React from 'react';
const Layout:({children}: { children: any }) => (JSX.Element) = ({ children })=> {
    return (
      <>
        <Navigation />
        <main>{children}</main>
        
      </>
    )
  }

  export default Layout