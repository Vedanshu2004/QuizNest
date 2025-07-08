const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
