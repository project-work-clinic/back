import { Schema, model } from ' mongoose'

const workSchema = new Schema({

  date: { type: Date, default: Date.now },
  name: String,
  file: String,
  branch: String,
  treatment: String,
  paymentMade: { type: Number, default: 0 },
  progressed: { type: Boolean, default: false },
  commission: { type: Number, default: 0 },
  status: String,
  confirmedAmount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true })

const monthlyWorkSchema = new Schema({
  month: {
    type: String,
    required: true,
    enum: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
  },
  year: { type: Number, required: true },
  works: [workSchema]
}, { timestamps: true })

export default model('MonthlyWork', monthlyWorkSchema)
