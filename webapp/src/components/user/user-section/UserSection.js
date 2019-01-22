import React from 'react'

import propTypes from 'prop-types'

import UserList from '../user-list/UserList'
import UserForm from '../user-form/UserForm'

class UserSection extends React.Component {
    render() {
        return (
            <div>
                <UserList users={this.props.users}/>
                <UserForm channel={this.props.channel} setUser={this.props.setUser} />
            </div>
        )
    }
}

UserSection.propTypes = {
    users: propTypes.array.isRequired,
    setUser: propTypes.func.isRequired,
}

export default UserSection