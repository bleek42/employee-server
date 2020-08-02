const db = require('knex');

const EmployeeService = {
  getAll(db) {
    return db
      .from('employee')
      .select(
        'employee.id',
        'employee.name',
        'employee.age',
        'employee.address',
        'employee.city',
        'employee.phone',
        'employee.department'
      );
  },
};

module.exports = EmployeeService;
