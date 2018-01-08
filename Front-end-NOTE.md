## Front-End Note

### 12/30/17

## Development Tools
- Javascript (ES6)
- React (JSX, Redux, Ducks, Thunk)
- JSX
- SCSS
- Webpack (Code Transformation)
- NodeJS
- Yarn (Npm with improvements)

## Webpack
- Entry: Tells webpack where to start
- Output: Where to put the finished code
- Loaders: Transform files
- Plugins: Transform the whole transformed code

## How loaders work
- Identify which file or files should be transformed by a certain Loader
- Identify how the file or files should be transformed by a certain Loader (with the use property)

## Web-pack-practice
- [Webpack Documentation](https://webpack.js.org/)
- [Babel ES2015 Preset Documentation](https://babeljs.io/docs/plugins/preset-es2015/)
- [Package.json Documentation](https://docs.npmjs.com/files/package.json)
- Commands
```sh
> yarn init
> touch index.js
> touch webpack.config.js
> yarn global add webpack
> yarn add babel babel-core babel-loader babel-preset-es2015 --dev
```
- webpack.config.js
```sh
module.exports = {
    entry: *where to find the files to be converted*
    output: {
        path: *output location*
        filename: *output filename*
    },
    module:{
        rules: [
            {
                test: *types of file*
                loader: *how to transform*
                options: {
                    presets: ["es2015"]
                } 
            }
        ]

    },
    plugins:[
        *what to do at the end*
    ]
};
```

### 12/31/17

## Create React App
- [GitHub](https://github.com/facebookincubator/create-react-app)
```sh
yarn global add create-react-app
create-react-app frontend
cd frontend
yarn start
```

## Ejecting from Create React App
- [yarn eject documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject)
- `yarn eject`

## Adding SCSS to Webpack
- [SCSS](http://sass-lang.com/guide)

### 1/1/18 (Happy New Year!)

## Serving Webpack Bundles with Django
- Django is running on localhost:8000 `python manage.py runserver`
- ReactApp is running on localhost:3000 `yarn start`
- 3000 server is also connected to Webpack (This is the place where the front-end development will happen)
- 3000 server doesn't know the way to connet to Django server (port:8000)
- 8000 server will automatically block the remote requests from 3000 by default  
- :8000 <--X-- :3000

### How to allow Django to accept request from the ReactApp?

#### Setting for React
- Set *Proxy* 
- `"proxy": "http://localhost:8000"` in package.json 
- If the rquest not found in ReactApp then translate to find in the proxy
- example) `localhost:3000/notifications ===> localhost:8000/notifications`

#### Setting for Django
- `pipenv install django-cors-headers`
```sh
THIRD_PARTY_APPS = [
    ...
    'corsheaders', # To accept requests from React
]
```
- Allow middleware to accpet the request
```sh
MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',
==> 'corsheaders.middleware.CorsMiddleware',  
    'django.middleware.common.CommonMiddleware',
    ...
]
```
- Set `CORS_ORIGIN_ALLOW_ALL = True` (This is safe because JWT will gurantee to accpet only valid requests)

- Make Django to load the bundles as static files
```sh
STATICFILES_DIRS = [
    ...
    str(ROOT_DIR.path('frontend', 'build', 'static'))
]
```
- Create view for sodagram and set url for catch-all non-matching url request
- `url(r'^', views.ReactAppView.as_view())`

### Overall
- _Users go to 8000 server to view the built app_
- _Developer go to 3000 server to work and build the app_

### 1/2/18

## Redux
- Components have local state, but apps have global state
- Sometimes state needs to be shared
- We need to save the shared state to somewhere
- Redux = State Container 

## Redux-thunk
- `yarn add redux-thunk`
- Let us send actions to redux store 
- Send actions when we want 

## Redux Middlewares-Logger
- `yarn add redux-logger`
- Only added to middlewares on development mode
```sh
const env = process.env.NODE_ENV;

if(env === "development"){
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}
```
### 1/5/18

## Reactotron
- [What is Reactotron?](https://github.com/infinitered/reactotron)
- Installation `brew cask install reactotron`

## Set up
- `yarn add reactotron-react-js`
- `yarn add reactotron-redux --dev`
- Define Reactotron in ReactotronConfig.js and `export default Reactotron`
- Import into configureStore.js `import Reactotron from "ReactotronConfig";`
```sh
let store;

if(env === "development"){
    store = initialState => Reactotron.createStore(reducer, applyMiddleware(...middlewares)); 
} else {
    store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}
```
- Start Reactotron application and we can see actions and dispath actions

## Installing Redux Dev Tools
- `yarn add redux-devtools-extension --dev`


### 1/7/18

## React Design Patterns
- Container + Presenter Pattern
- [React Component Patterns](https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82)




### App development plan
- XCode
- Android Studio
- Genymotion
- Expo XDE
- Expo Client 