import { Schema, model, Types } from "mongoose";
import User from "./User.js";
import Location from "./location.js";

const ItinerarySchema = new Schema({

  location: {
    type: Types.ObjectId,
    ref: Location,
  },
  user: {
    type: Types.ObjectId,
    ref: User,
  },
  thingsToDo: String
});

const Itinerary = model("Itinerary", ItinerarySchema);

export default Itinerary;