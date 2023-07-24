// app.js
// Load data from samples.json and create the visualizations

// Function to initialize the dashboard
function init() {
    // Use D3 to fetch the samples.json data
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        // Populate the dropdown menu with sample IDs
        var dropdown = d3.select("#selDataset");
        data.names.forEach((name) => {
            dropdown.append("option").text(name).property("value", name);
        });

        // Initialize the dashboard with the first sample
        var initialSample = data.names[0];
        buildCharts(initialSample);
        buildMetadata(initialSample);
    });
}

// Function to build the bar and bubble charts
function buildCharts(sample) {
    // Use D3 to fetch the samples.json data
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id === sample);
        var result = resultArray[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        // Create a horizontal bar chart
        var barData = [{
            type: 'bar',
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            orientation: 'h'
        }];

        var barLayout = {
            title: "Top 10 OTUs Found in the Individual",
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU ID" }
        };

        Plotly.newPlot('bar', barData, barLayout);

        // Create a bubble chart
        var bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        }];

        var bubbleLayout = {
            title: "Microbial Species in the Individual",
            xaxis: { title: "OTU ID" },
            yaxis: { title: "Sample Values" }
        };

        Plotly.newPlot('bubble', bubbleData, bubbleLayout);

        // Optional: Create a gauge chart for weekly washing frequency
        var metadata = data.metadata;
        var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var metadataResult = metadataArray[0];
        var washingFrequency = metadataResult.wfreq;

        var gaugeData = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: washingFrequency,
            title: { text: "Weekly Washing Frequency" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 9] },
                steps: [
                    { range: [0, 1], color: "#f2f2f2" },
                    { range: [1, 2], color: "#e6e6e6" },
                    { range: [2, 3], color: "#cccccc" },
                    { range: [3, 4], color: "#b3b3b3" },
                    { range: [4, 5], color: "#999999" },
                    { range: [5, 6], color: "#808080" },
                    { range: [6, 7], color: "#666666" },
                    { range: [7, 8], color: "#4d4d4d" },
                    { range: [8, 9], color: "#333333" }
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: washingFrequency
                }
            }
        }];

        var gaugeLayout = {
            width: 500,
            height: 400,
            margin: { t: 0, b: 0 }
        };

        Plotly.newPlot('gauge', gaugeData, gaugeLayout);
    });
}

// Function to display sample metadata
function buildMetadata(sample) {
    // Use D3 to fetch the samples.json data
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];

        // Clear any existing metadata
        var metadataDiv = d3.select("#sample-metadata");
        metadataDiv.html("");

        // Append each key-value pair from the metadata JSON object to the metadataDiv
        Object.entries(result).forEach(([key, value]) => {
            metadataDiv.append("p").text(`${key}: ${value}`);
        });
    });
}

// Function to handle change in sample selection
function optionChanged(newSample) {
    buildCharts(newSample);
    buildMetadata(newSample);
}

// Initialize the dashboard
init();
