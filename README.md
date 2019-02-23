# jsdoc-json-pure

A JSDoc template that generates JSON output (instead of HTML).

Basically [jsdoc-json](https://www.npmjs.com/package/jsdoc-json) package with additional JSON modifications.


## install

    npm install jsdoc-json-pure

## use

    jsdoc --template ./node_modules/jsdoc-json-pure --destination doc.json --recurse src

Provide the path to the output file with the `destination` option (parent directory must exist).  Note that as of JSDoc v3.5, you need to provide the path to the template directory (instead of specifying the package name).
