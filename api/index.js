const {
    toLambda
} = require("probot-serverless-now");

const applicationFunction = require("../");

module.exports = toLambda(applicationFunction);
