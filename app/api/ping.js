const express = require("express");
const router = express.Router();

module.exports = () =>
  router.get("/ping", async (req, res, next) => {
    try {
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  });
