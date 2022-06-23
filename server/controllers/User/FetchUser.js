import User from "../../models/user.js";
import Notification from "../../models/notification.js";
import FriendRequest from "../../models/friendrequest.js";
import { FilterUserData } from "../../utils/FilterUserData.js";
// import User from "../../models/user.js";

export const fetchUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id).populate("friends");
    const userData = FilterUserData(user);

    res.status(200).json({ user: userData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const fetchRecommandedUsers = async (req, res) => {
  try {
    const users = await User.find()
      .where("_id")
      .ne(req.userId)
      .populate("friend");

    const usersData = users.map((user) => {
      return FilterUserData(user);
    });

    res.status(200).json({ users: usersData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const me = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("friends");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userData = FilterUserData(user);

    const friends = user.friends.map((friend) => {
      return {
        ...FilterUserData(friend),
      };
    });

    userData.friends = friends;

    const notifications = await Notification.find({ user: req.userId }).sort({
      createdAt: -1,
    });

    let notifData = notifications.map((notif) => {
      return {
        id: notif.id,
        body: notif.body,
        createdAt: notif.createAt,
      };
    });

    res.status(200).json({
      user: userData,
      notifications: notifData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const fetchIncommingFriendRequest = async (req, res) => {
  try {
    const friends = await FriendRequest.find({
      $and: [{ isAccept: false }, { receiver: req.userId }],
    }).populate("sender", "_id name profile_pic active");

    const friendsData = friends.map((friend) => {
      return {
        id: friend.id,
        user: FilterUserData(friend.sender),
      };
    });

    res.status(200).json({ friends: friendsData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const fetchSendedFriendRequest = async (req, res) => {
  try {
    const friends = await FriendRequest.find({
      $and: [{ isAccept: false }, { sender: req.userId }],
    }).populate("receiver");

    const friendsData = friends.map((friend) => {
      return {
        id: friend.id,
        user: FilterUserData(friend.receiver),
      };
    });

    res.status(200).json({ friends: friendsData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const searchUsers = async (req, res) => {
  try {
    const users = await User.find({
      // name: { $regex: req.query.name, $option: "i" },
      name: new RegExp(req.query.name, "i"),
      // name: { /req.query.name/'i' },
    }).populate("friends");

    const usersData = users.map((user) => FilterUserData(user));

    res.status(200).json({ users: usersData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
