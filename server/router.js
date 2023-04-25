const express = require('express');
const router = express.Router();
const controller = require ('./controller');
const controllerDb = require ('./fillDbController')

// router.get('/traps/basin/:basin', controller.getBasin)
// router.get('/traps/formation/:formation', controller.getFormation);
// router.get('/traps/horizon/:horizon', controller.getHorizon);
// router.post('/traps', controller.postNewTrap);

router.delete('/traps/refresh', controllerDb.deleteEverything);
router.post('/traps/refresh', controllerDb.postJSON);

module.exports = router;