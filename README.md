
# Custom Electron Web Browser

A custom web browser application built using Electron, allowing users to navigate the web in a standalone application. The browser supports basic navigation, including a URL bar, page reload, and the ability to open websites in the default system browser.

## Features

- **URL Navigation**: Enter URLs and navigate to websites.
- **Reload Page**: Refresh the current webpage.
- **Open in Default Browser**: Open the current webpage in the system's default web browser.
- **Responsive Design**: Clean and responsive user interface.

## Requirements

- **Node.js**: Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
- **Electron**: Electron is used to build the desktop application.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SM76020/browser.git
   cd browser
   ```

2. **Install dependencies**:

   Run the following command to install Electron and other dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Start the application**:

   Run the following command to launch the Electron application:

   ```bash
   npx electron .
   ```

2. **Navigation**:

   - Enter a URL in the input bar and click the **"Go"** button to navigate to the website.
   - Click the **"Reload"** button to refresh the current webpage.
   - Click the **"Open in Browser"** button to open the current URL in your default web browser.

## Project Structure

```
/browser
│
├── main.js          # Main process script for Electron
├── index.html       # HTML file for the UI
├── styles.css       # CSS file for styling the UI
├── preload.js       # Preload script (optional)
└── package.json     # Node.js project file
```

### File Descriptions

- **main.js**: Initializes the Electron app, manages the main browser window, and handles events like URL loading and navigation.
- **index.html**: Provides the structure for the browser's user interface.
- **styles.css**: Contains the styles for the controls, buttons, and webview element.
- **preload.js** (optional): Used to safely expose APIs to the renderer process if needed.

## Customization

You can further customize this browser by adding features such as back/forward navigation, bookmarking, and more advanced settings.

## Troubleshooting

If you encounter any issues, make sure:
- You have a stable internet connection.
- The URLs you enter are valid and accessible.
- Your Node.js and Electron installations are up to date.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

This project was built using [Electron](https://www.electronjs.org/), an open-source framework for building cross-platform desktop apps with web technologies.

You can now place this `README.md` file in your repository. It will appear on the main page of your GitHub repository and provide detailed instructions for others who may want to use or contribute to your project.
