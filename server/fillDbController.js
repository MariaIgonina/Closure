const myJSON = require ('./data/Ach+.json')

const Trap = require('./model/schema');

const controllerDb = {}

async function postNewTrapInArray (el) {
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
    } = el
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
  };


  controllerDb.postJSON = async function () {
    myJSON.forEach (async (trap) => {
      await postNewTrapInArray(trap)
    })
  };


  controllerDb.deleteEverything = async function (req, res) {
  await Trap.destroy({ truncate: true, cascade: true }) 
    .then(() => {
      res.status = 201
      res.send('DB deleted')
      console.log('All records deleted successfully');
    })
    .catch((err) => {
      console.error('Error deleting records:', err);
    });
}

module.exports = controllerDb