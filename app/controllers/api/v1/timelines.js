const jwt = require ('jsonwebtoken');

module.exports = function (router) {

router.get('', function(req, res) {
    global.db.Timelines.findAll().then(timeline => {
        console.log("All users:", JSON.stringify(timeline, null, 4));
        res.json(timeline); 
      });
});

router.get('/timeline', function(req, res,next) {

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    
    global.db.Timelines.findAll({
        where: {userId: decoded.id},
        limit: req.query.limit || null,
        offset: req.query.offset || null,
        order: [['id', 'DESC']]
    }).then(timeline => {
       // console.log("All timelines:", JSON.stringify(timeline, null, 4));
        res.send(timeline); 
      });
    
});

router.get('/timeline/:id', function(req, res,next) {
    var tid = req.params.id;   
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    global.db.Users.findOne({
        where: {
            id: decoded.id,
        }
    })
    .then(user => {
        if (user) {
                global.db.Timelines.findOne({
                    where: {id: tid,
                    userId: decoded.id
                    }
                }).then(timeline => {
                // console.log("All timelines:", JSON.stringify(timeline, null, 4));
                    res.send(timeline); 
                });
            }
            else {
                res.send('User does not exist')
            }
        })
        .catch(err => {
            res.send('error: '+ err)
        })
    
});

router.post('/timeline', function(req, res) {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    
    global.db.Users.findOne({
        where: {
            id: decoded.id
        }
    })
        .then(user => {
            if (user) {
                const timelinedata = {
                    title: req.body.title,
                    description: req.body.description,
                    userId: user.id,
                };
                global.db.Timelines.create(timelinedata)
                    .then(
                        res.json({ timelinedata: timelinedata})
                    )
                        .catch (err => {
                            res.json('error: ' + err)
                        })
            }
            else {
                res.send('User does not exist')
            }
        })
        .catch(err => {
            res.send('error: '+ err)
        })
});

router.delete('/timeline/:id', function(req, res) {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    var tid = req.params.id;   
      
    global.db.Users.findOne({
        where: {
            id: decoded.id
        }
    })
    .then(user => {
        if (user) {
            global.db.Timelines.destroy({
                where: {
                    id: tid ,
                    userId: decoded.id
                }
            }).then( deletedTimeline => {
                if (deletedTimeline === 1){
                    res.json("Deleted Successfully.")
                }
                else  {
                    res.json("Cannot be deleted.")
        
                }
            }
            )
            .catch( err =>{
                res.json('error : '+ err)}
            )
        }
        else {
            res.send('User does not exist')
        }
    })
    .catch(err => {
        res.send('error: '+ err)
    })
   
});

router.put('/timeline/:id', function(req, res) {
    const tid = req.params.id;
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
   
      
    global.db.Users.findOne({
        where: {
            id: decoded.id
        }
    })
    .then(user => {
        if (user) {
            const newData = {  
                title: req.body.title ,
                description: req.body.description 
              };
              global.db.Timelines.update(newData, {where: { id: tid, userId: decoded.id} })  
              .then(updatedTimeline => {
                console.log(updatedTimeline)
                res.json('updated timeline')
              })   
              .catch(err =>{
                  res.json('error : ' + err)
              })
        }
        else {
            res.send('User does not exist')
        }
    })
    .catch(err => {
        res.send('error: '+ err)
    })
  
});
}
