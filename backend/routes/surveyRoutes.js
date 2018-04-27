const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
module.exports = app => {
  // Can put as many as middlewares argus
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

  })
}
