# PSh-Game Statistics

PSh-Game is an online game with thousands of participants worldwide. This project simulates player match statistics, generates web reports of top players, and includes features for automatic updates and data export.

## Features

- **Simulated Game Statistics**: Randomly generate and insert player match statistics into a MySQL database.
- **Cron Job**: Automatically insert new statistics every 5 minutes.
- **Web Report**: Display the top 10 best scores of all time and the last update time.
- **Live Updates**: Refresh the report every 10 seconds without reloading the page.
- **CSV Export**: Download the report as a CSV file with the click of a button.

## Technology Stack

- **Backend**: Node.js, Express, MySQL
- **Frontend**: React, Tailwind CSS
- **Data Fetching**: Axios
- **Random Data Generation**: [RandomUser API](https://randomuser.me/api)
- **Scheduler**: Node Cron