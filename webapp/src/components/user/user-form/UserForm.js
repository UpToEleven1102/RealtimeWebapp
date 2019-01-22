import React from 'react'

import propTypes from 'prop-types'

class UserForm extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        this.props.setUser(this.refs.userName.value)
        this.refs.userName.value = ''
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)} >
                <input ref='userName' type='text'/>
            </form>
        )
    }
}

UserForm.propTypes = {
    setUser: propTypes.func.isRequired,
}

export default UserForm