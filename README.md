## Setup
* Create a folder called 'TypeScript 101'
* Create a file called main.ts
* Download typescript `npm install -g typescript`
* Check if it installed correctly `tsc -v`
* Create a file called index.html
* Go to http://htmlshell.com/ and get markup. -> Include X-UA-Compatible Meta Tag? yes Include Viewport     Meta Tag? yes
* Run `npm init` => Creates a file called package.json
* Install lite-server `npm install lite-server --save-dev`
* Add a start script to your package.json `"start": "lite-server"`
* Run `tsc --init` to generate TS config file.
* Run `tsc` to autocompile all TS files to JS.
* Run `tsc --watch` to watch for changes and autocompile is file changed.

## Data Types
* Number
* String
* Boolean
* Any
* Arrays
* Void

## Interfaces
* Type check an object
* Disappears on JS compilation

## Classes
* Inheritance
* Function overriding

## Generics
* Templates that allow same function to accept arguments of various types
* <T> gets replaced by datatype when compiled.
* Generics *preserve* the types that go in and out of functions so they are better than using the *any*     datatype
*  