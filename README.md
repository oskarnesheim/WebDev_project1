# WeatherSearcher

The **WeatherSearcher** app is a simple yet powerful tool that allows you to access accurate weather forecasts for your desired locations.

In this app, you can add up to 6 cities to your list of favorites, making it easy to keep tabs on the weather in multiple locations. Your favorite cities will be saved for your convenience the next time you visit the page. Additionally, WeatherSearcher provides a settings option that allows you to choose between the metric system (default) and the imperial system, ensuring that you get weather information in the units you prefer. <br>
We initially wanted to show the forecast for the upcoming 10 days, but the API we're currently using doesn't offer forecasts for more than 3 days in the future unless we pay for it.

## Running the App

To run the WeatherSearcher app on your local machine, follow these simple steps:

1. First, make sure you have all the necessary dependencies by running:

   ```
   pnpm install
   ```

2. Once the dependencies are installed, start the development server by running:

   ```
   npm run dev
   ```

3. Open in browser by writing:
   ```
   o
   ```
   Now, you can explore the weather forecasts for your favorite places with ease!

# Testing

Ensuring the quality and reliability of WeatherSearcher is a top priority. To achieve this, we have adopted a thorough testing approach that encompasses several vital aspects of our application, which include component testing with mock API calls and snapshot testing.

## Component Testing

Here we test that the components render correctly and that the data is displayed as expected. We for example test that the search functionality works, loading of a city, forecast for a city and navbar.

## Snapshot testing

The snapshot tests check that the code for a component is the same as the last time the snapshot was taken. This is useful for detecting unexpected changes in the codebase.

## Devices and Browsers

In addition to standard testing, we've also paid special attention to responsiveness by conducting tests on a range of devices, including:

- Acer Swift 3 SF314-59 14"
- Macbook Pro 13"
- Macbook Pro 14"
- Macbook Air 13"
- iPhone 12 Pro
- iPhone 13

Browser tested in:

- Google Chrome
- Safari
- Firefox

## Running the Tests

To run the tests and verify the app's functionality and responsiveness, follow these steps:

1. Open your terminal and run the following command:

   ```
   npm test
   ```

   This will execute the test suite and provide you with test coverage results in the terminal.

2. Alternatively, you can access a more detailed test coverage report by opening the `index.html` file located under the `coverage/` directory in your project's root folder.

With our robust testing approach, we aim to deliver a reliable and user-friendly weather forecasting experience through WeatherSearcher.

## Prettier

- To apply prettier to the code, open your terminal and run the following command:

  ```
  npm run prettier-write
  ```

- To check if prettier is applied, open your terminal and run the following command:

  ```
  npm run prettier-check
  ```

## Linting

- To check if the code is linted, open your terminal and run the following command:

  ```
  npm run lint
  ```
  
# API

We are using the [WeatherAPI](https://www.weatherapi.com/api-explorer.aspx#forecast) to get the weather data. The API is free to use, but we are limited to 3 days of forecast for any given location. We are using the following endpoints:

- http://api.weatherapi.com/v1/current.json?key=1413dd12c034448e8e894125230109&q=" + city + "&aqi=no";
  - Here we get the current weather for a given location.
- "http://api.weatherapi.com/v1/forecast.json?key=1413dd12c034448e8e894125230109&q=" + city + "&days=" + numberOfDays + "&aqi=" + airQuality + "&alerts=" + allerts;
  - Here we get the forecast for a given location. We are using 3 days as default, and we are not using airQuality or alerts.
- "http://api.weatherapi.com/v1/search.json?key=1413dd12c034448e8e894125230109&q=" + "city";
  - Here you do a fuzzy search for a given location. We are using this to get the search results. From the result of this you can select what city you want to get the forecast for.


# Requirements

## Functional Requirements

```diff
The user should be presented with one rescource at a time, but should have the option to navigate back and forth, and to jump to a specific resource (e.g. by choosing from a list).
+ Done
```

**Comment:**

- Navigating back and fourth: The user is presented with it's favorites and can go back and forth between them by clicking on them in the favorites section.
  - The feedback we got on [Functionality](#functionality) suggested that we should add arrows to navigate between favorites, but we have chosen to keep it simple for now since we have a limited amount of favorites and did not see it as necessary.
- Jump to a specific resource: The user can search for a city and jump to that city by clicking on it in the search results.

```diff
A user should be able to make a choice (e.g. filtering or sorting) that affects the selection of what is presented and how it is presented. These choices should be remembered even if the page is reloaded.
+ Done
```

**Comment:**

- Sort: The user can sort favorites in alphabetical order or by time added by clicking on the togglebutton in the favorites section. The favorites will be sorted in time added order by default. This sorting is stored in sessionstorage and will be remembered even if the page is reloaded.
- Search (filter): The user can search for a city by typing in the searchbar. The search results will consist of cities that match the search query, and therefore it works as a filter. The search results will be saved in cache and will be available if the user refresh, or searches for the same city again.
- Favourite display: are presented on top of the searchbar, with the possibility to remove them by clicking on the star. The favorites will be saved in localstorage and will be available the next time the user visits the webpage.
- Metric/imperial: The user can choose between metric and imperial by clicking on the togglebutton in the settings section. The choice will be saved in sessionstorage and will be remembered even if the page is reloaded.

```diff
A user should be able to choose favorites by for example clicking on a star or a heart. Choices should be remembered even if the browser is closed and restarted.
+ Done
```

**Comment:** A user can choose favorites by clicking on the star after the cityname. The favorites will be saved in localstorage and will be available the next time the user visits the webpage.

```diff
The page should be responsive and work well on both desktop and mobile devices.
+ Done
```

**Comment:** The page is responsive and works well on both desktop and mobile devices. NB: We have only tested on the devices listed under [Testing](#testing).

```diff
The page should have an aesthetic and tidy design (this is subjective, but we are looking for you to have put some work into styling the page).
+ Done
```

**Comment:** We have put a lot of work into styling the page and we are very happy with the result. The feedback we got on [Design](#design) was very positive, and we have only made minor changes where it was requested.

## Technichal Requirements

```diff
The solution is based on Typescript and React.
+ Done
```

```diff
The solution uses React state and props.
+ Done
```

```diff
The solution fetches data from a REST API and uses TanStack Query.
+ Done
```

```diff
The solution uses HTML Web storage API (both localstorage and sessionstorage), alternatively you can also use the IndexedDB API.
+ Done
```

```diff
The solution uses React Router.
+ Done
```

```diff
The solution has responsive design.
+ Done
```

# Filestructure

In the root folder you will find the following folders:

- **coverage**: Contains the test coverage report
- **dist**: Contains the bundled code the is deployed to the server
- **node_modules**: Contains all the dependencies
- **public**: Contains the index.html file, interfaces and logo
- **src**: Contains the source code

In the src folder you will find the following folders:

- **error**: Contains the error component
- **functions**: Contains the functions used in the app. This includes API calls.
- **mocks**: Contains the mock data used in the tests
- **recoil**: Contains the recoil atoms.
- **test-setup**: Contains the setup for the tests
- **components**: Contains all the components for the application. The components are divided into folders based on their placement in the application. Here you find:
- **home**: Contains the components for the home page
- **city**: Contains the components for the city page
- **navbar** Contains the components for the navbar
- **tests**: Contains the tests for the application

# Feedback :

### Code base

**Feedback:** Define returntypes for functions<br>
**Solution:** We have not been consistent adding having returntypes for functions, but we have defined types for variables and props - so we have not prioritized this.

**Feedback:** Comment code better<br>
**Solution:** Added TSdoc comments to the most important functions.

**Feedback:** File structure is good, but in a small project like this i would prefer to have all the components in the same folder.<br>
**Solution:** Since we have a lot of components, we have chosen to keep them in different folders. The reason behind this is to make it easier to navigate if we are going to expand the project.

### Functionality

**Feedback:** Maybe you could have used filtering or sorting more clearly, for example that the user can decide for himself whether he wants to sort the favorite cities in alphabetical order, temperature, etc. <br>
**Solution:** We have added a togglebutton for sorting favorites in alphabetical order and by time added. We could have added more sorting options, but we have chosen to keep it simple for now.

**Feedback:** Functionally a very good application, and the only thing that may be missing here is "paging back and forth", but again this is probably more a question of definition. <br>
**Solution:** We have implemented paging back and forth between favorites by clicking on them in the favorites section. We did not se the need for arrows to navigate between favorites, since we have a limited amount of favorites.

**Feedback:** Maybe try to find a way to incorporate paging with arrows in the application? For example, a solution could have been to scroll between the days in a given city. <br>
**Solution:** Since the API we are using only provides 3 days of forecast, we have chosen to show all 3 days at once (paging is not necessary with so few days ). But we will definitely consider this if we are going to expand the project.

### Design

**Feedback:** When it comes to evaluating the design of the web application, it is worth noting that the design is what I personally like best about the app. It gives a very tidy impression, and the color combination harmonizes well with the application's theme and functionality. In addition, the mobile view is implemented in an impressive way. It is especially positive that the group has created different components for each view, which provides a well-organized and structured user experience. This shows attention to detail and user-friendliness, which enhances the app's appeal. <br>
**Solution:** Keep most of the design as it is, except for minor changes.

**Feedback:** The application is responsive, but text and icons in the ForcastDay_preview "boxes" do not change size with the box itself, and disappear from the box when the screen width is reduced. This happens until you reach a width of 500px, where the content is eventually adapted. <br>
**Solution:** We prioritized a range of devices for testing, and the application and the design works well on all of them. We have not tested on devices with a width of 500px, but this is clearly something we would prioritize if we were to expand the project.

**Feedback:** The favorite section is messy, and could use some better styling. In addition, the timeline for the weather forecast is somewhat confusing, and could be made more readable, but works fine. <br>
**Solution:** Added styling to favorites section. Since the timeline worked fine, we did not prioritize changing it in this version.

**Feedback:** I also want you to put in a symbol to show hour by hour. This helps users understand that it is an option. <br>
**Solution:** Added a Button (Show hours/Hide hours) to make it more clear that you can see the weather hour by hour

### Documentation

**Feedback:** The Documentation is lacking in both the readme and the codebase. The readme should contain more information about the file structure, what has been tested, and more information about the API. The codebase should contain more comments. <br>
**Solution:** We have added information about the API, folderstructure and testting.

**Feedback:** I miss a short documentation on what the different functions should take in and return, but with such small functions and good naming, it is actually zero problem. The rest of the documentation is good, but would like to see which browsers you have tested on, as it can affect the application. <br>
**Solution:** Updated readme with browsers tested in.

### Bugs / Errors

**Feedback:** BUG: I tried to search for my hometown (Stange), but when I clicked on the object I was sent to the page for Stanger (South Africa). Also happens with Sande (gives you Sandefjord), so it may be something with the query
**Solution** We have not prioritized to change the query since the places referred to are displayed in the search results, and the user can choose the correct place from the list.

**Feedback:** Had to use "npm install --force" to be able to install necessary things. There was a dependency message when I ran the regular "npm install" that complained about some imports that were not compatible with each other. <br>
**Solution:** When we started up we went for "performance npm", so the user have to write "pnpm install" to install the necessary things. We have added a message in the readme to make it more clear.

**Feedback:** Problems with eslint. <br>
**Solution:** We have gone through the code and deleted all the eslint errors, including eslint-disable comments.

**Feddback:** Prettier is not added to the project. <br>
**Solution:** We have added prettier to the project. It can be applied by writing "npm run prettier-write", and it can be checked by writing "npm run prettier-check". We updated this in the readme as well.
