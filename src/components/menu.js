import React from 'react'
import { Link } from 'gatsby'

const menu = () => (
    <div style={{
        background: '#f4f4f4',
    }}>
        <ul style={{
            listStyle: 'none',
            width: `100%`,
            height: `2rem`,
            padding: `0 1rem`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '900'
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>

    </div>
)


export default menu
