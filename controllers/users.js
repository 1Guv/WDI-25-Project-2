const User = require('../models/user');
const Supercar = require('../models/supercar');

function mapRoute(req, res, next) {
  User
    .find()
    .exec()
    .then((users) => {
      res.render('supercars/map', { users });
    })
    .catch(next);
}

function indexRoute(req, res) {
  User
    .find()
    .exec()
    .then((users) => {
      res.render('users/index', { users });
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function newRoute(req, res){
  res.render('users/new');
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.status(404).send('Not found');

      Supercar
        .find({createdBy: user.id})
        .exec()
        .then((cars) => {
          res.render('users/show', { user, cars });
        })
        .catch(next);
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function createRoute(req, res) {
  User
    .create(req.body)
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function editRoute(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.status(404).send('Not found');
      res.render('users/edit', { user });
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function updateRoute(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.status(404).send('Not found');

      for(const field in req.body) {
        user[field] = req.body[field];
      }

      return user.save();
    })
    .then((user) => {
      res.redirect(`/users/${user.id}`);
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

function deleteRoute(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.status(404).send('Not found');

      return user.remove();
    })
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

module.exports = {
  map: mapRoute,
  index: indexRoute,
  new: newRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};




// const User = require('../models/user');
//
// function usersIndex(req, res) {
//   User.find((err, users) => {
//     if (err) return res.status(500).json({ message: "Something went wrong." });
//     return res.status(200).json(users);
//   });
// }
//
// function usersShow(req, res) {
//   User.findById(req.params.id, (err, user) => {
//     if (err) return res.status(500).json({ message: "Something went wrong." });
//     if (!user) return res.status(404).json({ message: "User not found." });
//     return res.render('users/show')
//   });
// }
//
// function usersUpdate(req, res) {
//   User.findByIdAndUpdate(req.params.id, req.body, { new: true },  (err, user) => {
//     if (err) return res.status(500).json({ message: "Something went wrong." });
//     if (!user) return res.status(404).json({ message: "User not found." });
//     return res.status(200).json(user);
//   });
// }
//
// function usersDelete(req, res) {
//   User.findByIdAndRemove(req.params.id, (err, user) => {
//     if (err) return res.status(500).json({ message: "Something went wrong." });
//     if (!user) return res.status(404).json({ message: "User not found." });
//     return res.status(204).send();
//   });
// }
//
// module.exports = {
//   index:  usersIndex,
//   show:   usersShow,
//   update: usersUpdate,
//   delete: usersDelete
// };
