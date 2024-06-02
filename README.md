# Birthday Calendar App

This is a React-based Birthday Calendar App that allows users to view notable birthdays for a selected date and add/remove their favorite birthdays. The app persists the favorite birthdays in local storage so they are available even after a page refresh.

## Features

- View birthdays for a selected date.
- Add birthdays to a favorites list.
- Remove birthdays from the favorites list.
- Persist favorite birthdays in local storage.
- Prevent duplicate entries in the favorites list.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/birthday-calendar-app.git
   cd birthday-calendar-app

2. **Install dependencies:**   
npm install

3. **Set up environment variables:**
**Create a .env file in the root of the project and add your Wikimedia API access token:**

   ```sh
   VITE_APP_ACCESS_TOKEN=your_wikimedia_api_access_token

4. **Start the development server:**
    ```sh
    npm run dev

5. **Components**
## App Component
-The main component that handles state management and rendering of other components.

## BirthdayList Component
-Fetches and displays a list of notable birthdays for the selected date.

## FavoriteList Component
-Displays the list of favorite birthdays, ensuring no duplicates.

## Local Storage
-The app uses local storage to preserve favorite birthdays. The data is stored under the key favoriteBdays.


## Contributing
-Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

##Contact
-For any questions or feedback, please get in touch with me at pandeyamit9340@gmail.com



