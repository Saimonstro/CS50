# currency converter

#### video demo: https://youtu.be/XX8WajoKiSY

## description

currency converter is a web application built with react that allows users to easily convert amounts from united states dollars (usd) to several popular world currencies, including brazilian real (brl), euro (eur), british pound (gbp), japanese yen (jpy), and argentine peso (ars). it fetches real-time exchange rates from the frankfurter public api, offering accurate and up-to-date conversions.

this project was developed as my cs50 final project. the motivation behind building a currency converter was to create a practical, everyday tool that anyone can use to quickly check how much a specific amount of usd is worth in other currencies, whether for travel, e-commerce, or learning purposes.

the project is implemented using react, a modern javascript library for building user interfaces, to take advantage of its powerful state management and component-based architecture. all interface text is intentionally in lowercase, both for style and to match the project specifications.

## features

- user-friendly web interface
- convert usd to brl, eur, gbp, jpy, or ars
- instant and accurate currency conversion using real-time exchange rates
- simple, minimalist design with accessibility in mind
- responsive layout, working well on both desktop and mobile devices
- error handling for invalid input or network failures
- all code, comments, and documentation in english

## usage

to use the application, simply enter the amount you wish to convert in the usd field, select the target currency from the dropdown menu, and click "convert." the converted value will appear below the input, showing exactly how much the entered amount in usd is worth in the selected currency based on the latest rates from frankfurter.app.

the application displays a helpful error message if an invalid amount is entered or if the exchange rate cannot be fetched due to a network problem.

## file structure

- `public/index.html`: basic html template with a single root element for react rendering.
- `src/index.js`: entry point for the react application; renders the main app component.
- `src/app.js`: main layout component, includes the project title, converter component, and footer.
- `src/components/converter.js`: core logic for currency conversion; handles input, api calls, and result display.
- `src/components/currencyselector.js`: dropdown menu for choosing the target currency.
- `src/style.css`: provides all styling, layout, and responsive design for the app.
- `package.json`: lists all dependencies, scripts, and project metadata.
- `README.md`: project documentation (this file).

## implementation details

the currency conversion logic is located in `converter.js`. when the user enters an amount and chooses a currency, the app sends a fetch request to the frankfurter public api (https://www.frankfurter.app/). the response contains the latest exchange rate, which is then displayed on the screen. if the api is unreachable or the amount is invalid, an error message appears.

the app uses functional react components with hooks (`useState` and `useEffect`) for state management and side effects. all input is validated to ensure a positive numeric value before attempting a conversion.

the project is designed to be easy to read, maintain, and extend. for example, adding new currencies can be accomplished by simply extending the `CURRENCIES` array in `converter.js`.

## design choices

i chose react for its ease of use in building modern, interactive web applications, and because of its popularity in the industry. frankfurter.app was selected as the exchange rate provider because it is reliable, free, requires no api key, and covers all the target currencies. all styling was written in plain css for simplicity and compatibility.

the app does not require server-side code or a database, since all conversions are performed using a public api and javascript in the browser. this makes the app fast and easy to deploy.

## limitations and possible improvements

currently, the app only supports conversions from usd to the selected currency. a possible improvement would be to allow conversions between any pair of supported currencies, or to display historical rates and charts.

another improvement could be internationalization support for different interface languages and currency formatting styles, as well as more advanced error handling (such as retrying failed requests or providing more context for errors).

## how to run

1. clone the repository or download the project files.
2. navigate to the project folder in your terminal.
3. run `npm install` to install all dependencies.
4. run `npm start` to start the development server.
5. open `http://localhost:3000` in your browser.

no api key is required for the frankfurter api.

## api usage

the app uses https://www.frankfurter.app/ as its data provider for exchange rates. this api is free for non-commercial use and provides live rates for many world currencies.

## ai tools citation

some parts of the code and this documentation were drafted and reviewed with the assistance of openai chatgpt, used as an auxiliary productivity tool. the code itself is fully written, assembled, and tested by me.

---

final project for cs50x, 2025
