// Read in samples.json
// const samples = "samples.json";

d3.json('samples.json').then(sampledata => {
    console.log(sampledata.samples)});

// d3.json(samples).then(function(data) {
//     console.log(data);

//     var sampleValues = samples.samples.sample_values;
//     var otuIDs = samples.samples.otu_ids;
//     var otuLabels = samples.samples.otu_labels;
// });

function init() {

    // function for initial table - grab tag 
    var tableTag = d3.select("#sample-metadata");
    var barTag = d3.select("#bar");
    var gaugeTag = d3.select("#gauge");
    var bubbleTag = d3.select("#bubble");
}

function updatePlotly() {
    //select dropdown menu from html
    var dropdownMenu = d3.select("#selDataset");
    // assign the value of the dropdown menu option to a variable
    var subjectID = dropdownwMenu.property("value");
}


// document not reading in
// onchange this.value
// top 10 otus - how is this determined?
// forEach to pull each id's data?
// index [0-11] for top ten OTUs?
// are we supposed to have ALL ids on the dropdown menu?