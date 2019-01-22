import React from 'react'
import Channel from './Channel'
import propTypes from 'prop-types'

class ChannelList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.channels.map(chan => <Channel channel={chan} setChannel={this.props.setChannel}/>)}
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: propTypes.array.isRequired,
    setChannel: propTypes.func.isRequired,
}

export default ChannelList