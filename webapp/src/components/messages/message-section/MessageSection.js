import React from 'react'
import propTypes from 'prop-types'

import MessageForm from './message-form/MessageForm'


class MessageSection extends React.Component {
    render() {
        return <div>
            <div>
                {this.props.channel.name ? <p>{this.props.channel.name}</p> : <p>Select a channel</p>}
            </div>
            <div>
                <ul>
                    {this.props.channel.messages && this.props.channel.messages.map(message => (<li key={message.id}><div>
                        <div><p>{message.author}  {message.createdAt}</p></div>
                        <div>{message.message}</div>
                    </div></li>))}
                </ul>
            </div>
            <div>
                <MessageForm {...this.props} />
            </div>
        </div>
    }
}

MessageSection.propTypes = {
    addMessage: propTypes.func.isRequired,
    channel: propTypes.object.isRequired,
}

export default MessageSection