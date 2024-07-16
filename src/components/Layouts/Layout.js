import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div className=' className=" bg-gradient-to-tr from-purple-200 via-white to-white"'>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout