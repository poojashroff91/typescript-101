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

## Namespaces
* Organize Application with JS Objects
* Can be split over multiple files
* No module loader required
* Dependencies get difficult to manage in bigger applications

## Modules
* Organize Application with real modules.
* We can have different files and need to import these into our current file
* We need a module loader to bundle all JS files together
* Explicit declaration makes managing dependencies easy
* Better for large/medium applications
* SystemJs is a module loader
* Run systemjs `npm install systemjs --save` 
* Check https://github.com/systemjs/systemjs for code snippet on importing systemjs
* Tell SystemJs what the base URL and default extension is.
* `<script>
        SystemJS.config({
            baseURL: '/',
            packages: {
                '/': {
                    defaultExtension: 'js'
                }
            }
        });
        SystemJS.import('main.js');
    </script>`


## Import and Export
* Import paths are relative or absolute, TypeScript figures out smartly what path you're using
* See comments for import statements in main.ts 

## Using third party libraries.
* One way to do this is to install the library and use map in SystemJs to import the script from node_modules/
* This is not ideal as it still shows compile errors.
* A better way is to use declaration files, these help translate TS into JS.
* Install typings `npm install -g typings`
* Use `typings install dt~jquery --global --save`