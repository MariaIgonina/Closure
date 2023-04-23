const myJSON = require ('./data/ach.json')

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
  
  async function postJSON (json) {
    json.forEach (async (trap) => {
      await postNewTrapInArray(trap)
    })
  };

  //postJSON(myJSON)