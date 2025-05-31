## City Manager App

The Cities app allows users to manage a list of cities by adding new entries and viewing the saved cities.

# Features

* **View Cities:** A scrollable list displays all saved cities along with their respective countries.
* **Add New City:** Easily input the name and country of a new city using a straightforward form.
* **Navigation:** A bottom tab navigator allows seamless switching between the city list and the city addition form. The city list screen further utilizes a stack navigator to enable navigation to detailed views of individual cities.
* **State Management:** The application's main component `App.js` manages the list of cities using `useState` hooks, ensuring data consistency across components through prop passing.
* **Form Validation:** The "Add City" form includes validation to guarantee that both the city name and country are provided before submission.
* **City Identification:** Each added city is assigned a unique identifier using the `react-native-uuid` library.
* **Empty State Indication:** When no cities are currently saved, the app displays a centered message to inform the user.


**Component Structure:**

* `App.js`: The entry point of the application, responsible for setting up navigation and holding the main city data.
* `CitiesStackScreen.js`: A container for the stack navigator that manages navigation within the city-related screens.
* `Cities.js`: Renders the list of cities and handles the transition to city detail views.
* `AddCity.js`: Implements the form for users to input and save new city information.
* `CenterMessage.js`: A utility component used to display messages in the center of the screen, particularly when the city list is empty.

**Tech Stack:**

* **React Native:** The framework used to build the cross-platform user interface.
* **React Navigation:** The library employed for implementing both tab and stack navigation patterns.
* **`react-native-uuid`:** A library utilized for generating universally unique identifiers for city objects.


## Updated (Part 2)
The City Manager App has undergone several key updates to improve code organization, state management, and navigation clarity:

* **Functional Components and Hooks:** The main `App.js` component has been refactored from a class-based component to a functional component using React's useState hooks. This modernizes state management and simplifies component logic.

* **Dedicated `CitiesStackScreen.js`:** The stack navigator handling navigation between the city list and city details screens has been extracted into its own component file, `CitiesStackScreen.js`. This improves separation of concerns and makes the navigation structure easier to maintain.

* **Clearer Navigation Structure:** The bottom tab navigator remains the primary navigation method, allowing users to switch seamlessly between the city list and add city form. Inside the city list tab, a stack navigator handles transitions to individual city detail views, maintaining intuitive navigation flows.

* **Explicit Form Validation:** The add city form enforces input validation to ensure both city and country fields are completed before submission, enhancing user experience by preventing incomplete data entries.

* **Unique City Identification with UUID:** Each new city entry is assigned a universally unique identifier using the react-native-uuid library. This ensures reliable and consistent identification of cities throughout the app.

* **Improved Empty State UX:** The CenterMessage component is utilized more consistently to display centered messages when the city list is empty or when a city has no locations, providing clear feedback to users about the current data state.

* **Enhanced Component Structure:** By clearly defining roles and file boundaries for components such as `App.js`, `CitiesStackScreen.js`, `Cities.js`, `AddCity.js`, and `CenterMessage.js`, the app codebase is more modular, readable, and easier to scale or modify.


## Updated (PE05)
The City Manager App has been extended with new features that allow users to manage countries alongside cities. These additions mirror the existing cities functionality, providing a consistent user experience and maintaining clean code organization:

* **Country Management Tabs:** Two new bottom tabs, CountriesNav and AddCountry, have been added to the navigation structure. These enable users to view a list of countries and add new countries, respectively.

* **View Countries:** The CountriesNav tab contains a scrollable list of all saved countries along with their associated currencies, offering a clear and accessible overview of the data.

* **Add New Country:** The AddCountry tab presents a simple form that allows users to input both the country name and its currency. This form includes validation to ensure complete input before submission.

* **State Management Integration:** The country data is managed within the `App.js` component using useState hooks, consistent with how city data is handled. This approach promotes unified and predictable state management across the app.

* **Component Structure Expansion:** New components were introduced to support the country management features:

* **`CountriesNav.js:`** Renders the country list and manages any future navigation within country-related screens.

* **`AddCountry.js:`** Implements the form for adding new countries and their currencies.

* **Consistent UX and Design:** The country management features follow the same design and interaction patterns as the cities functionality, ensuring a smooth and intuitive user experience.


## Updated (PE06)
The City Manager App has been further extended to include currency management capabilities within the country detail views. This enhancement improves data depth and user interaction by allowing users to associate and view currencies per country:

* **Currency Detail Screen:** Tapping on a country in the CountriesNav list now navigates to a detailed screen that lists all currencies. Each currency entry includes a name and context-sensitive info text — for example, if the USA and Germany are saved and the user taps on the USA, the screen will show:

- Dollar
- US Dollar

- Euro
- European Euro not used

* **Consistent List UI:** The currency list layout mirrors the UI used for city locations, with large bold titles and smaller info text beneath. Currencies used by the selected country are clearly marked, while other currencies show a "not used" message for clarity.

* **Add Currency Section:** At the bottom of the currency detail screen, a form similar to the location addition form has been introduced. It contains:

- A TextInput for Currency Name

- A TextInput for Currency Info

- A submission button labeled Add Currency

* **State Management Integration:** The addCurrencyInfo function has been introduced and passed through the navigation structure. It allows users to associate currency data directly with specific countries. This function updates the relevant country’s state with the provided currency name, preserving global consistency.

* **UI Consistency:** The Currency.js component reuses design patterns established in the City.js component — including empty state messaging and vertically stacked forms — providing a cohesive experience across cities, countries, and currencies.

* **Code Organization:** This update maintains clean architectural practices by integrating with the existing App.js state logic and preserving prop-driven data flow throughout the navigation and detail components.