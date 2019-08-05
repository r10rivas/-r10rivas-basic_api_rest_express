import { Router } from "express";
import connect from "./../database";
import { ObjectID } from "mongodb";

const router =  Router();

// Index
router.get('/', async (req, res) => {
  const db = await connect();
  const tasks = await db.collection('tasks').find({}).toArray();
  res.json(tasks);
});

// Create
router.post('/', async (req, res) => {
  const task = {
    title: req.body.title,
    description: req.body.description,
  };
  const db = await connect();
  const result = await db.collection('tasks').insert(task);
  res.json(result.ops[0]);
});

// Show
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const db = await connect();
  const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
   res.json(result);
});

// Update
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updateTask = {
    title: req.body.title,
    description: req.body.description,
  };
  const db = await connect();
  const result = await db.collection('tasks').updateOne({_id: ObjectID}, {$set: updateTask});
   res.json({
     message: `Task id: ${id} updated`
    });
});

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection('tasks').deleteOne({_id: ObjectID(id)});
  res.json({
    message: `Task id: ${id} deleted`,
    result: result.result
  });
});

export default router
