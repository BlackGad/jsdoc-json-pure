var fs = require('fs');

/**
 * Publish hook for the JSDoc template.  Writes to JSON stdout.
 * @param {function} data The root of the Taffy DB containing doclet records.
 * @param {Object} opts Options.
 */
exports.publish = function(data, opts) {

  var docs = data().get().filter(function(doc) {
    delete doc['code'];
    delete doc['meta'];
    delete doc['comment'];
    delete doc['___s'];
    delete doc['___id'];
    return !doc.undocumented;
  });

  fs.writeFileSync(opts.destination, JSON.stringify({docs: docs}, null, 2));

};
