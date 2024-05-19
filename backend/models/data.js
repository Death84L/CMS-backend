import mongoose from "mongoose";

const { Schema, model } = mongoose;

const dataSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: false },
  schema: {
    type: Schema.Types.ObjectId,
    ref: "SchemaDefinition",
    required: false,
  },
  data: Schema.Types.Mixed, // Store data flexibly
});

const Data = model("Data", dataSchema);

export default Data;
