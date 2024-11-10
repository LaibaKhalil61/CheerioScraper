# CheerioScraper 

A command-line tool that extracts and prints the text content of a specific HTML element from a webpage. Just provide a URL and a CSS selector, and the application will retrieve and display the content that matches the selector.

## Features

- Takes a **URL** and **CSS selector** as arguments.
- Outputs the text content of the first element matching the selector.
- Uses **Cheerio** for HTML parsing and selector matching.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CheerioScraper.git
   cd CheerioScraper
2. Install dependencies:
```bash
  npm install
```
3. Usage:

Run the CLI with the following command:

```bash
  node scraper.js <URL> <CSS_SELECTOR>
```
## Dependencies
- Node.js: JavaScript runtime
- Cheerio: Fast, flexible, and lean implementation of jQuery-like selectors
