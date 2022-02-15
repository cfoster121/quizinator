
const router = require("express").Router();
const upload = require('../../utils/uploadMiddleware');
const Resize = require('./Resize');
const path = require('path');

router.post('/:id', upload.single('image'), async function (req, res) {
    console.log(req.params.id);
    const imagePath = path.join(__dirname, '../../public/images/');
    const fileUpload = new Resize(imagePath, req.params.id);
    
    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    res.status(200).json({ name: filename });
    
  });



  
  module.exports = router;