const { Tag } = require("../models");

const tagData = [
  {
    name: "Australia",
  },
  {
    name: "foodlover",
  },
  {
    name: "art",
  },
  {
    name: "nature",
  },
  {
    name: "travel",
  },
  {
    name: "adventure",
  },
  {
    name: "motivation",
  },
  {
    name: "repost",
  },
  {
    name: "picoftheday",
  },
  {
    name: "family",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
