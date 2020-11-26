let plantHardinessZone = {};

const getZone = () => {
  return new Promise((resolve)=> {
    fetch('https://c0bra.api.stdlib.com/zipcode-to-hardiness-zone/?zipcode=78660')
      .then(res=>res.json())
      .then(response => {
        plantHardinessZone = response;
        // console.log(response)
        console.log(plantHardinessZone)
        resolve();
    })
    .catch(err => {
      console.error(err)
    })
  })
}

const displayZone = () => {
    console.log(plantHardinessZone.zone)
}

getZone()
    .then(displayZone)

// console.log("hello")

