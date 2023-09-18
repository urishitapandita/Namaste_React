# Assignment-3

## Q1: What is JSX?
  - It is a syntax extension to JavaScript.
  - JSX makes it easier to write and add HTML in React.
  - It is eventually converted to React.createElement() syntax by Babel, a package that comes as a dependency of Parcel.

## Q2: Super Powers of JSX?
 - Behind the scenes, it gets TRANSPILED into React.createElement() by Babel and then it generates React Element thus JSX is actually another way of creating React elements rather than using the core React way to create elements.

## Q3: Role of 'type' attribute in <script> tags? What options can I use there?
 - It is used to tell the browser what type of script it is.
 -   We can assign 3 values to 'type' attribute:
    - `type = ""` ie empty string / don't set the attribute only: In case of normal classic JS script
    - `type = "module" ` : In case of Module Script, This value causes the code to be treated as a JavaScript module.

## Q4: {TitleComponent()} vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>`?
   All three are methods to render the TitleComponent functional component in some other component or React element.
  - `{TitleComponent()}`: call the TitleComponent function since Functional components are at the end of the day JS functions
  - `<TitleComponent/>` : Using self-closing tags
  - `<TitleComponent></TitleComponent>` : Using opening and closing tags

