const myJSON = require ('./data/Ach+.json')

const Trap = require('./model/schema');

const controllerDb = {}

controllerDb.postNewTrapInArray = async function (el) {
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
  async function postJSON (json) {
    json.forEach (async (trap) => {
      await postNewTrapInArray(trap)
    })
  };

  postJSON(myJSON)


  controllerDb.deleteEverything = async function () {
  await Trap.destroy({ truncate: true, cascade: true }) 
    .then(() => {
      console.log('All records deleted successfully');
    })
    .catch((err) => {
      console.error('Error deleting records:', err);
    });
}

module.exports = controllerDb