# WeatherSearcher

The **WeatherSearcher** app is a simple yet powerful tool that allows you to access accurate weather forecasts for your desired locations.

In this app, you can add up to 5 cities to your list of favorites, making it easy to keep tabs on the weather in multiple locations. Your favorite cities will be saved for your convenience the next time you visit the page. Additionally, WeatherSearcher provides a settings option that allows you to choose between the metric system (default) and the imperial system, ensuring that you get weather information in the units you prefer. We initially wanted to show the forecast for the upcoming 10 days, but the API we're currently using doesn't offer forecasts for more than 3 days in the future unless we pay for it.

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

Ensuring the quality and reliability of WeatherSearcher is a top priority. To achieve this, we have adopted a thorough testing approach that encompasses several vital aspects of our application, which include component testing, snapshot testing, and the strategic use of mock API calls.

In addition to standard testing, we've also paid special attention to responsiveness by conducting tests on a range of devices, including:

- Acer Swift 3 SF314-59 14"
- Macbook Pro 13"
- Macbook Pro 14"
- Macbook Air 13"
- iPhone 12 Pro
- iPhone 13

Browser tested in:

- Google Chrome

## Running the Tests

To run the tests and verify the app's functionality and responsiveness, follow these steps:

1. Open your terminal and run the following command:

   ```
   npm test
   ```

   This will execute the test suite and provide you with test coverage results in the terminal.

2. Alternatively, you can access a more detailed test coverage report by opening the `index.html` file located under the `coverage/` directory in your project's root folder.

With our robust testing approach, we aim to deliver a reliable and user-friendly weather forecasting experience through WeatherSearcher.

# Requirements

## Functional Requirements

- _The user should be presented with one reseoource at a time, but should have the option to navigate back and forth, and to jump to a specific resource (e.g. by choosing from a list)._<br>
  **The user is presented with it's favorites and can go back and forth between them. In addition a user can search for a favorite city.**
- _A user should be able to make a choice (e.g. filtering or sorting) that affects the selection of what is presented and how it is presented. These choices should be remembered even if the page is reloaded._<br>
  **We have implemented both localstorage and sessionstorage saving. Favorites will be saved with localstorage until next time you visit the webpage, while metric/imperial will only be saved during the session. At first we implemented saving of metric/imperial as a localstorage, but to meet the requirements we changed it to sessionstorage.**

- _A user should be able to choose favorites by for example clicking on a star or a heart. Choices should be remembered even if the browser is closed and restarted._<br>
  **A user can choose favorites by clicking on the star after the cityname. The favorites will be saved in localstorage and will be available the next time the user visits the webpage.**
- _The page should be responsive and work well on both desktop and mobile devices._<br>
  **The page is responsive and works well on both desktop and mobile devices. NB: We have only tested on the devices listed under testing**
- _The page should have an aesthetic and tidy design (this is subjective, but we are looking for you to have put some work into styling the page)._ <br>
  **We have put a lot of work into styling the page. We have used a lot of time to make the page look good and we are very happy with the result.**

## Technichal Requirements

- _The solution is based on Typescript and React._ **Done**<br>
- _The solution uses React state and props._ **Done**<br>
- _The solution fetches data from a REST API and uses TanStack Query._ **Done**<br>
- _The solution uses HTML Web storage API (both localstorage and sessionstorage), alternatively you can also use the IndexedDB API._ **Done**<br>
- _The solution uses React Router._ **Done**<br>
- _The solution has responsive design._ **Done**<br>

# Feedback:

### Code base

**Feedback:** Define returntypes for functions
**Solution:** TODO

**Feedback:** Comment code better
**Solution:** TODO

**Feedback:** File structure is good, but in a small project like this i would prefer to have all the components in the same folder.
**Solution:** TODO

### Functionality

**Feedback:** Maybe you could have used filtering or sorting more clearly, for example that the user can decide for himself whether he wants to sort the favorite cities in alphabetical order, temperature, etc.
**Solution:** TODO

**Feedback:** In the evaluation of the web application's functional requirements, it is clear that its primary purpose, namely to "see the weather," is performed efficiently. However, there is a lack of essential functions when it comes to sorting and filtering. These functions, such as being able to sort cities based on current weather conditions or filter by specific criteria, could have improved the application's utility value.
**Solution:** TODO

**Feedback:** Functionally a very good application, and the only thing that may be missing here is "paging back and forth", but again this is probably more a question of definition.
**Solution:** TODO

**Feedback:** With paging I mean e.g. arrows to the next / previous resource. I see how it can be difficult when the resources are weather data for cities, so I think this group has met the requirement for paging as well as possible based on the chosen API.
**Solution:** TODO

**Feedback:** Maybe try to find a way to incorporate paging with arrows in the application? For example, a solution could have been to scroll between the days in a given city.
**Solution:** TODO

**Feedback:** I also want you to put in a symbol to show hour by hour. This helps users understand that it is an option.
**Solution:** TODO

### Design

**Feedback:** When it comes to evaluating the design of the web application, it is worth noting that the design is what I personally like best about the app. It gives a very tidy impression, and the color combination harmonizes well with the application's theme and functionality. In addition, the mobile view is implemented in an impressive way. It is especially positive that the group has created different components for each view, which provides a well-organized and structured user experience. This shows attention to detail and user-friendliness, which enhances the app's appeal.
**Solution:** Keep most of the design as it is, except for minor changes.

**Feedback:** The application is responsive, but text and icons in the ForcastDay_preview "boxes" do not change size with the box itself, and disappear from the box when the screen width is reduced. This happens until you reach a width of 500px, where the content is eventually adapted.
**Solution:** We prioritized a range of devices for testing, and the application and the design works well on all of them. We have not tested on devices with a width of less than 500px, but this is something we could do in the future.

**Feedback:** The favorite section is messy, and could use some better styling. In addition, the timeline for the weather forecast is somewhat confusing, and could be made more readable, but works fine.
**Solution:** Added styling to favorites section. TODO: Make timeline more readable.

### Documentation

**Feedback:** The Documentation is lacking in both the readme and the codebase. The readme should contain more information about the file structure, what has been tested, and more information about the API. The codebase should contain more comments.
**Solution:** TODO @oskar

**Feedback:** I miss a short documentation on what the different functions should take in and return, but with such small functions and good naming, it is actually zero problem. The rest of the documentation is good, but would like to see which browsers you have tested on, as it can affect the application.
**Solution:** Updated readme with browsers tested in.

### For the future






