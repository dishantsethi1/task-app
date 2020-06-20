const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Task = require('../models/task')


router.get('/tasks', auth, async (req, res) => {
    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(500).send()
    // })

    try {
        const task = await Task.find({
            owner: req.user._id
        })
        res.send(task)
    } catch (e) {
        res.status(501).send()
    }
})


router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
    try {
        //const task = await Task.findById(_id)
        const task = await Task.findOne({
            _id,
            owner: req.user._id
        })
        if (!task) return res.status(404).send()
        res.send(task)
    } catch (e) {
        res.status(501).send()
    }
})


router.post('/tasks', auth, async (req, res) => {
    // const task = new Task(req.body)
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.patch('/tasks/:id',auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const idallowed = ['description', 'completed']
    const isvalid = updates.every((update) => {
        return idallowed.includes(update)
    })

    if (!isvalid) return res.status(400).send({
        error: 'not valid bro'
    })

    const _id = req.params.id

    try {

        const task = await Task.findOne({
            _id,
            owner: req.user._id
        })


        if (!task) return res.status(404).send()

        updates.forEach((update) => {
            task[update] = req.body[update]
        })

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete('/tasks/:id',auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOneAndDelete({_id,owner:req.user._id})
        if (!task) return res.status(404).send()
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router