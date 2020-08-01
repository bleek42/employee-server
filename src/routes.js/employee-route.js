const express = require('express');

const employeeRouter = express.Router();

employeeRouter.route('/employee').get(async(req, res, next) => {
  try {
    const employees = await;
  } catch(err) {
    console.error(err);
  }
})