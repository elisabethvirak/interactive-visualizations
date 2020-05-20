// Initial function to set up page
function init () {
    //read in data file
    const dataFile = "samples.json";
    d3.json(dataFile).then(data => {
        // sanity check
        // console.log(data);

        // save subject ids as variable
        var subjectIDs = data.names;
        // console.log(subjectIDs);

        // select dropdown menu
        var dropdownMenu = d3.select('#selDataset');
        //iterate through subject id list to add choices to the dropdown menu
        subjectIDs.forEach(i => {
            // console.log(i);
            var menuOption = dropdownMenu.append('option');
            menuOption.text(i).property('value');
        });
        buildPlot(subjectIDs[0]);
    });
}

function buildPlot(sample) {
    //read in data file
    const dataFile = "samples.json";
    d3.json(dataFile).then(data => {
        // console.log(sample);
        // save metadata to be used in demographic info
        var metadata = data.metadata[sample-940];
        // console.log(metadata);
        // save OTU IDs as a variable
        var otuIDs = data.samples[sample-940].otu_ids;
        console.log(otuIDs);
        // save sample values as a variable
        var sampleValues = data.samples[sample-940].sample_values;
        console.log(sampleValues);
        // save OTU labels as a variable
        var otuLabels = data.samples[sample-940].otu_labels;
        console.log(otuLabels);

    });
}

init();