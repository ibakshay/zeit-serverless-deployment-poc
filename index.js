/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */

module.exports = app => {
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const issueComment = context.issue({
      body: 'Thanks for opening this issue!'
    })
    return context.github.issues.createComment(issueComment)
  })

  // Get an express router to expose new HTTP endpoints
  const app1 = app.route('/')

  // Index page

  // Index page
  app1.get('/', (req, res) => {
    res.send("Heelo world")
  })



}