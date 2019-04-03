# Mock Netflix
This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app).
Integrate Redux, React-Redux, Redux-Saga, Fetch, and also add Redux-Dev-Tool for dev mode.
I also deploy this project [live-demo](http://178.128.3.90/).
## Available Scripts
In the project directory, you can run:
```sh
yarn install
yarn start
```
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```sh
yarn build
```
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
This app is ready to be deployed!
## Project Structure
```
mock-netflix
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── yarn.lock
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    │   ├── movieAcions.js
    │   └── types.js
    │
    ├── components
    │   ├── MovieCard.js
    │   ├── MovieCard.css
    │   ├── MovieList.js
    │   └── MovieList.css
    │
    ├── constant
    ├── page
    │   ├── App.js
    │   └── App.css
    │
    ├── reducers
    │   ├── rootReducer.js
    │   └── movieReducer.js
    │
    ├── sagas
    │   ├── rootSaga.js
    │   └── movieSaga.js
    │
    ├── services
    │   └── api.js
    │
    ├── utils
    │   └── request.js
    │
    ├── index.js
    ├── index.css
    └── serviceWorker.js
```
Some explaination for the current project structure, base on the requirement, the project need use redux and react, so I choose to build the project from scratch, for real world can use some other framework such as NextJS(SSR), UmiJs(DvaJs), and also can use some UI component library such as ant design, react bootstrap, material design components.<br>
We need to call an api, so I add redux-saga for deal with side effects, It is easier to manage, more efficient to execute, easy to test, and better at handling failures.<br>
For the redux part I add a types.js file, this is for better to make action and reducer match the same type, easier to find out typo error. I use rootReducer and rootSaga to better manager the whole structure, better for fututre expanding the project with multiple reducers and sagas.<br>
I also build my own request function on the top of the fetch library which is also good for deal with response error and also good for future cache response and add token, set content type and so on.<br>





