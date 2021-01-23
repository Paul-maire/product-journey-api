const casual = require('casual').fr_FR

module.exports = params => ({
    id: params ? params.id : casual.integer(0, 100),
    content: () => casual.sentences(n = casual.integer(0, 5)),
}) 