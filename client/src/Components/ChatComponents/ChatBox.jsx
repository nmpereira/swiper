import ChatInput from "./ChatInput";

function ChatBox() {
  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <h3>Chat</h3>
      </div>
      <div className="chatbox-body">
        <div className="chatbox-body-messages">
          <div className="chatbox-body-message">
            <div className="chatbox-body-message-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>
          </div>
          <div className="chatbox-body-message">
            <div className="chatbox-body-message-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChatInput />
    </div>
  );
}

export default ChatBox;
