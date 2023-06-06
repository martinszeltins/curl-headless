const puppeteer = require('puppeteer')
const htmlLib = require("html")

;(async () => {
    const url = process.argv[2] // get the URL from command line argument
    if (!url) {
        console.error('Please provide a URL as a command line argument.')
        process.exit(1)
    }

    console.log('')
    console.log('  > Starting Puppeteer.....')
    await new Promise((resolve) => setTimeout(resolve, 200))
    console.log('  > Rendering website.....')
    await new Promise((resolve) => setTimeout(resolve, 200))
    console.log(`  > URL: ${url}`)
    await new Promise((resolve) => setTimeout(resolve, 200))
    console.log('  > Executing JavaScript.....')
    console.log('')

    const browser = await puppeteer.launch({ headless: 'new' })
    const page = await browser.newPage()

    // Listen for all requests and log their headers
    page.on('request', (request) => {
        if (request.url().trim() === url.trim()) {
            console.log('Request:')
            
            const headers = request.headers();

            for (const key in headers) {
                console.log(`  > ${key}: ${headers[key]}`);
            }
        }
    })

    // Listen for all responses and log their headers
    page.on('response', (response) => {
        if (response.url().trim() === url.trim()) {
            console.log(' ')
            console.log('Response:')

            const headers = response.headers();

            for (const key in headers) {
                console.log(`  > ${key}: ${headers[key]}`);
            }
        }
    })

    await page.goto(url, { waitUntil: 'networkidle0' })

    // Wait for an additional 1 second after the network is idle
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Get the full HTML of the page
    const fullHTML = await page.evaluate(() => document.documentElement.outerHTML)

    console.log('')
    
    // Pretty print the HTML
    let prettyFormattedHTML = htmlLib.prettyPrint(fullHTML, { indent_size: 2 });
    process.stdout.write(prettyFormattedHTML)

    await browser.close()
})()
