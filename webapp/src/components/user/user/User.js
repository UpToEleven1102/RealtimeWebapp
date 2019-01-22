import React from 'react'
import propTypes from 'prop-types'

class User extends React.Component {
    render() {
        return (
            <a href="https://facebook.com">{this.props.user.name}</a>
        )
    }
}

User.propTypes = {
    user: propTypes.object.isRequired,
}

export default User