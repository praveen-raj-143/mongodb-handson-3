const express = require("express");
const employeecontrol=require("../Controller/employee")
const router = express.Router();

router.post('/employee', employeecontrol.adddetails);
router.get('/employee', employeecontrol.finddetails);
router.put('/employee', employeecontrol.updatesalary);
router.delete('/employee', employeecontrol.deletedetails);


module.exports = router;