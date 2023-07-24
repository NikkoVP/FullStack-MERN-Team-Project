import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  time: {
    type: String,
    default: null,
  },  
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
