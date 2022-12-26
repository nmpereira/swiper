function ChatInput() {
  return (
    <div className="chat-input">
      <form>
        <input type="text" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatInput;
