const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');
const users = require('../controllers/users');
const upload = require('../lib/upload');
const supercars = require('../controllers/supercars');

router.get('/', (req, res) => res.render('statics/index'));

// router.route('/supercars/new')
//   .get(supercars.new);

router.get('/supercars/map', (req, res) => res.render('supercars/map'));

router.get('/supercars/new', (req, res) => res.render('supercars/new'));

router.route('/supercars')
  .get(supercars.index)
  .post(upload.single('carpic'), supercars.create);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/register')
  .get(registrations.new)
  .post(upload.single('image'), registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/find-out-more', (req, res) => res.render('find-out-more'));

// app.get('/find-out-more', (req, res) => {
//   res.render('find-out-more');
// });

router.route('/logout')
  .get(sessions.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
