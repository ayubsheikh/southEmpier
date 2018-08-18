const express = require('express')
const router = express.Router()
const ZoneController = require('../controllers/ZoneController')
const controllers = require('../controllers')

router.get('/:resource', function(req, res, next) {
    const resource = req.params.resource
    const controller = controllers[resource]

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: '+ resource 
        })
        return
    }

    controller.find(req.query, function(err, results){
        if(err){
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        res.json({
            confirmation: 'succes',
            results: results
        })
    })
})
router.get('/:resource/:id', function(req, res, next){
    const resource = req.params.resource
    const id = req.params.id
    const controller = controllers[resource]

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request: ' +resource
        })
    }

    controller.findById(id, function(err, result){
        if(err){
            res.json({
                confirmation: 'fail',
                message: 'NOT FOUND'
            })
            return
        }
        res.json({
            confirmation: 'succes',
            result: result
        })
    })

})

router.post('/:resource', function(req, res,next){
    const resource = req.params.resource
    const controller = controllers[resource]

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource  Request: ' +resource
        })
        return
    }

    controller.create(res.body, function(err, result){
        if(err){
            res.json({
                confirmation: 'fail',
                message: 'CANNOT CREATE'
            })
            return
        }
        res.json({
            confirmation: 'succes',
            result: result
        })
    })

})


module.exports = router