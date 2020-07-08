// Initial function to set up page
function init () {
    //read in data file
    const dataFile = "samples.json";
    d3.json(dataFile).then(data => {
        // sanity check
        // console.log(data);

        // save subject ids as variable
        var subjectIDs = data.names;
        // console.log(typeof(subjectIDs));

        // select dropdown menu
        var dropdownMenu = d3.select('#selDataset');
        //iterate through subject id list to add choices to the dropdown menu
        subjectIDs.forEach(i => {
            // console.log(i);
            var menuOption = dropdownMenu.append('option');
            menuOption.text(i).property('value', i);
        });
        buildPlot(subjectIDs[0]);
    });
}

function buildPlot(sample) {
    // console.log(sample);
    //read in data file
    const dataFile = "samples.json";
    d3.json(dataFile).then(data => {
        // console.log(data);

        var filteredData = data.samples.filter(d => d.id == sample);
        // console.log(filteredData[0].otu_ids);

        var filteredMeta = data.metadata.filter(d => d.id == sample);
        // console.log(filteredMeta);

        // save OTU IDs as a variable
        var otuIDs = filteredData[0].otu_ids.slice(0,10);
        var otuIDstring = otuIDs.map(id => `OTU ${id}`);
        // console.log(otuIDstring);
        // save sample values as a variable
        var sampleValues = filteredData[0].sample_values.slice(0,10);
        // console.log(sampleValues);
        // save OTU labels as a variable
        var otuLabels = filteredData[0].otu_labels.slice(0,10);
        // console.log(otuLabels);
        
        //build metadata table
        var panel = d3.select('#sample-metadata');
        panel.html("")
        //add row for each key:value pair
        Object.entries(filteredMeta[0]).forEach(([key, value]) => {
            panel.append('p').text(`${key}: ${value}`);
        });

        //create trace for bar plot
        var trace1 = {
            type: 'bar',
            x: sampleValues.reverse(),
            y: otuIDstring.reverse(),
            orientation: 'h',
            text: otuLabels.reverse()
        };
        //create layout for bar plot
        var layoutBar = {
            title: 'Top 10 OTUs',
            xaxis: {
                title: 'Sample Values'
            },
            yaxis: {
                title: 'OTU IDs'
            },
        }

        //create trace for bubble plot
        var trace2 = {
            x: otuIDs,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: {
                size: sampleValues,
                color: otuIDs,
                colorscale: 'spectral'
            }
        }
        //create layout for bubble plot
        var layoutBubble = {
            title: "Bacteria Count per OTU",
            xaxis: {
                title: "OTU IDs"
            },
            yaxis: {
                title: "Bacteria Count"
            }
        }

        var dataBar = [trace1];
        var dataBubble = [trace2];
        
        Plotly.newPlot('bar', dataBar, layoutBar);
        Plotly.newPlot('bubble', dataBubble, layoutBubble);
    });
};

function optionChanged(newID) {
    buildPlot(newID);
}

init();