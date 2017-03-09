const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Supercar = require('../models/supercar');
const User = require('../models/user');

Supercar.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'Guv',
    email: 'guv@apnaplates.com',
    password: 'password',
    fname: 'Guv',
    lname: 'Sandhu',
    postcode: 'E3 3DT',
    image: 'http://images.parkers.bauercdn.com/gallery-image/external/cfs/usedcfs-237524544419648/-1771403020/1752x1168/1.jpg',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Supercar
      .create([{
        make: 'Mercedes Benz',
        model: 'GLE 63',
        carpic: 'http://images.parkers.bauercdn.com/gallery-image/external/cfs/usedcfs-237524544419648/-1771403020/1752x1168/1.jpg',
        stars: 4,
        createdBy: users[0]
      }]);
  })



  .then((cars) => console.log(`${cars.length} cars created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
