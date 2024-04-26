import express from 'express';
import { Todo } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const todos = await Todo.findAll();
  res.render('IndexPage', { todos });
});

router.get('/todos/change/:id', async (req, res) => {
  const { id } = req.params;
  if (!Number.isNaN(+id)) {
    const todo = await Todo.findByPk(id);
    res.render('TodoChangePage', { todo });
  } else {
    console.log('error');
  }
});

router.get('*', (req, res) => {
  res.render('NotFoundPage');
});

export default router;
