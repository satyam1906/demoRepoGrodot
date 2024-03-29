const express = require('express') ;
const router = express.Router() ;
const Post = require('../MODELS/Post')
router.get('/',(req,res)=>{
    res.send('We are on posts') ;
}) ;

// router.get('/specific',(req,res)=>{
//     res.send('Specific Post') ;
// })

const greeting = ()=>{
    console.log('Hello World') ;
}
const salute = ()=>{
    console.log('Salaam Shabji') ;
}
const argue = ()=>{
    console.log('Please behave!') ;
}

router.post('/',(req,res)=>{
    const posts = new Post({
        title: req.body.title ,
        description: req.body.description
    });
    posts.save().then(data=>{
        res.json(data) ;
    }).catch(err=>{
        res.json({message:error}) 
    })
})

module.exports = router ;