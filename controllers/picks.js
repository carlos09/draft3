/**
 * GET /
 * Home page.
 */
exports.getPicks = function(req, res) {
  res.render('picks/picks', {
    title: 'Picks'
  });
};

exports.getPicksCreated = function(req, res) {
  res.render('picks/createpicks', {
    title: 'Create Picks'
  });
}

exports.postPicksCreated = function(req, res) {
  res.render('picks/createpicks', {
    title: 'Create Picks'
  });
}
