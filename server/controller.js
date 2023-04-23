const Trap = require('./model/schema');

const controller = {};

controller.getBasin = async function(req, res) {
  try{
    const basin = req.params.basin
    const traps = await Trap.findAll({
      where: { basin }
    });
    res.send(traps);
    res.status(200);
  } catch (err) {
    res.status(400);
    console.log(err);
  };
};

controller.getFormation = async function(req, res) {
  try{
    const formation = req.params.formation
    const traps = await Trap.findAll({
      where: { formation }
    });
    res.send(traps);
    res.status(200);
  } catch (err) {
    res.status(400);
    console.log(err);
  };
};

controller.getHorizon = async function(req, res) {
  try{
    const horizon = req.params.horizon
    const traps = await Trap.findAll({
      where: { horizon }
    });
    res.send(traps);
    res.status(200);
  } catch (err) {
    res.status(400);
    console.log(err);
  };
};

controller.postNewTrap = async function (req, res) {
  try{
    const { 
      name, 
      basin,
      formation,
      horizon,
      reservoir,
      depth,
      lat,
      long,
      square,
      heff,
      porosity,
      saturation,
      density,
      volumefactor,
      notes,
      contact
    } = req.body
    const newTrap = await Trap.create({ 
      name, 
      basin,
      formation,
      horizon,
      reservoir,
      depth,
      lat,
      long,
      square,
      heff,
      porosity,
      saturation,
      density,
      volumefactor,
      notes,
      contact 
    });
    res.status(200);
    res.send('Your data is in DB');
  } catch (err) {
    res.status(400);
    console.log(err);
  };
};

module.exports = controller;