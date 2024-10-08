import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
// bookingSchema.pre(/^find/, function (next) {
//   this.populate("user").populate({
//     path: "doctor",
//   });
//   next();
// });
bookingSchema.pre(/^find/, function (next) {
  this.populate("user").populate("doctor");
  next();
});
export default mongoose.model("Booking", bookingSchema);
