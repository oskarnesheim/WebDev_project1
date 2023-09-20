# WeatherSearcher

The **WeatherSearcher** app is a simple yet powerful tool that allows you to access accurate weather forecasts for your desired locations.

In this app, you can add up to 5 cities to your list of favorites, making it easy to keep tabs on the weather in multiple locations. Your favorite cities will be saved for your convenience the next time you visit the page. Additionally, WeatherSearcher provides a settings option that allows you to choose between the metric system (default) and the imperial system, ensuring that you get weather information in the units you prefer. We initially wanted to show the forecast for the upcoming 10 days, but the API we're currently using doesn't offer forecasts for more than 3 days in the future unless we pay for it.

When selecting a city from the search proposals, the app will present the user with the current weather for the selected city. The user can also click on a the forecast for a specific day and get weather information for the entire day. This ensures that we fulfill the requirement of presenting one resource at a time. A user can also navigate back to the home page by using the navbar.


## Running the App

To run the WeatherSearcher app on your local machine, follow these simple steps:

1. First, make sure you have all the necessary dependencies by running:

   ```
   npm install
   ```

2. Once the dependencies are installed, start the development server by running:

   ```
   npm run dev
   ```

3. Open your preferred web browser and navigate to the app by visiting [http://localhost:3000](http://localhost:3000).

Now, you can explore the weather forecasts for your favorite places with ease!

# Testing

Ensuring the quality and reliability of WeatherSearcher is a top priority. To achieve this, we have implemented a comprehensive testing strategy that covers various aspects of the app, including component testing, snapshot testing, and mocking API calls.

In addition to standard testing, we've also paid special attention to responsiveness by conducting tests on a range of devices, including:

- Acer Swift 3 SF314-59 14"
- Macbook Pro 13"
- Macbook Pro 14"
- Macbook Air 13"
- iPhone 12 Pro
- iPhone 13

## Running the Tests

To run the tests and verify the app's functionality and responsiveness, follow these steps:

1. Open your terminal and run the following command:

   ```
   npm test
   ```

   This will execute the test suite and provide you with test coverage results in the terminal.

2. Alternatively, you can access a more detailed test coverage report by opening the `index.html` file located under the `coverage/` directory in your project's root folder.

With our robust testing approach, we aim to deliver a reliable and user-friendly weather forecasting experience through WeatherSearcher.
