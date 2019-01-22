import React from 'react'
import propTypes from 'prop-types'

class MessageForm extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        this.props.addMessage(this.refs.message.value)
        this.refs.message.value = ''
    }

    render() {
        return (<form onSubmit={this.onSubmit.bind(this)}>
            <input ref='message' type='text'/>
        </form>)
    }
}

MessageForm.propTypes = {
    addMessage: propTypes.func.isRequired,
}

export default MessageForm