/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};
/**
 * GET /
 * Enriched Env page.
 */
exports.getEnrichedEnv = (req, res) => {
  res.render('enrichedEnv', {
    title: 'Enriched Environment'
  });
};

/**
 * GET /
 * Enriched Env page.
 */
exports.getPersonalArea = (req, res) => {
  res.render('personalArea', {
    title: 'Personal Area'
  });
};
/**
 * GET /
 * Enriched Env page.
 */
exports.getContactTeam = (req, res) => {
  res.render('contactTeam', {
    title: 'Contact Medical Team'
  });
};
/**
 * GET /
 * Team page.
 */
exports.getTeam = (req, res) => {
  res.render('team', {
    title: 'Team'
  });
};