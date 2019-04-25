const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');
const cors_user = require ('cors');

module.exports.key=process.env.SECRET_KEY = 'secret';

module.exports = function (router) {

  router.get('', function(req, res) {
    
      global.db.Users.findAll().then(function(user) {

        if (user) { return user; }
        
      }).then(function(user) {
        res.json(user);
      });

    
  });
  router.post('/add', function(req, res) {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    global.db.Users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                const hash =bcrypt.hashSync(userData.password, 10)
                userData.password=hash
                global.db.Users.create(userData)
                    .then(user => {
                        let Token =  jwt.sign(user.dataValues, process.env.SECRET_KEY)
                        res.json({ token: Token})
                    })
                        .catch (err => {
                            res.json('error: ' + err)
                        })
            }
            else {
                res.json({error: 'User already exists'})
            }
        })
            .catch (err => {
                res.json('error: ' + err)
            })
});


router.post('/login',function(req, res) {
  global.db.Users.findOne({
      where: {
          email: req.body.email
      }
  })
      .then(user => {
      if (bcrypt.compareSync (req.body.password, user.password)){
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY)
          res.json({ message: 'User logged in....',
      token: token})
      }
      else {
          res.send('User does not exist')
      }
      })
      .catch (err=> {
          res.send('error: '+ err)
      })
});

};
