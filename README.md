
  
# Web-Scrapper
A <a href="https://nodejs.org/en/">NodeJS</a> Web Scrapper That Will Return Real-Time Information Based Upon Info Requested 


<br>

**First Things First**

1. In your Project Folder run `npm init -y` or run `npm init` and put whatever you want in the requirements

2. Run `npm i cheerio` and `npm i request` unless they are already installed

<br>
I am providing the following things. 

- a Default file to use

- one Formated to Retrieve the Daily Pokemon + Episode Titles from the <a href="https://www.pokemon.com/us/">Pokemon Website</a>
<i>a sample pretty much on how simple this is to use aswell</i>  

<a href="https://i.imgur.com/1ytE5lq.png">Output</a>

<br>

Default Code.

```js
const request = require('request');
const cheerio = require('cheerio');

request('WEBSITE_URL_GOES_HERE', (error, Response, html) => {

        if (!error) {

                const $ = cheerio.load(html)
                
                
                const HTML_TITLE_NAME = $('HTML_CLASS_WHICH_YOU_WANT_INFO_FROM');

                console.log(HTML_TITLE_NAME)

        }

})
```
<br></br>
**Note**

There is going to be whitespace in the console, in my opinion it was never a problem but seeing that it may be for others, you can simply just add this replace method in

```js

replace(/\s\s+/g, '');

```




