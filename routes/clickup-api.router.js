const express = require("express");
const router = express.Router();

const authController = require("../controller/auth.controller");
const clickUpController = require("../controller/clickup-api.controller");

router.post('/check', authController.authenticate);
router.post('/tasks', clickUpController.getLists);

router.get('/overdue-card', clickUpController.getOverdueCard);
router.get('/upcoming-card', clickUpController.getUpcomingCard);
router.get('/project-card', clickUpController.getProjectCard);
router.get('/workload', clickUpController.getWorkLoadCard);
router.get('/customer-count', clickUpController.getCustomerDetails)

module.exports = router;