//Define function for metadata panel containing demographic info
//Read in json file
function metadata(sample) {
    const belly = "samples.json";
    d3.json(belly).then(function(data) {
        console.log(data);
// Select metadata panel, add code to reset page, and add key value data to panel
    var mdPanel = d3.select("#sample-metadata");
    mdPanel.html("");
    Object.entries(data).forEach(function([key, value]) {
        var text = key + ":" + value;
        mdPanel.append("p").text(text);
    });
});
}
// Build function to retrieve data for plots and build plots
function buildCharts (sample) {
    const belly = "samples.json";
    d3.json(belly).then(function(sample){
        var sampleValues = sample.sample_values;
        var otuIDs = sample.otu_ids;
        var otuLabels = sample.otu_labels;
    
    //Slice the top 10 sample values for each individual for bar chart
    
    var dataSlice = sample.sort((a,b) => b.sample_values - a.sample_values);
    var slicedData = dataSlice.slice(0, 10);
    var dataOtu = sample.sort((a,b) => b.otu_ids - a.otu_ids);
    var slicedOtuID = dataOtu.slice(0, 10);
    var barData = [{
        x: slicedData.map(object => object.sampleValues),
        y: slicedOtuID.map(object => object.otuIDs),
        text: otuLabels,
        orientation: "h",
        type: "bar"
    }]
    Plotly.newPlot("bar", barData);
    })
  
}
buildCharts();
