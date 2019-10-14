import mongoose from 'mongoose';

const CharacterSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Character', CharacterSchema);
