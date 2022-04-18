# Requirements for web development at ETARIX
I order to save you and us time, we have some requirements for the code. We sell high quality websites and the code is a main part of this. Therefore, we want to make sure that you as a developer stick to some basic claims. As well as an overall overview, we provide you with detailed documentation. These requirements are the foundation for a successful coperation and must be met. Please refrain from working together if you think you are not able to comply with the requirements. As well as a documentaion, we provide you with an example which covers code examples for the most frequent problems. As well as his you get a setup template you can use for all projects.

## Contact
Please contact our Head of Development for questions:
- Name: Torge Stehr
- Mail: torge.stehr@etarix.com
- Phone: +49 152 37784110


## Basics
### Node, Express and EJS
Unless otherwise agreed, we work with Node. More specifically, we use Express for routing and EJS for rendering the pages. Use the following code snippet in the `app.js` file:

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const bodyParser = require('body-parser');

// csrf
const csrfProtection = csrf({ cookie: true })
const parseForm = bodyParser.urlencoded({ extended: false })

// server
const app = express();
const server = app.listen(7000, () => {
	console.log("Express running → PORT ${server.address().port}");
});

// permit some files
app.use('/js', express.static('public/js'));
app.use('/lib', express.static('public/lib'));
app.use('/fonts', express.static('public/fonts'));
app.use('/styles', express.static('public/styles'));
app.use('/assets', express.static('public/assets'));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', 'public/views');
app.set('view engine', 'ejs');

app.get('/', csrfProtection, function (req, res) {
	res.render('home', { csrfToken: req.csrfToken() });
});
```
As you can see, the first thing to be implemented on the site is CSRF protection. The folders of the assets are then defined. You can find out more about this under *File structure and labeling*. As already mentioned, the web pages are rendered with EJS. You can see a CSRF token is attached to each page. This can then be used on the website for secure requests.

------------


### File structure and labeling
We have some requirements for file naming and folder structure. Please also look at the example to better understand the structure.

1. Please use English for all file names.
2. If possible, please use only one word for a file and folder name. If this is not possible, separate two words with capital letters. Example: `fileStructure.js`
3. Please divide assets and components into as many folders as possible and reasonable. Example: About section on a homepage -> `pages/home/about/about.ejs` and an image for the about section -> `assets/pages/home/about/about.webp`

| Path | Content |
| :------------ | :------------ |
| `/public` | All files and folders for the frontend. |
| `/src` | All files and folders for the backend. |
| `app.js` | As the main file for server and routing. |

------------

#### Frontend
##### Assets
| Path | Content |
| :------------ | :------------ |
| `/public/assets/favicons` | For all favicon files. |
| `/public/assets/opengraph` | For all opengraph files. |
| `/public/assets/pages` | For all images, videos, etc. that are included on the pages. |

Example of an image for an about section on a homepage:

| Path | Content |
| :------------ | :------------ |
| `/public/assets/pages/home/about/about.webp` | All folders with fonts go in here. |

*Add more folders as needed, but follow the naming rules above.*

------------

##### Components
| Path | Content |
| :------------ | :------------ |
| `/public/components/nav` | Navigation as an integrated component on the pages. |
| `/public/components/footer` | Footer as an integrated component on the pages. |
| `/public/components/cookies` | Cookie banner as an integrated component on the pages. |
| `/public/components/loader` | Loading animation as an integrated component on the pages. |

*Add more folders as needed, but follow the naming rules above.*

------------

##### Fonts
| Path | Content |
| :------------ | :------------ |
| `/public/fonts` | All folders with fonts go in here. |
| `/public/fonts/fonts.css` | All CSS for the font-families. |

------------

##### Javascript
| Path | Content |
| :------------ | :------------ |
| `/public/js` | All folders with fonts go in here. |
| `/public/js/pages` | All folders with fonts go in here. |
| `/public/js/page.js` | All folders with fonts go in here. |

Example of a homepage:

| Path | Content |
| :------------ | :------------ |
| `/public/js/pages/home.js` | All folders with fonts go in here. |

*Add more files as needed, but follow the naming rules above.*

------------

##### Libraries
| Path | Content |
| :------------ | :------------ |
| `/public/lib` | All folders with fonts go in here. |
| `/public/lib/jquery-3.6.0.min.js` | All folders with fonts go in here. |

*Add more files as needed.*

------------

##### Pages
| Path | Content |
| :------------ | :------------ |
| `/public/pages` | All folders with fonts go in here. |

Example of an about section on a homepage:

| Path | Content |
| :------------ | :------------ |
| `/public/pages/home` | All folders with fonts go in here. |
| `/public/pages/home/about/about.ejs` | All folders with fonts go in here. |
| `/public/pages/home/about/_about.scss` | All folders with fonts go in here. |

*Add more folders as needed, but follow the naming rules above.*

------------

##### Styles
| Path | Content |
| :------------ | :------------ |
| `/public/styles` | All folders with fonts go in here. |
| `/public/styles/_style.scss` | All folders with fonts go in here. |

Example of a homepage:

| Path | Content |
| :------------ | :------------ |
| `/public/styles/home` | All folders with fonts go in here. |
| `/public/styles/home/home.scss` | All folders with fonts go in here. |

*Add more folders as needed, but follow the naming rules above.*

------------

##### Views
| Path | Content |
| :------------ | :------------ |
| `/public/views` | All folders with fonts go in here. |

Example of a homepage:

| Path | Content |
| :------------ | :------------ |
| `/public/views/home.ejs` | All folders with fonts go in here. |

*Add more folders as needed, but follow the naming rules above.*