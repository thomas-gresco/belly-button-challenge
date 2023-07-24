# Belly Button Biodiversity Dashboard

This interactive dashboard allows users to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (operational taxonomic units or OTUs) were present in more than 70% of people, while the rest were relatively rare.

## Table of Contents
- [Introduction](#belly-button-biodiversity-dashboard)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

The Belly Button Biodiversity Dashboard includes the following features:

- A dropdown menu to select an individual sample from the dataset.
- A horizontal bar chart showing the top 10 OTUs found in the selected individual.
- A bubble chart displaying each sample with OTU IDs, sample values, and microbial species information.
- Display of sample metadata, providing demographic information about the selected individual.
- An optional gauge chart displaying the weekly washing frequency of the selected individual (ranging from 0 to 9).

## Usage

To use the Belly Button Biodiversity Dashboard, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Use the dropdown menu to select a sample ID from the dataset.
4. The bar chart, bubble chart, and metadata will update according to the selected sample.
5. If the optional gauge chart is included, it will also display the weekly washing frequency of the selected individual.

## Technologies Used

The Belly Button Biodiversity Dashboard is built using the following technologies:

- HTML: The structure of the web page.
- CSS: For styling and layout of the dashboard elements.
- JavaScript: To fetch data from the `samples.json` file and create the interactive visualizations.
- D3.js: A JavaScript library used for data visualization, used to read data and build charts.
- Plotly: A graphing library used to create the bar, bubble, and optional gauge charts.

## License

The Belly Button Biodiversity Dashboard is open-source software licensed under the [MIT License](LICENSE).

Feel free to use, modify, and distribute this code as per the terms of the license.
