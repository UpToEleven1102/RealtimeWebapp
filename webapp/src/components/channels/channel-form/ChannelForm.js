import React from 'react'
import propTypes from 'prop-types'

import './style.css'

class ChannelForm extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        const channelName = this.refs.channel.value
        this.props.addChannel(channelName)
        this.refs.channel.value = ''
    }

    render() {
        return (
            <form className="ChannelForm" onSubmit={this.onSubmit.bind(this)}>
                <input ref='channel' type='text'/>
            </form>
        )
    }
}

ChannelForm.propTypes = {
    addChannel: propTypes.func.isRequired,
}

export default ChannelForm