var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var mongoose = require('mongoose');

var picksSchema = new mongoose.Schema({
  name: { type: String, unique: true},
  dateCreated: Date,
  dateUpdated: Date,
  imgList: {
    uploadedPicks: Object
  }
}, { timestamps: true });

var Picks = mongoose.model('Picks', picksSchema);

module.exports = Picks;
