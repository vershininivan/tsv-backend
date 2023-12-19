const express = require('express');
const router = express.Router();

module.exports = (api) =>
  router.post("/tracker/request", async (req, res, next) => {
    try {
      const { reason, qa, type, key, summary } = req.body;
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  });
