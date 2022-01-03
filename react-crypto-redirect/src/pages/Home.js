import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../components/Search'
import './Home.css'

function Home() {
    return (
        <>
            <div className="logo-image-container">
                <Link to="/"><img src="https://miro.medium.com/max/682/1*Lu8jocDsTvPiwOuOzgtScg.jpeg" alt="rabbit-logo"/></Link>
            </div>
            <div className="header">
                <h1 className="color">Search The Cryptocurrency Coins</h1>
            </div>

            <Search/>
        </>
    )
}

export default Home
