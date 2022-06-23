// const Notification = require("../models/Notification")
import Notification from "../models/notification.js";

export const CreateNotification = async ({ user, body }) => {
  const notification = new Notification({ user, body });
  const saveNotification = await notification.save();
  return {
    id: saveNotification.id,
    body,
    createdAt: notification.createdAt,
  };
};
