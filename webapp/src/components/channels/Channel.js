 import React from 'react'
 import propTypes from 'prop-types'

 class Channel extends React.Component {
    onClick(e) {
        e.preventDefault()
        const {setChannel, channel} = this.props
        setChannel(channel)
    }

    render() {
        const {channel} = this.props
        return (
            <li>
                <a href='https://google.com' onClick={this.onClick.bind(this)}>
                    {channel.name}
                </a>
            </li>
        )
    }
 }

 Channel.propTypes = {
     channel: propTypes.object.isRequired,
     setChannel: propTypes.func.isRequired
 }

 export default Channel