import React from 'react'
import {Link} from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <hr/>
            <button>
                <h3>
                    <Link to={'users'}>
                        Users List
                    </Link>
                </h3>
            </button>
        </div>
    )
}

export default MainPage