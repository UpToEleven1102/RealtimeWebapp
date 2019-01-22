import React, { Component } from 'react';
import ChannelSection from './components/channels/channel-section/ChannelSection'
import UserSection from './components/user/user-section/UserSection'

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
    this.setState({ channels: [...this.state.channels, { id: this.state.channels.length, name }] })
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
      this.setState({ users: [...this.state.users, user], user})
    }
  }

  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
