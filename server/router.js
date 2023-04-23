const express = require('express');
const router = express.Router();
const controller = require ('./controller');

router.get('/traps/basin/:basin', controller.getBasin)
router.get('/traps/formation/:formation', controller.getFormation);
router.get('/traps/horizon/:horizon', controller.getHorizon);
router.post('/traps', controller.postNewTrap);

module.exports = router;