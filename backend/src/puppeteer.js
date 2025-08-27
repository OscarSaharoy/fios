#!/usr/bin/env node

import puppeteer from 'puppeteer';

async function fetchBodyText(url) {
  let browser;
  
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    // Create new page
    const page = await browser.newPage();
    
    // Navigate to URL
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Get body inner text
    const bodyText = await page.evaluate(() => {
      return document.body.innerText;
    });
    
    console.log(bodyText);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    // Close browser
    if (browser) {
      await browser.close();
    }
  }
}

// Get URL from command line arguments
const url = process.argv[2];

if (!url) {
  console.error('Usage: node script.js <url>');
  console.error('Example: node script.js https://example.com');
  process.exit(1);
}

// Validate URL format
try {
  new URL(url);
} catch (error) {
  console.error('Invalid URL provided:', url);
  process.exit(1);
}

// Run the script
fetchBodyText(url);

