# EPISODE 5: Let's Get Hooked

## Q1. Difference between Named Export, Default Export, * as Export?

- Named export: Named exports allow you to export multiple functions, variables, or classes from a single file as separate entities.
- Syntax:
  
   
        export const LOGO_URL = "https://...........";
        import {LOGO_URL} from "path";

- Default export : It is a way to share a single value, function, or class as the main thing from a file with other parts of your code.
- Syntax :
   ```
   export default LOGO_URL = "https://...........";
   import LOGO_URL from "path";
   
 - **A file can have no more than one default export, but it can have as many named exports as you like.**
 - `import * from "path"` means we want to import everything that is being exported from the exporting file!

## Q2. What is the importance of config.js file?

- Config. js allows developers to configure their applications in an XML block instead of hard-coding values inside their scripts or in JSON objects.

## Q3. What are React Hooks?

- React Hooks are nothing but JS functions that are utility functions given by React developers.
- They give use some superpowers in our functional components.
- They are written in react that we import from npm
- Without them, we would have to write long JS code to achieve those superpowers
- Most used Hooks: useState(), useEffect()

## Q4. Why do we need a useState() hook?

- useState() hook gives us a powerful state variable
- State variable means a variable which maintains the state of the component
- If the state gets changed/updated, it triggers the Reconciliation and leads to the re-render of the entire component.
