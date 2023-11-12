const express = require('express')
const router = express.Router()
const data  = {}
data.employee = require('employees.json')
const employeesControl = require('employeesControl')
const ROLES_LIST = require('roles_list')
const verifyroles = require('verifyRoles')

router
  .route("/")

  .get(employeesControl.getAllEmployees)
  .post(employeesControl.createNewEmployee)
  .put( employeesControl.updateEmployee)
  .delete(employeesControl.deleteEmployee);

router.route("/:id")
    .get(employeesControl.getEmployee)


    module.exports = router;
