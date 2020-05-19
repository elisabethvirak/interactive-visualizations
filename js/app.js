// // Read in json file
// function metaData(sample) {
//     const dataFile = "samples.json";
//     d3.json(dataFile).then(function(data) {
//         console.log(data);
//     });
}
// // Create outer function to change
// function dropdownMenu(id) {
//     // select id where the dropdown menu is located
//     var dropdownMenu = d3.select('#selDataset');
//     // clear data previously printed to page
//     dropdownMenu.html("");
//     // provide all IDs as options in the dropdown menu
//     d3.json(samples).forEach(function(id) {
//         var subjectID = id.names;
//         dropdownMenu.append('p').text(subjectID);
//     });
// }

function init (i) {
    //read in data file
    const dataFile = "samples.json";
    d3.json(dataFile).then(function(data) {
        // sanity check
        console.log(data);

        // collect variables to be used later on
        // save metadata to be used in demographic info
        var metadata = data.metadata[i];
        // save subject ids as variable
        var subjectIDs = data.names;
        // save OTU IDs as a variable
        var otuIDs = data.samples[i].otu_ids;
        // save sample values as a variable
        var sampleValues = data.samples[i].sample_values;
        // save OTU labels as a variable
        var otuLabels = data.samples[i].otu_labels;

        // select dropdown menu
        var dropdownMenu = d3.select('#selDataset');
        //iterate through subject id list to add choices to the dropdown menu
        for (i in subjectIDs) {
            var menuOption = dropdownMenu.append('option')
            menuOption.text(subjectIDs[i]);
        }

        // datanames.forEach((name) =>
        //     selector.append('option'),text(name).property('value',name))
    });
};

init(0);