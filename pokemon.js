const request = require('request');
const cheerio = require('cheerio');

//pokemon.com/us is the website url. Make sure to change it to whatever website you're looking into
request('https://www.pokemon.com/us', (error, Response, html) => {

        if (!error) {
                        
                //you can try using a different symbol instead of the $ BUT I would highly recommend you just leave it as that
                const $ = cheerio.load(html)

                //div_classes the info is under
                const sliderWrapper = $('.slider-wrapper');
                const episodeTitle = $('.slider-title');
                 
                
                //grabbing the header titles of the pokemon names, pokedex no, episodes, and the titles provided
                const output = episodeTitle.find('h3').text();
                const output2 = sliderWrapper.find('h5').text()            

                
                //printing into console
                console.log(output)
                console.log(output2)

        }

})
