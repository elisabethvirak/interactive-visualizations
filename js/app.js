// Initial function to set up page
function init () {
    //read in data file
    const dataFile = "samples.json";
    d3.json(dataFile).then(data => {
        // sanity check
        // console.log(data);

        // collect variables to be used later on
        // save metadata to be used in demographic info
        var metadata = data.metadata[0];
        // console.log(metadata);
        // save subject ids as variable
        var subjectIDs = data.names;
        // console.log(subjectIDs);
        // save OTU IDs as a variable
        var otuIDs = data.samples[0].otu_ids;
        // console.log(otuIDs);
        // save sample values as a variable
        var sampleValues = data.samples[0].sample_values;
        // console.log(sampleValues);
        // save OTU labels as a variable
        var otuLabels = data.samples[0].otu_labels;
        // console.log(otuLabels);

        // select dropdown menu
        var dropdownMenu = d3.select('#selDataset');
        //iterate through subject id list to add choices to the dropdown menu
        subjectIDs.forEach(i => {
            // console.log(i);
            var menuOption = dropdownMenu.append('option');
            menuOption.text(i).property('value');
        });

        // clear webpage so no option is selected
        // dropdownMenu.html("");

        // datanames.forEach((name) =>
        //     selector.append('option'),text(name).property('value',name))
    });
};

init();