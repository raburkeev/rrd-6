import React from 'react'
import {useParams, Link, Outlet} from 'react-router-dom'

const UserPage = () => {
    const {userId, edit} = useParams()

    return edit === 'edit' ? <Outlet/> : (
        <div>
            <h1>User Page</h1>
            <hr/>
            <div>
                <button>
                    <h3>
                        <Link to={'/users'}>Users List</Link>
                    </h3>
                </button>
                <button>
                    <h3>
                        <Link to={`/users/${userId}/edit`}>Edit</Link>
                    </h3>
                </button>
            </div>
            <h3>User ID: {userId}</h3>
        </div>
    )
}

export default UserPage