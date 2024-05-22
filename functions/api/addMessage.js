require("dotenv").config({path: "../.env"});

// const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const {logger} = functions;


exports.addMessage =async (req, res) => {
  try {
    console.log("Request Headers:", req.headers);
    console.log("Request Body:", req.body);
    const data = req.body;
    console.log("Received message request data: ", data);

    // Validate require fields
    if (!data || !data.text || !data.userId) {
      console.log("Required fields {text or userId} are missing");
      return res.status(400).send({
        error: "Required fields {text or userId} are missing",
      });
    }

    const {text, userId} = data;

    const messageData = {
      text,
      userId,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Add message to the user's message subcollection in firestore
    const messageRef = await admin
        .firestore()
        .collection("chats")
        .doc(userId)
        .collection("messages")
        .add(messageData);

    console.log("Message added successfully, message ID:", messageRef.id);

    // Return success status and message ID
    return res.status(200).send({status: "success", messageID: messageRef.id});
  } catch (error) {
    console.error("Error adding message: ", error);
    return res.status(500).send({
      error: "An error occurred while adding the message",
      details: error.message,
    });
  }
};
