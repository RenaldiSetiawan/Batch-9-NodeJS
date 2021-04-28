import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import './main.css'
import Sidebar from './Sidebar'

const MainLayout = () => {
    return (
        <div id="container">
            <Header/>
            <Sidebar/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default MainLayout;