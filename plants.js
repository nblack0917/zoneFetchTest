// let plants = [

// ]

// class Plant {
//     constuctor
// }

let Plant = (type, group, variety, height, plantingDistance, sowDepth, sun, soil, moisture, daysToHarvest, diseases, pests, zone10Seed) => {
    this.type = type,
    this.group = group
    this.variety = variety
    this.height = height;
    this.plantingDistance = plantingDistance;
    this.sowDepth = sowDepth;
    this.sun = sun;
    this.soil = soil;
    this.moisture = moisture;
    this.daysToHarvest = daysToHarvest;
    this.diseases = diseases;
    this.pests = pests;
    this.zones = {
        10: [this.zone10Seed = zone10Seed, zone10Transplant],
        9: [zone9Seed, zone9Transplant],
        8: [zone8Seed, zone8Transplant],
        7: [zone7Seed, zone7Transplant],
        6: [zone6Seed, zone6Transplant],
        5: [zone5Seed, zone5Transplant],
        4: [zone4Seed, zone4Transplant],
        3: [zone3Seed, zone3Transplant]
    };
};

let beefsteak = new Plant("fruit", "tomato", "beefsteak", 24, 18, 0.5, "full sun", "loam", "High Moisture, well drained", 85, ["bloom-end rot", "etc"], ["aphids", "worms"], ["Jan 1", "July 15"])

console.log(beefsteak)