import express from "express";

import auth from "../middleware/auth.js";
import {
  getPlans,
  getPlansBySearch,
  getPlan,
  createPlan,
  updatePlan,
  // likePlan,
  commentPlan,
  deletePlan,
} from "../controllers/plans.js";
const router = express.Router();

// import auth from "../middleware/auth.js";
router.get("/search", getPlansBySearch);

router.get("/", getPlans);
router.get("/:id", getPlan);

router.post("/", auth, createPlan);
router.patch("/:id", auth, updatePlan);
// router.patch("/:id/likePlan", auth, likePlan);
router.delete("/:id", auth, deletePlan);
router.post("/:id/commentPlan", auth, commentPlan);
export default router;
