import React from 'react'
import propTypes from 'prop-types'

import User from '../user/User'

class UserList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.users.map(user => <li><User user={user}/></li>)}
            </ul>
        )
    }
}

UserList.propTypes = {
    users: propTypes.array.isRequired,
}

export default UserList