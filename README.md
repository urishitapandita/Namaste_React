# Assignment - 2

#### 1. What is npm?
 - It is a tool used for package management and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine.
 - It **does NOT stand** for Node Package Manager.

#### 2. What is Parcel/Webpack? Why do we need it?
  - Parcel/Webpack is type of a web application bundler used for development and production purposes or to power our application with different types of functionalities and features.
  - A bundler minifies, compresses, and bundles up the code before shipping the code to production.

#### 3. What is '.parcel-cache'?
 - .parcel-cache is used by parcel(bundler) to reduce the building time.
 - It stores information about your project when parcel builds it so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

#### 4. What is 'npx'?
 - npx is a package executer. It is used to execute packages. If the package is not present locally, then it installs prior to the execution.

#### 5. Difference between dependencies and devDependencies?
 - Dependencies should contain library and framework on which your app is built on, which needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc.
 -  DevDependencies should contain modules/packages a developer needs during development. such as, parcel, webpack, vite, mocha etc. These packages are necessary only while you are developing your project, not necessarily 
    in production.

#### 6. What is Tree Shaking? [Read More on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
 - Tree shaking is a term to describe the removal of dead/unused code.
 - In production builds, Parcel tries to analyze all the imports and exports of each module. It sees which module is not reachable and no more required. Then it removes everything that is unused. This is Tree Shaking or 
   Dead-code Elimination.

#### 7. What is Hot Module Replacement?
 - Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.
 - It **automatically updates the modules** in the browser at runtime without needing a whole page refresh.

#### 8. Superpowers of Parcel and describe any 3 of them in your own words.
  - Hot Module Replacement
  - Creating the local server to host the app
  - Caching the App code
  - Tree Shaking
  - Minification: **Reducing the file size by removing extra whitespaces in the code, renaming variables to shorter variable names**.  
  - Compression: **Applying Compression algorithms like Gzip or Brotli on the minified code**
  - Differential Bundling: Provides support for older browsers
  - Better Diagnostics: Provides a **better presentation of errors and warnings in the dev environment** leading to easy diagnostics.

#### 9.  What is .gitignore ? What should we add and not add to it?
 - A gitignore is a text file where each line contains a pattern for files or directories to ignore. It is usually placed at the root of the project folder.
 - The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.
Note: package-lock.json should not add into your .gitignore file.
- You should not commit these four types of files into your Git repository:
Files that don’t belong to the project, Files that are automatically generated, Libraries (depends on the situation) and Credentials.

#### 10. What is the difference between package.json and package-lock.json ?
 - The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package. The file resides in the root directory of every Node. js package and appears after running the npm init command.
 - package-lock.json : This file is automatically generated for those operations where npm modifies either the node_module tree or package-json. The “package. json” file defines the rules required to run your application and install dependencies. On the other hand, the “package-lock. json” file holds detailed information on all the dependencies installed based on the package. It is generated after an npm install and not designed to be manually edited and we should not delete it either. As name suggests, lock. json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.


#### 11. : Why should I not modify package-lock.json ?
 - package-lock.json file contains information about the dependencies and their versions installed in the project. Deleting them would cause dependency issues in the production environment. So you should not modify it as it's being handled automatically by NPM.

#### 12. What is node_modules ? Is it a good idea to push that on git?
  - node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
 - We should not push node_modules in GitHub because it contains lots of files(more than 100 MB), and it will cost you memory space.

#### 13. What is the dist folder?
 - The /dist stands for distributable.
 - The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code that is used on production web applications.
 - Along with the minified code, the /dist folder also comprises all the compiled modules that may or may not be used with other systems.

#### 14. What is browserslist ?
- Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.
- In package.json file, do:
  
"browserslist": [
"last 3 versions"
]
This means my parcel will make sure that my app works in the last 3 versions of all the browsers available.

- Browserslist helps you keep the right balance between browser compatibility and bundle size. With Browserslist, you will cover a wider audience and have a smaller bundle size.








