import React from 'react'
import propTypes from 'prop-types'
import ChannelList from '../ChannelList'
import ChannelForm from '../channel-form/ChannelForm'

import './style.css'

class ChannelSection extends React.Component {
    render() {
        const {addChannel} = this.props
        return (
            <div className="ChannelSection">
                <ChannelList {...this.props}/>
                <ChannelForm addChannel={addChannel}/>
            </div>
        )
    }
}

ChannelSection.propTypes = {
    channels: propTypes.array.isRequired,
    setChannel: propTypes.func.isRequired,
    addChannel: propTypes.func.isRequired,
}

export default ChannelSection