// // Read in json file
// function metaData(sample) {
//     const dataFile = "samples.json";
//     d3.json(dataFile).then(function(data) {
//         console.log(data);
//     });
// }

//Read in json file
function metadata(sample) {
    const belly = "samples.json";
    d3.json(belly).then(function(data) {
        console.log(data);
    });
};