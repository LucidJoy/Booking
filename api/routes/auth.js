import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("AUTH PAGE");
});

router.get("/register", (req, res) => {
  res.send("AUTHREG PAGE");
});

export default router;
