const Supercar = require('../models/supercar');

function indexRoute(req, res, next) {
  Supercar
    .find()
    .populate('createdBy')
    .exec()
    .then((supercars) => res.render('supercars/index', { supercars }))
    .catch(next);
}

function newRoute(req, res) {
  return res.render('supercars/new');
}

function createRoute(req, res, next) {

  req.body.createdBy = req.user;

  Supercar
    .create(req.body)
    .then(() => res.redirect('/supercars'))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/supercars/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function showRoute(req, res, next) {
  Supercar
    .findById(req.params.id)
    .populate('createdBy')
    .populate('comments.createdBy')
    .exec()
    .then((car) => {
      if(!car) return res.notFound();
      return res.render('supercars/show', { car });
    })
    .catch(next);
}

function editRoute(req, res, next) {
  Supercar
    .findById(req.params.id)
    .exec()
    .then((car) => {
      if(req.user.username === car.createdBy.username) {
        return res.render('supercars/edit', { car });

      } return res.render('supercars/show', { car });

    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Supercar
    .findById(req.params.id)
    .exec()
    .then((car) => {
      if(!car) return res.notFound();

      for(const field in req.body) {
        car[field] = req.body[field];
      }

      return car.save();
    })
    .then(() => res.redirect(`/supercars/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/supercars/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Supercar
    .findById(req.params.id)
    .exec()
    .then((car) => {
      if(!car) return res.notFound();
      return car.remove();
    })
    .then(() => res.redirect('/supercars'))
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Supercar
    .findById(req.params.id)
    .exec()
    .then((car) => {
      if(!car) return res.notFound();

      car.comments.push(req.body); // create an embedded record
      return car.save();
    })
    .then((car) => res.redirect(`/supercars/${car.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Supercar
    .findById(req.params.id)
    .exec()
    .then((car) => {
      if(!car) return res.notFound();
      // get the embedded record by its id
      const comment = car.comments.id(req.params.commentId);
      comment.remove();

      return car.save();
    })
    .then((car) => res.redirect(`/supercars/${car.id}`))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
