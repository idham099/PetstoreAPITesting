const newman = require('newman');

newman.run({
    collection: require('./Petstore_Test.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});
