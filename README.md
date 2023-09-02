# Namaste_React

- This Repo contains all the material, assignments, homework, and coding questions from the Namaste React course.
- Navigate to the episode number "0x" by going to this repository's branch "0x".
- Eg. Episode 02 is on branch 02 of the repository.
- Episode 01 is on the main branch.

  # Assignment - 1

  #### 1) What is emmet?
  - It is a plugin used to auto-generate boiler-plate code. For example, we can use '!' to generate HTML boilerplate code.
  - We can use abbreviations/short expressions to generate HTML and CSS.
  - It is a toolkit that makes writing HTML, and CSS code really easy.
 
  #### 2) Difference between a Library and Framework?
  - A framework is a set of pre-written code that provides a structure for developing software applications. A library is a collection of pre-written code that can be used to perform specific tasks.

   #### 3) What is CDN and how do we use it?
   - A CDN improves efficiency by introducing intermediary servers between the client and the website server.

   #### 4) Why is React, known as React?
   - Because it "Reacts" to any state or property changes and works with data of any form (as deeply structured as the graph itself), the name is fitting.

   #### 5) What is the cross-origin in the script tag?
  - It is an attribute we add to the script tag to tell the browser that no credentials are needed to access this script. So we allow cross-origin sharing with this attribute.

   #### 6) What is the difference between React and ReactDOM?
   - React and ReactDOM are two separate libraries that are often used together in the development of web applications with React.
   - React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM .
   - ReactDOM, on the other hand, is a library that provides an interface between React and the DOM (Document Object Model). The DOM is a tree-like structure that represents the HTML of a web page, and ReactDOM provides a set of functions that allow React components to be rendered to the DOM and updated efficiently.
   - In short, React is a library for building user interfaces, while ReactDOM is a library for interacting with the DOM and rendering React components to the web page. While they are often used together, they serve different purposes and can be used independently of each other

#### 7) What is difference between react.development.js and react.production.js files via CDN?
 - The React library provides two versions of its JavaScript files: react.development.js and react.production.js. The react.development.js is used in the development stage/environment while the other is for the production environment.
 - The react.development.js file is larger in size compared to react.production.js.The development version contains additional code, comments, and debugging information that aids in development and troubleshooting.
 - The development version (react.development.js) provides more detailed error messages and warnings compared to the production version. So it helps in better diagnostics
 - The production version is optimized for performance and has undergone various optimizations, including minification and removal of unnecessary code, resulting in a smaller file size.

#### 8) What is async and defer?
 - Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during the downloading process) and don’t wait for anything.
- Syntax : <script async src="script.js"></script>
- Defer - The defer attribute is a boolean attribute . The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script . Instead, the browser will continue to process theHTML, build DOM.
- Syntax : <script defer src="script.js"></script>

