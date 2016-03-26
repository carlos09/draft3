var _ = require('lodash');
var async = require('async');
var passport = require('passport');
var Picks = require('../models/Picks');

/**
 * GET /
 * Home page.
 */
exports.getPicks = function(req, res) {
  console.log('** get picks req is: ', req.body)
  res.render('picks/picks', {
    title: 'Picks'
  });
};

exports.getPicksCreated = function(req, res) {
  console.log('*** get picks');
  res.render('picks/createpicks', {
    title: 'Create Picks'
  });
}

exports.postPicksCreated = function(req, res, next) {
  console.log('post picks', req.body);
  var set = new Picks({
    name: req.body.name,
    dateCreated: req.body.dateCreated,
    dateUpdated: req.body.dateUpdated,
    imgList: {
      uploadedPicks: req.body.imgList.uploadedPicks
    }
  });

  Picks.findOne({ name: req.body.name}, function(err, existingSet) {
    if (existingSet) {
      req.flash('errors', { msg: 'Picks set with the same date already exists...'});
      return res.redirect('/picks/create');
    }

    set.save(function(err) {
      if (err) {
        return next(err);
      }
    })
    console.log('save done', set);
  })
}
