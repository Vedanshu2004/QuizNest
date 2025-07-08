const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['General Knowledge', 'Science', 'History', 'Geography', 'Entertainment'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);

