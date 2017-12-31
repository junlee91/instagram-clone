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
- 


### App development plan
- XCode
- Android Studio
- Genymotion
- Expo XDE
- Expo Client 