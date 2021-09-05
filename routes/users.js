var express = require('express');
var router = express.Router();
const user  = require('../models/user')

/* GET users  */
router.get('/', async function(req, res, next) {
  var a = await user.find()
  res.send(a);
});

/* create users  */
router.post('/', async function(req, res, next) {
  const b = req.body
  await user.create(b)
  res.send('Inserted Successfully');
});

/* update user */
router.put('/:id',async function(req, res, next) {
  const userid = req.params.id
  await user.updateOne({
    _id:userid
  },{
    $set:req.body
  })
  res.send('Updated Successfully');
});

/* Delete users */
router.delete('/:a', async function(req, res, next) {
  const userid = req.params.a
  await user.findByIdAndDelete
  // await user.deleteOne({
  //   // _id:userid
  // })
  res.send('Deleted successfully');
});

module.exports = router;
