module.exports = process.env.NODE_ENV === "test"
  ? { presets: ["next/babel"] }
  : {};
