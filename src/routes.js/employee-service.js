const db = require('knex');

const EmployeeService = {
  getAll(db) {
    return db.from('employee').select('employee.id', '');
  },
};
