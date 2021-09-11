# Data Analytics Portal (DAP) Frontend

## About 

* This is a react application for DAP. This web application provides users a way to access functionalities of nimbus. Currently, only the data mining functionality is implemented.


## Table of contents



>   * [Title](#title)
>   * [About](#about)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>   * [Usage](#usage)
>   * [Code](#code)
>     * [Content](#content)
>       * [root Directory](#root-directory)
>       * [build Directory](#build-directory)
>       * [public Directory](#public-directory)
>       * [src Directory](#src-directory)
>       * [docs Directory](#docs-directory)
>     * [Requirements](#requirements)
>     * [Build](#build)
>     * [Deploy (how to install build product)](#deploy-how-to-install-build-product)
>   * [Resources (Documentation and other links)](#resources-documentation-and-other-links)

## Installation

* Requirements - Node.JS, Visual Studio Code
* Downlaod and install Node.JS from the ISStore or from the official nodejs website (https://nodejs.org/en/download/).
* Download and install Visual Studio Code from ISStore or from https://code.visualstudio.com/download


## Usage
* Follow the next set of steps to run the web application on your local machine.
1) Clone the repository from https://dev.azure.com/ghd-digital-di/data_analytics_portal/_git/dap_frontend
2) Open the directory in Visual Studio Code
3) Use the command ‘npm install’ in the root directory, in a terminal to install all the dependencies which are defined in package.json file.
4) Use the command ‘npm start’ to compile and run all the files and host the website in port 3000 on your local machine
5) After the code successfully compiles, the website opens in your default browser.

## Code



### Content
### root directory
This directory contains files which describes, has information about this react application. It has information like what dependencies are being used and what is the project about in general.<br>

<b>Files:</b><br>

•	debug.log: This file has information about errors that are generated because of the libraries used while running the project. If a library cannot be imported while running the project, the error shows up here.<br>

•	package-lock.json – It has a list of all the libraries that are being used to run this react application which is common for all the react applications.<br>

•	package.json – It has a list of all the third party libraries that are being used to run this react application.<br>

•	README.md – Mark down file which gives a brief description of the project<br>

### build directory
build folder contains files necessary for deployment. npm run build command from the root directory can be used to create this build folder. This command optimizes all the files and folders as it makes the react application a production level application. The command combines all the files (*.js files) into one single file – index.html The index.html file in this build directory is used to host on Azure.<br>

<b>Files and folders:</b><br>

•	Index.html – This is the base html file which is a bundle of all the react component files. This file is used for deployment.<br>

•	Asset-manifest.json – Contains routes to all the flies in the static folder<br>

•	dummyCardsData.json – JSON file which contains data to be rendered on each card / tile on the landing page. Each object has three attributes which are name, bodyText and url. The name is heading for each card on the landing page. The bodyText is the corresponding description for that card. url specifies the route to a particular webpage.<br>

•	static folder – contains all the css, javascript and media files which are used in this react application.<br>

### public directory
This directory has files which server as the template files for the react application<br>

<b>Files and folders:</b><br>

•	index.html – The base html file, all react components are added to this file<br>

•	dummyCardsData.json – JSON file which contains data to be rendered on each card / tile on the landing page. Each object has three attributes which are name, bodyText and url. The name is heading for each card on the landing page. The bodyText is the corresponding description for that card. url specifies the route to a particular webpage.<br>

### src directory
This directory contains all the react components and main .js files for this react application. Any code modification, if required should be done to files in this directory. This directory contains multiple .js files which are called as react components.<br> 

<b>Files and folders:</b><br>

•	router.js – This file contains routes to all the pages (About, Contact Us, etc) in this react application.<br>

•	index.js – This file renders the pages of this react application. By default, it renders the landing page which is defined as the default route(‘/’) for this react application in router.js file.<br>

•	index.css – This file contains styles which are added to index.js file.<br>

•	Components – This directory has all the components which are defined for a particular page. It also has a shared components directory where the components which are shared among the pages are defined.<br>

	Landingpage – All the components related to the landingpage are defined here.<br>

	nimbus – All the components related to t
he nimbus EDA page are defined here.<br>

	Shared – All the components(header, footer) that are shared among the pages are defined here.<br>

•	Pages – This directory has all the components which are defined for a particular page. It also has a shared components directory where the components which are shared among the pages are defined.<br>

	Landingpage – This folder contains landingpage.js file which describes the outline of the webpage(which holds all the components related to the landingpage).

	nimbus – This folder contains nimbus.js file which describes the outline of the webpage(which holds all the components related to the nimbus).<br>

	About – This folder contains About.js file which is a simple file that describes the About page<br>

	ContactUs – This folder contains ContactUs.js file which is a simple file that describes the ContactUs page<br>

	Other tools – This folder contains otherTools.js file which is a simple file that describes the otherTools page, it includes a description and hyperlink to GHDInSite tool.<br>

•	Services – This directory has all the components which are defined for a particular page. It also has a shared components directory where the components which are shared among the pages are defined.

### docs directory
This directory contains all files and folders related to create a webpage for documentation. The webpage gives a brief description of the functions, classes and methods present in this application. This directory also contains the index.html file which can be hosted on Azure. jsdoc library is being used to auto generate the website for documentation.

### Requirements

* Node.JS



### Build

    npm run build



### Deploy (how to install build product)
* Use the index.html to deploy the web application on Azure. Use the Azure Web App Service on Azure to deploy the webpage.
* Follow the link for additional details : https://devblogs.microsoft.com/premier-developer/deploying-react-apps-to-azure-with-azure-devops/

## Resources (Documentation and other links)
* Documentation can be found here - 
* Other useful links:
1) https://reactjs.org/tutorial/tutorial.html
2) https://react-bootstrap.github.io/
3) https://material-ui.com/
4) https://jsdoc.app/


