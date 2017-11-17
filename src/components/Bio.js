import React from 'react'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './pm.jpg'
import {rhythm} from '../utils/typography'

class Bio extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    marginBottom: rhythm(2.5),
                }}
            >
                <img
                    src={profilePic}
                    alt={`Patrik Mihalcin`}
                    style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        width: rhythm(2.2),
                        height: rhythm(3),
                    }}
                />
                <p>
                    Written by <strong>Patrik Mihalcin</strong> who lives and works in Prague.
                    <br/>
                    <br/>
                    Check out <a href="http://mihalc.in/">mihalc.in</a>
                </p>
            </div>
        )
    }
}

export default Bio
