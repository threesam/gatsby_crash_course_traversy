import React from 'react'

import gif from '../images/eatyoursprouts.gif'
import './blog.css'

const blogHeader = () => {
    return (
        <div style={{
            display: `relative`,
            width: `100vw`,
            paddingTop: `0.73rem`,
            paddingBottom: `0`,
            marginLeft: `-1.1rem`,
            marginTop: `-1.45rem`,
            marginBottom: `1.45rem`,
            backgroundColor: `rgba(0, 0,0, 0.9)`,
            color: `white`
        }}>
            <h1 style={{
                marginLeft: `0.73rem`
            }}>Latest Posts</h1>
            <img style={{ margin: `0`, padding: `0` }} className="fadeIn" src={gif} alt="eat your sprouts" />
        </div>
    )
}

export default blogHeader
