const express = require('express');

const logger = require('./middleware/logger');
const EmployeeService = require('./employee-service');

const employeeRouter = express.Router();

employeeRouter.route('/employee').get(async (req, res, next) => {
  try {
    const employees = await EmployeeService.getAll();
    if (!employees) {
      res.status(400).json({
        error: 'Cannot GET employees!',
      });
      return res.status(200).json({});
    }
  } catch (err) {
    console.error(err);
  }
});
