import { Schema,model,Types } from "mongoose";
import User from "./User.js";

const LocationSchema = new Schema({

  user: {
    type: Types.ObjectId,
    ref: User,
  },
  location : String,
  startDate: String,
  endDate : String

});

const Location = model("Location", LocationSchema);

export default Location;