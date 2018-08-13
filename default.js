const request = require('request');
const cheerio = require('cheerio');

request('WEBSITE_URL_GOES_HERE', (error, Response, html) => {

        if (!error) {

                const $ = cheerio.load(html)
                
                
                const HTML_TITLE_NAME = $('HTML_CLASS_WHICH_YOU_WANT_INFO_FROM');

                console.log(HTML_TITLE_NAME)

        }

})
