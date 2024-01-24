import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
  },
  instructions: {
    type: String,
  },
  
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
