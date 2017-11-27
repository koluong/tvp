const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
  nameContact: String,
  emailContact: String,
  phoneContact: String,
  production: String,
  productionEmail: String,
  productionPhone: {
    type: String,
    default: 'none'
  },
  equipment: {
    macDesktop: {
      type: Number,
      default: 0
    },
    macLaptop: {
      type: Number,
      default: 0
    },
    pcDesktop: {
      type: Number,
      default: 0
    },
    pcLaptop: {
      type: Number,
      default: 0
    },
    printer: {
      type: Number,
      default: 0
    },
    monitor: {
      type: Number,
      default: 0
    },
    ipad: {
      type: Number,
      default: 0
    },
    tv: {
      type: Number,
      default: 0
    }
  },
  detail: String,
  department: String,
  location: String,
  lat: Number,
  lng: Number,
  timeZone: String,
  businessDivision: String,
  dateBy: String,
  note: {
    type: String,
    default: 'none'
  },
  dateCreated: {
    type: String,
    default: Date.now()
  },
  status: {
    type: String,
    defaut: 'requested'
  },
  activeSwitch: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Order', mongooseSchema);
