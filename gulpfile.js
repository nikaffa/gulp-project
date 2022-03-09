const { src, dest } = require("gulp");

const mytask = (cb) => {
  console.log("hello");
  cb();
};

exports.mytask = mytask;