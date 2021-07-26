# Image-processing-api 
[<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />](https://nodejs.org/en/) [<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />](https://expressjs.com/) [<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />](typescriptlang.org) [<img src="https://img.shields.io/badge/Sharp-99CC00?style=for-the-badge&logo=sharp&logoColor=white" />](https://sharp.pixelplumbing.com/) [<img src="https://img.shields.io/badge/Jasmine-8a4182?style=for-the-badge&logo=jasmine&logoColor=white" />](https://jasmine.github.io/)


The API is designed to display an image on the browser with its size set via URL parameters. The API also implements caching when revisiting URL. This is achieved by storing already processed file in your system so that re-processing has not to be done and thus saving time.

## Pre-requisites

Install [Node.js](https://nodejs.org/en/) latest LTS.

## Getting started

Clone/download the project and install dependencies before getting started

```shell
npm i
```
### Scripts:

- Start server
```shell
npm run start
```
- Build
```shell
npm run build
```
- Tesing with Jasmine
```shell
npm run test
```
- Formatting and linting
```shell
npm run prettier
npm run lint
```
## Endpoint Structure
#### Endpoints
http://localhost:3000/api <br/>
http://localhost:3000/api/images
##### Parameters
`http://localhost:3000/api/images?`
- filename - `string`
- width - `number`
- height - `number` <br/>

Example url for resizing image http://localhost:3000/api/images?filename=icelandwaterfall&width=500&height=500

## Extension TODO
Add template(frontend) for the application and allow user to upload new files from browser.

## Author

#### Ankita Singh
[<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/enkitaa)
[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/ankita-singh-31a47aa0/) 

## Reference

https://www.geeksforgeeks.org/node-js-fs-access-method/ <br/>
https://nodejs.org/api/fs.html <br/>
https://classroom.udacity.com/ <br/>
https://eslint.org/docs/user-guide/configuring/configuration-files <br/>
https://sharp.pixelplumbing.com/ <br/>

