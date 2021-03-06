const mongoose = require('mongoose');
const { Schema } = mongoose;

const pollSchema = new Schema({
  question: String,
  options: [{ type: Schema.Types.ObjectId, ref: 'PollOption'}],
  voters: [{ type: String}],
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
