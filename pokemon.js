const request = require('request');
const cheerio = require('cheerio');

request('https://www.pokemon.com/us', (error, Response, html) => {

        if (!error) {

                const $ = cheerio.load(html)

                const sliderWrapper = $('.slider-wrapper');
                const episodeTitle = $('.slider-title');

                const output = episodeTitle.find('h3').text();
                const output2 = sliderWrapper.find('h5').text()

                console.log(output)

                console.log(output2)

        }

})
