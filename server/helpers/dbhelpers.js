const Chats = require("../models/chat");

const readFromDb = async ({
  key = undefined,
  value = undefined,
  collection = undefined,
}) => {
  console.log("Read from DB", key, value, collection);
  if (!collection) {
    throw new Error("No db collection provided");
  }
  try {
    if (key && value) {
      return await collection.findOne({ [key]: value });
    } else {
      return await collection.find();
    }
  } catch (err) {
    throw new Error("Error reading from db", err);
  }
};

const getMessages = async ({ userid, otherUser, collection = Chats }) => {
  try {
    const query = { userid, otherUser };

    const result = await collection.aggregate([{ $match: { ...query } }]);
    return result;
  } catch (err) {
    console.log("err", err);
    throw new Error("Error retrieving messages", err);
  }
};

const writeMessageToDb = async ({
  collection = undefined,
  userid,
  otherUser,
  primary,
  message,
  createdAt,
  messaggeId,
}) => {
  if (!collection) {
    throw new Error("No db collection provided");
  }
  try {
    const query = { userid, otherUser, messaggeId };
    const updatedAt = Date.now();
    const update = {
      $set: {
        userid: userid,
        otherUser: otherUser,
        primary,
        message,
        createdAt,
      },
      updatedAt,
    };
    return await collection.findOneAndUpdate(query, update, { upsert: true });
  } catch (err) {
    throw new Error("Error writing to db", err);
  }
};

module.exports = { readFromDb, writeMessageToDb, getMessages };
