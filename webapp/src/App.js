import React, { Component } from 'react';
import ChannelSection from './components/channels/channel-section/ChannelSection'
import UserSection from './components/user/user-section/UserSection'
import MessageSection from './components/messages/message-section/MessageSection';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      user: null,
    }
  }

  addChannel(name) {
    this.setState({ channels: [...this.state.channels, { id: this.state.channels.length, name, messages: [] }] })
  }

  setChannel(channel) {
    this.setState({ activeChannel: channel })
  }

  setUser(userName) {
    if (this.state.user) {
      this.setState({
        user: { id: this.state.user.id, name: userName }, users: this.state.users.map(user => {
          if (user.id !== this.state.user.id)
            return user
          else
            return { id: user.id, name: userName }
        })
      })
    } else {
      const user = { id: this.state.users.length, name: userName }
      this.setState({ users: [...this.state.users, user], user })
    }
  }

  addMessage(message) {
    let createdAt = (new Date()).now;

    if (this.state.user) {
      this.setState({
        activeChannel: {
          ...this.state.activeChannel,
          messages: [...this.state.activeChannel.messages, { id: this.state.activeChannel.messages.length,author: this.state.user.name, createdAt, message: message }]
        }
      })
    }
  }

  render() {
    return (
      <div>
        <div style={{ width: '30%', display: 'inline-block' }}>
          <ChannelSection
            channels={this.state.channels}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
            activeChannel={this.state.activeChannel}
          />
          <UserSection
            users={this.state.users}
            setUser={this.setUser.bind(this)}
          />
        </div>
        <div style={{ width: '60%', display: 'inline-block' }}>
          <MessageSection channel={this.state.activeChannel} addMessage={this.addMessage.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
