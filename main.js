let plantHardinessZone = {};

const getZone = () => {
  return new Promise((resolve)=> {
    fetch('https://phzmapi.org/78660.json')
      .then(res=>res.json())
      .then(response => {
        plantHardinessZone = response;
        console.log(response)
        console.log(plantHardinessZone)
        resolve();
    })
    .catch(err => {
      console.error(err)
    })
  })
}

getZone();
console.log("hello")
console.log(plantHardinessZone)