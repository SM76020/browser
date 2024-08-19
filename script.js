const goButton = document.getElementById('go-button'),
    reloadButton = document.getElementById('reload-button'),
    urlBar = document.getElementById('url-bar'),
    webView = document.getElementById('web-view'),
    openInBrowser = document.getElementById('open-in-browser'),
    backButton = document.getElementById('back-button'),
    forwardButton = document.getElementById('forward-button');
// Load the page when the user presses Enter in the URL bar
urlBar.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        goButton.click();
    }
});

// Navigate to the entered URL
goButton.addEventListener('click', () => {
    let url = urlBar.value.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;  // Default to HTTPS if no protocol is specified
    }
    webView.src = url;
});

// Reload the current page
reloadButton.addEventListener('click', () => webView.reload());

// Open the current page in the default browser
openInBrowser.addEventListener('click', () => require('electron').shell.openExternal(webView.src));

// Go back to the previous page
backButton.addEventListener('click', () => webView.goBack());

// Go forward to the next page
forwardButton.addEventListener('click', () => webView.goForward());

// Automatically update the URL bar when navigating in the webview
webView.addEventListener('did-navigate', (event) => urlBar.value = event.url);

// Load a default homepage (optional)
window.addEventListener('DOMContentLoaded', () => webView.src = 'https://www.google.com');  
// Set this to any default website