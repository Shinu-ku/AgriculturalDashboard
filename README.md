# Agricultural Dashboard Computing System

A responsive web dashboard for monitoring agricultural field conditions,
exploring sensor readings, reviewing environmental trends, exporting
reports, and demonstrating a multi-stage data-processing workflow.

> **Project status:** This repository contains a functional frontend
> demonstration and a Hatchable-oriented API/database setup. Some
> readings, chart history, crop-health scores, activity entries, and
> processing performance metrics are sample or simulated values. Do not
> interpret the demo as a live agricultural sensor network or a
> production parallel-computing benchmark.

## Table of Contents

-   [Overview](#overview)
-   [Problem Statement](#problem-statement)
-   [Objectives](#objectives)
-   [Key Features](#key-features)
-   [Technology Stack](#technology-stack)
-   [System Architecture](#system-architecture)
-   [Project Structure](#project-structure)
-   [Requirements](#requirements)
-   [Getting Started in VS Code](#getting-started-in-vs-code)
-   [Running the Frontend Locally](#running-the-frontend-locally)
-   [Backend and Database Notes](#backend-and-database-notes)
-   [How to Use the Dashboard](#how-to-use-the-dashboard)
-   [Sensor Data Model](#sensor-data-model)
-   [Processing Center Workflow](#processing-center-workflow)
-   [CSV Reports](#csv-reports)
-   [Configuration and Customization](#configuration-and-customization)
-   [Troubleshooting](#troubleshooting)
-   [Current Limitations](#current-limitations)
-   [Future Enhancements](#future-enhancements)
-   [Contributing](#contributing)
-   [License](#license)

## Overview

Modern agriculture can produce data from soil sensors, weather stations,
irrigation systems, and crop imagery. A useful monitoring interface
needs to present these measurements clearly and help users identify
field conditions that may require attention.

The Agricultural Dashboard Computing System is a web-based prototype for
this use case. It provides a consolidated interface for environmental
readings, trend visualization, historical sample records, report
downloads, field selection, and a Smart Processing Center that
demonstrates a staged data pipeline.

The project is designed to be easy to run and modify as a frontend
prototype. A separate API endpoint and PostgreSQL schema are included
for the Hatchable-hosted version. Running the static frontend locally
does not automatically start that hosted backend or connect to its
database.

**Live demo:** https://agricultural-22xi.hatchable.site

## Problem Statement

Agricultural monitoring can involve multiple data streams with different
units, update rates, and quality concerns. Looking at raw readings
separately can make it difficult to quickly understand the condition of
a field. A dashboard can help by bringing common environmental
measurements together, showing trends, allowing users to inspect
records, and providing a place to evaluate simple alert thresholds.

This prototype demonstrates that user experience and a possible
processing workflow. Real-time ingestion, durable historical storage,
actual concurrent workers, and validated agronomic recommendations
require further backend and data-source integration.

## Objectives

1.  Present key agricultural sensor measurements in a single interface.
2.  Show sample field profiles for different crops and soil types.
3.  Provide interactive trend charts with line and area views.
4.  Allow users to search sample historical readings.
5.  Export report data in CSV format.
6.  Demonstrate data-quality range checks and configurable threshold
    evaluation.
7.  Illustrate a staged processing flow: Ingest, Validate, Analyze, and
    Respond.
8.  Keep the interface responsive and straightforward to navigate.
9.  Clearly distinguish demonstration behavior from live sensor
    processing.

## Key Features

### 1. Dashboard

The main dashboard presents a farm overview with sensor cards for
temperature (°C), humidity (%), soil moisture (%), rainfall (mm), and
soil pH. It also includes a field selector, crop-health summary,
latest-reading table, recent activity, quick insights, farm conditions,
and a sensor-trend chart.

Included field profiles:

  --------------------------------------------------------------------------------
  Field   Crop    Soil      Temperature   Humidity       Soil   Rainfall        pH
                  type                               moisture            
  ------- ------- ------- ------------- ---------- ---------- ---------- ---------
  Field   Wheat   Loamy         27.5 °C      61.2%      34.8%     4.2 mm       6.7
  A -                                                                    
  North                                                                  

  Field   Rice    Clay          29.1 °C      57.8%      31.4%     2.8 mm       6.5
  B -             Loam                                                   
  East                                                                   

  Field   Maize   Sandy         26.8 °C      66.1%      39.6%     5.7 mm       6.9
  C -             Loam                                                   
  South                                                                  
  --------------------------------------------------------------------------------

These are demonstration values, not readings verified from physical
sensors.

### 2. Interactive Charts

The Dashboard and Analytics & Charts views include SVG-based sensor
charts with line and area display modes, sensor selection in the
Analytics view, hoverable data points with tooltips, animated line
drawing and point highlighting, and responsive styling.

The sample-point selector changes the number of displayed sample points.
It does **not** query actual records for a 24-hour, 7-day, or 30-day
period. When all sensors are shown together, each series is normalized
for trend comparison, so its vertical position should not be read as a
shared physical unit.

### 3. Data History

The Data History view displays a sample table of past readings and
provides text search across the visible records. The page includes
summary cards for record count, average temperature, average soil
moisture, and data quality.

The visible table and summary cards are currently static sample content.
The date-range selector is a presentation control and should not be
treated as a verified database query.

### 4. Analytics & Charts

The analytics page offers selectable sensor series, line/area charts,
sample-point controls, and a crop-health score presentation. The current
crop-health score and component scores are demonstration indicators
rather than outputs from a validated crop-health model.

### 5. Reports

The Reports view provides report actions and a CSV download. The current
download is generated in the browser from the frontend's bundled sample
history rows. It does not automatically export all rows from the hosted
PostgreSQL database.

### 6. Settings

The Settings view demonstrates controls for live/simulated updates,
dashboard auto-refresh preference, default field selection, sensor
notification preference, and saving the visible settings state.

These controls are currently frontend demonstration behavior. Persistent
user accounts and server-side preference storage are not implemented in
the supplied frontend.

### 7. Smart Processing Center

The Processing Center is an interactive demonstration of an agricultural
data pipeline. It includes a four-stage pipeline (Ingest → Validate →
Analyze → Respond), a worker-count selector (2, 4, or 8), animated stage
transitions, local range checks for temperature, humidity, soil
moisture, and pH, editable minimum soil-moisture and maximum-temperature
thresholds, alerts based on the selected field's current sample values,
and crop-image upload and local preview for PNG, JPEG, and WebP files.

**Important:** the processing worker count, processed-record counter,
queue depth, and latency are simulated in the browser. The image feature
only previews the selected image and checks its file format; it does not
run a crop disease detector or image-based crop-health model. The
pipeline animation is not evidence of actual parallel execution.

## Technology Stack

-   **HTML5** for page structure.
-   **CSS3** for layout, responsive styling, visual effects, and
    animations.
-   **Vanilla JavaScript** for rendering, state, navigation, charts,
    filters, and interactions.
-   **SVG** for interactive sensor charts and inline icons.
-   **Browser-side CSV generation** for report downloads.
-   **Hatchable API runtime** for the hosted dashboard endpoint.
-   **PostgreSQL** for the hosted sensor-reading table.
-   **SQL migration and seed files** to define and initialize the hosted
    data table.

The frontend does not require a JavaScript package installation to run
as a static page. A local backend setup would require additional
configuration and is not provided by Live Server.

## System Architecture

At a high level, the hosted prototype has three parts:

1.  **Frontend (`public/`)** --- serves the dashboard interface and
    browser-side interactions.
2.  **API (`api/`)** --- exposes an endpoint that reads the latest
    agricultural reading from the database, with a fallback sample
    reading in the endpoint code.
3.  **Database (`migrations/`, `seed.sql`)** --- defines and initializes
    the `agricultural_readings` table in the hosted environment.

On startup, the frontend attempts to request `/api/dashboard`. If the
request succeeds and returns a latest reading, that reading is used. If
the API is unavailable, the frontend continues using its built-in sample
data.

When served with a simple local static server, `/api/dashboard` is not
automatically available. The interface can still load, but
database-backed behavior will not be active unless a compatible API is
configured.

## Project Structure

``` text
agricultural-dashboard/
├── api/
│   └── dashboard.js
├── migrations/
│   └── 001_dashboard.sql
├── public/
│   ├── index.html
│   ├── app.js
│   ├── processing.js
│   └── theme.css
└── seed.sql
```

  -----------------------------------------------------------------------
  File                                Purpose
  ----------------------------------- -----------------------------------
  `public/index.html`                 HTML entry point; loads the
                                      stylesheet and JavaScript files.

  `public/theme.css`                  Dashboard layout, colors, cards,
                                      responsive rules, charts,
                                      transitions, and Processing Center
                                      styles.

  `public/app.js`                     Main application state, page
                                      rendering, navigation, sensor
                                      cards, chart generation, sample
                                      history, settings, and CSV export.

  `public/processing.js`              Processing Center UI, local data
                                      checks, threshold evaluation,
                                      pipeline animation, worker
                                      simulation, and image preview.

  `api/dashboard.js`                  Hosted API handler that queries the
                                      latest row from
                                      `agricultural_readings` and returns
                                      it as JSON.

  `migrations/001_dashboard.sql`      Creates the `agricultural_readings`
                                      PostgreSQL table if it does not
                                      exist.

  `seed.sql`                          Inserts an initial Field A sample
                                      reading only when the table is
                                      empty.
  -----------------------------------------------------------------------

The deployed platform may also maintain platform-generated metadata that
is not part of the downloadable static frontend.

## Requirements

### Frontend-only local development

-   Windows, macOS, or Linux.
-   Visual Studio Code, or another text editor.
-   A modern browser such as Chrome, Edge, or Firefox.
-   Either the VS Code Live Server extension or Python 3 for a local
    static server.

**Node.js is not required** to serve this frontend as static HTML, CSS,
and JavaScript.

### Complete local backend

The supplied API uses the Hatchable runtime and its database
integration. It is not a standalone Node.js/Express API. To run a
complete local system, you would need to replace or recreate the
platform-specific API integration, configure a PostgreSQL instance,
apply the schema and seed data, and point the frontend to the local API.
Those steps are not accomplished by Live Server alone.

## Getting Started in VS Code

### Step 1: Download and extract

1.  Download the project ZIP from the project host or the export option
    available in the project console.
2.  Extract the ZIP using your operating system's archive utility.
3.  Open VS Code.
4.  Choose **File → Open Folder** and select the extracted project
    folder.

Make sure the opened folder contains the `public` directory. If the ZIP
contains an outer wrapper folder, open the inner project directory.

### Step 2: Inspect the files

Check that these frontend files exist:

``` text
public/index.html
public/app.js
public/processing.js
public/theme.css
```

The `index.html` file loads `/theme.css`, `/processing.js`, and
`/app.js`. Keep these files together in the `public` directory so the
site structure remains intact.

### Step 3: Install Live Server (recommended)

1.  In VS Code, open Extensions (`Ctrl+Shift+X`).
2.  Search for **Live Server** by Ritwick Dey.
3.  Install it.
4.  In the Explorer, open the `public` directory.
5.  Right-click `index.html`.
6.  Select **Open with Live Server**.

The browser will open a local URL, commonly:

``` text
http://127.0.0.1:5500
```

The exact port can differ if that port is already in use.

### Step 4: Run with Python instead (optional)

If Python 3 is installed, use the built-in static server instead of
installing Live Server.

Open the VS Code terminal and run:

**Windows PowerShell:**

``` powershell
cd public
python -m http.server 5500
```

If `python` is not recognized on Windows, try:

``` powershell
py -m http.server 5500
```

Then visit:

``` text
http://localhost:5500
```

Stop the server with `Ctrl+C` in the terminal.

> Run the server from inside `public`. This makes `index.html` the web
> root and allows `/app.js`, `/processing.js`, and `/theme.css` to
> resolve correctly.

## Running the Frontend Locally

After opening the local site:

1.  Navigate between Dashboard, Data History, Analytics & Charts,
    Reports, Settings, and Processing Center.
2.  Switch fields using the field selector.
3.  Try the chart type and sample-point selectors.
4.  Search the Data History table.
5.  Generate a CSV report.
6.  Open Processing Center and run a simulated batch.
7.  Change the worker selector and try the threshold evaluation.
8.  Upload a supported image to test the local preview.

If the browser's developer console shows a failed request for
`/api/dashboard`, that is expected when only a static server is running
and no local API has been configured. The frontend falls back to sample
values.

## Backend and Database Notes

### API endpoint

The hosted endpoint is defined in `api/dashboard.js`. It queries the
most recent row:

``` sql
SELECT *
FROM agricultural_readings
ORDER BY recorded_at DESC
LIMIT 1;
```

The API returns a JSON object containing `latest`. If the table has no
row, the handler has a fallback sample object. The endpoint uses
Hatchable's `db` binding and import, so it will not run unchanged in a
generic static web server.

### Database schema

The migration creates these columns:

  -----------------------------------------------------------------------
  Column                  Type                    Description
  ----------------------- ----------------------- -----------------------
  `id`                    UUID                    Primary key, generated
                                                  by the database.

  `temperature`           `NUMERIC(6,2)`          Temperature in degrees
                                                  Celsius.

  `humidity`              `NUMERIC(6,2)`          Relative humidity
                                                  percentage.

  `soil_moisture`         `NUMERIC(6,2)`          Soil moisture
                                                  percentage.

  `rainfall`              `NUMERIC(6,2)`          Rainfall measurement in
                                                  millimetres.

  `soil_ph`               `NUMERIC(4,2)`          Soil pH reading.

  `location`              `TEXT`                  Field or location name.

  `crop_type`             `TEXT`                  Crop associated with
                                                  the reading.

  `soil_type`             `TEXT`                  Soil classification.

  `recorded_at`           `TIMESTAMPTZ`           Reading timestamp,
                                                  defaulting to the
                                                  database current time.
  -----------------------------------------------------------------------

The `seed.sql` file inserts one Field A reading only if the table is
empty. The frontend's other sample fields and chart series are
separately defined in JavaScript; they are not all inserted by this seed
statement.

### Connecting a local backend

A complete local setup would require:

1.  Install and start PostgreSQL.
2.  Create a development database.
3.  Apply `migrations/001_dashboard.sql`.
4.  Apply `seed.sql`.
5.  Implement an API route that returns the same JSON shape expected by
    the frontend.
6.  Configure the frontend to call that API, using the correct local
    path or development proxy.
7.  Test database connectivity and API error handling.

The migration uses `gen_random_uuid()`. Confirm that the PostgreSQL
environment supports this function. Keep credentials in environment
variables or another secure configuration mechanism; do not commit
passwords or production connection strings to source control.

## How to Use the Dashboard

### Dashboard

Use the field dropdown to switch between the built-in sample profiles.
The Refresh Sensors button changes displayed values within demo bounds.
The Live Data control and timer update simulated values; they are not
connected to physical sensors in the frontend-only configuration.

### Data History

Enter a search term to filter the sample rows by date, time, field, or
reading. The records shown are hard-coded demonstration rows.

### Analytics & Charts

Select a sensor to view one series, or select the normalized all-sensor
view. Switch between line and area styles and adjust the number of
sample points. Hover over chart points to see tooltips. Treat the data
as illustrative, not as an audited time series.

### Reports

Use the report buttons to download CSV data. The current implementation
exports the bundled sample history. Confirm the contents before using a
downloaded file in a report or analysis.

### Settings

Toggle the demo monitoring and notification controls and select a
default field. The current settings are held in browser-side application
state and are not saved to a persistent user account.

### Processing Center

Run a simulated batch to watch the four stages animate. Choose a worker
count to change the simulated batch metrics. Use the quality panel to
check whether current readings are within broad numeric ranges, then set
alert thresholds and evaluate the selected field. Uploading a crop image
only previews it in the browser.

## Sensor Data Model

The dashboard currently displays five core environmental measurements:

  Measurement     Unit       Typical use
  --------------- ---------- -------------------------------------------
  Temperature     °C         Monitoring environmental heat conditions.
  Humidity        \%         Observing relative atmospheric moisture.
  Soil moisture   \%         Supporting irrigation monitoring.
  Rainfall        mm         Tracking precipitation measurements.
  Soil pH         pH scale   Recording soil acidity/alkalinity.

The interface also associates readings with a field location, crop type,
soil type, and timestamp.

The prototype's range checks are generic data-quality checks. They do
not account for sensor calibration, crop-specific requirements, local
weather, soil characteristics, growth stage, or agronomic advice.
Thresholds should be reviewed by an appropriate agricultural expert
before being used for operational decisions.

## Processing Center Workflow

The Processing Center presents this conceptual pipeline:

1.  **Ingest** --- collect sensor measurements.
2.  **Validate** --- check required values and basic numeric ranges.
3.  **Analyze** --- perform calculations on validated readings.
4.  **Respond** --- prepare alerts or summaries for the user.

In the current demo, these stages are animated in the browser. The
selected worker count does not launch operating-system threads, worker
processes, a distributed queue, or a parallel-computing runtime. The
counters and latency values are simulated.

A production implementation would need a real ingestion source,
validation service, persistent queue or stream, actual worker execution,
error handling, retry policies, monitoring, and benchmark methodology.
Throughput and latency should be calculated from measured processing
events rather than generated demo values.

## CSV Reports

The browser creates a CSV file named:

``` text
agricultural-dashboard-report.csv
```

The exported columns are Date, Time, Field, Temperature (°C), Humidity
(%), Soil Moisture (%), Rainfall (mm), and Soil pH.

The current CSV is based on the bundled sample history array. It is not
a complete database export, and its values should be treated as
demonstration data. If user-supplied or externally sourced values are
added in the future, validate and correctly escape CSV fields before
export.

## Configuration and Customization

### Change sample field profiles

The `locationData` object in `public/app.js` contains the built-in field
profiles. Update its values to change the demo fields. Keep the keys and
property names consistent with the rest of the application.

### Change chart sample series

The `chartSvg()` function in `public/app.js` contains the sample labels
and series arrays. Update both labels and values together. The current
chart draws a fixed sample series; connecting it to a real API will
require changing the chart's data source and handling loading, empty,
and error states.

### Adjust processing thresholds

The Processing Center contains default input values for minimum soil
moisture and maximum temperature. Users can change these in the UI and
evaluate the current sample reading. These are demo rules and are not
universal recommendations for all crops.

### Customize appearance

Most presentation rules live in `public/theme.css`. The document
structure and dynamic rendering live in `public/app.js` and
`public/processing.js`.

## Troubleshooting

### The browser shows a blank page

-   Confirm that `index.html`, `app.js`, `processing.js`, and
    `theme.css` are present.
-   Open the browser developer console (`F12`) and look for JavaScript
    errors.
-   Make sure you started the server from the `public` directory.
-   Confirm that the script and stylesheet names in `index.html` match
    the files on disk.

### CSS or JavaScript files return 404

The frontend references assets from the web root (for example,
`/app.js`). Start the static server from inside `public`, not from the
parent project directory. Alternatively, update the asset paths to match
the server's configured document root.

### `/api/dashboard` fails locally

This is normal when running only the static frontend. The endpoint
depends on the hosted Hatchable runtime and database binding. The
dashboard should fall back to sample data; a full local API must be
configured separately.

### `python` is not recognized

On Windows, try `py -m http.server 5500`. If neither command works,
install Python 3 or use the Live Server extension.

### Port 5500 is already in use

Choose another port, for example:

``` powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

### The charts do not reflect current sensor history

The charts use hard-coded sample series. Changing the sample-point
selector changes the visible sample count, not the time period queried
from a database. Implement an API-backed history query to display real
historical data.

## Current Limitations

-   Sensor readings and several dashboard summaries are sample/demo
    values.
-   The historical table and chart series are not fully connected to
    database history.
-   The chart's sample-point control is not a real date-range filter.
-   The crop-health score is a static illustrative score, not a
    validated prediction.
-   The processing center simulates worker activity and performance
    metrics.
-   The crop-image feature does not run image classification or disease
    detection.
-   Frontend settings are not persisted in a user account.
-   The hosted API is platform-specific and is not started by a static
    local server.
-   Authentication, role-based access, sensor-device integration, and
    production deployment hardening are outside the current frontend
    implementation.

## Future Enhancements

1.  Connect real sensors or a documented sensor-data ingestion API.
2.  Store timestamped readings and expose field/date-range API
    endpoints.
3.  Replace hard-coded history with database-backed pagination, filters,
    and statistics.
4.  Add true time-range filters and field comparisons to charts.
5.  Implement actual background workers or a task queue for parallel
    processing.
6.  Measure real processing throughput, queue depth, failures, and
    latency.
7.  Add secure authentication, authorization, and persistent user
    settings.
8.  Add validated crop-specific thresholds and traceable alert rules.
9.  Integrate a crop-image model only after selecting and evaluating an
    appropriate dataset and model.
10. Add automated tests for API responses, data validation, chart
    rendering, CSV export, and error states.
11. Add observability, structured logs, backup procedures, and
    deployment documentation.
12. Improve accessibility with keyboard navigation, contrast checks, and
    screen-reader testing.

## Contributing

For local changes:

1.  Keep edits focused and maintain the separation between application
    rendering (`app.js`), processing interactions (`processing.js`), and
    presentation (`theme.css`).
2.  Test the dashboard in a modern browser at desktop and mobile widths.
3.  Check the browser console for errors.
4.  Verify that CSV downloads contain the intended columns and rows.
5.  Document whether a feature uses live data, stored data, or simulated
    values.
6.  Do not commit secrets, API keys, passwords, or database connection
    strings.

## License

No license file was included in the supplied project file list. Add a
`LICENSE` file and update this section once the project owner has
selected a license. Until then, do not assume that the project is
released under an open-source license.
