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
        var otuIDs = data.samples[sample-940].otu_ids.slice(0,10);
        var otuIDstring = otuIDs.map(id => `OTU ${id}`);
        console.log(otuIDstring);
        // save sample values as a variable
        var sampleValues = data.samples[sample-940].sample_values.slice(0,10);
        // console.log(sampleValues);
        // save OTU labels as a variable
        var otuLabels = data.samples[sample-940].otu_labels.slice(0,10);
        // console.log(otuLabels);
        
        //create trace for bar plot
        var trace1 = {
            type: 'bar',
            x: sampleValues.reverse(),
            y: otuIDstring.reverse(),
            orientation: 'h',
            text: otuLabels.reverse()
        };

        var data = [trace1];

        // var layout = {
        //     yaxis: {
        //         range:
        //     }
        // }
        
        Plotly.newPlot('bar', data);
    });
}

init();