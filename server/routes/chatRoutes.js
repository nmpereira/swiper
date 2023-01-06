const express = require("express");
const router = express.Router();
const {
  writeMessageToDb,
  readFromDb,
  getMessages,
} = require("../helpers/dbhelpers");
const Chat = require("../models/chat");
const { v4: uuidv4 } = require("uuid");

router.get("/messages", async (req, res) => {
  const { userid, otherUser } = req.query;
  const query = { userid, otherUser };
  console.log("query", query);
  try {
    const result = await getMessages({ userid, otherUser, collection: Chat });
    res.status(200).json({
      message: "Messages retrieved!",
      data: result,
      query,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      message: "Error retrieving messages",
      error: err,
      data: result,
    });
  }
});

router.post("/messages", async (req, res) => {
  try {
    const { userid, otherUser, primary, message } = req.body;
    const messaggeId = uuidv4();

    const newMessage = {
      collection: Chat,
      userid,
      otherUser,
      primary,
      message,
      messaggeId,
    };
    console.log("newMessage", newMessage);

    const result = await writeMessageToDb(newMessage);

    res.status(200).json({
      message: "Message sent!",
      data: result,
      newMessage,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      message: "Error sending message",
      error: err,
      data: result,
    });
  }
});

module.exports = router;
