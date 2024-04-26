import express from 'express';
import { Todo } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const { todo } = req.body;
  const newTodo = await Todo.create({ todo });
  res.json(newTodo);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.destroy({
    where: {
      id,
    },
  });

  res.sendStatus(200);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.sendStatus(404);
    }

    todo.done = !todo.done;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  try {
    await Todo.update(
      { todo },
      {
        where: { id },
      },
    );
    res.sendStatus(201);
  } catch {
    res.sendStatus(400);
  }
});

export default router;
