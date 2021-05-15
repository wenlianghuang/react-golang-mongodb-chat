import React, { Component } from "react";
import "./Message.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp
    };
  }
  render() {
    return <div className="Message">{this.state.message.body}</div>;
  }
}

export default Message;

/*const Message = (testmessage) => {
  let message = JSON.parse(testmessage);
  return (<div className="Message">{message}</div>)
}
export default Message*/