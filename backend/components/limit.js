import mongoose from  'mongoose';

const limiSchema = new mongoose.Schema({
  limit:String,
  deviceName:String,
  time:String,
});
const limitModel = mongoose.model('limit',limiSchema);
export default limitModel;

