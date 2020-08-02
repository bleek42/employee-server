const express = require('express');

const logger = require('./middleware/logger');
const EmployeeService = require('./employee-service');

const employeeRouter = express.Router();
employeeRouter.use(express.json());

employeeRouter.get('/employee', async (req, res, next) => {
  try {
    const employees = await EmployeeService.getAll(req.app.get('db'));
    if (!employees) {
      res.status(400).json({
        error: 'Cannot GET employees!',
      });
      res.status(200).json({ employees });
      next();
    }
  } catch (err) {
    next(err);
  }
});

module.exports = employeeRouter;
