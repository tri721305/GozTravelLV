// const router = require("express").Router();
import express from "express";
import {
  me,
  fetchUserById,
  fetchRecommandedUsers,
  fetchSendedFriendRequest,
  fetchIncommingFriendRequest,
  searchUsers,
} from "../controllers/User/FetchUser.js";

import {
  sendMessageToFriend,
  getFriendMessages,
} from "../controllers/User/Chat.js";
import {
  sendFriendRequest,
  acceptFriendRequest,
  declineFriendRequest,
  cancelSendedFriendRequest,
  updateProfilePic,
  updateCoverPic,
  updateProfile,
  clearNotification,
} from "../controllers/User/UserAction.js";
import auth from "../middleware/auth.js";
const router = express.Router();
router.get("/me", auth, me);
router.get("/recommanded_users", auth, fetchRecommandedUsers);
router.get("/friend_request/sended", auth, fetchSendedFriendRequest);
router.get("/friend_request/received", auth, fetchIncommingFriendRequest);

router.get("/search", searchUsers);
router.get("/friend_request/:userId/send", auth, sendFriendRequest);
router.get("/friend_request/:requestId/accept", auth, acceptFriendRequest);
router.get("/friend_request/:requestId/decline", auth, declineFriendRequest);
router.get(
  "/friend_request/:requestId/cancel",
  auth,
  cancelSendedFriendRequest
);
router.get("/:user_id", auth, fetchUserById);

router.post("/chat/:friendId/send", auth, sendMessageToFriend);
router.get("/chat/:friendId/get_messages", auth, getFriendMessages);

router.put("/profile_pic/update", auth, updateProfilePic);
router.put("/cover_pic/update", auth, updateCoverPic);
router.put("/update_profile/:input", auth, updateProfile);
router.delete("/notifications/clear", auth, clearNotification);

export default router;
