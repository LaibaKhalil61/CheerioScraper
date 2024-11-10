import * as cheerio from 'cheerio'
import fs from "fs"

// Getting url and cssSelector from the given arguments 
const url = process.argv[2];
const cssSelector = process.argv[3];

const fetchHTML = async () => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch URL ${res.statusText}`)
        }
        const data = await res.text();
        return data;
    } catch (err) {
        console.log("Error : ", err.message);
        process.exit(1);
    }
}

// performs scraping of data
const main = async ()=>{
    if(!url || !cssSelector){
        console.log("USAGE FORMAT : node scraper.js <URL> <CSS SELECTOR> ");
        process.exit(1);
    }
    const html = await fetchHTML();
    const $ = cheerio.load(html);
    const filtered_content = $(cssSelector).text().trim();
    if (filtered_content.length === 0) {
        console.log("CSS selector not found in the content");
        process.exit(1);
    }
    else {
        fs.writeFile("./selectedContent.txt", filtered_content, (err) => {
            if (err) {
                console.log("Error : Unable to make file with selected content.")
                return;
            }
            console.log("File with selected content made successfully.")
        })
    }
}
main();

