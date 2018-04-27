const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
  // Can put as many as middlewares argus
  app.post('/api/surveys', requireLogin, (req, res) => {

  })
}
