This project has been created with [`create-react-app`](https://github.com/facebookincubator/create-react-app). We added a zest of [prismic](https://github.com/prismicio/javascript-kit) inside it.

### Install dependencies
```
> $ yarn install
```
### Runs the app in the development mode
Build and open your browser to http://localhost:3000.
```
> $ npm start
```

### Launches the test runner in the interactive watch mode
```
> $ npm run test
```

### Builds the app for production to the build folder
```
> $ npm run build
```

### Get started with prismic.io

You can find out how to get started with prismic.io from [our React documentation](https://prismic.io/docs/reactjs/getting-started/getting-started-from-scratch).

# Global installs

Need them to run a sass watch and sass compile.
Not that Netlify seems to have issues installing node-sass. We do not need to let Netlify know about node-sass.

# Creative Tim

The template has a few issues with sass, specifically it defines @mixin s within others.
This means that it cannot be compiled using Ruby sass 3.5.5 which needs to be installed to
run the sass watch. Hence, gulp and libsass needs to be installed just to compile creativetim's sass
