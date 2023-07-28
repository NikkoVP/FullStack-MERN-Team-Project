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
  day: {
    type: Number, // Assuming you want to use numbers for days (Day 1, Day 2, etc.)
    // required: true,
  },
  place: {
    type: String,
    // required: true,
  },
  /* we will finalize once user model is available ,temporay use userID as String from Mock data */
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   // required: true,
  // },
  userID: {
    type: String,
    // required: true,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
