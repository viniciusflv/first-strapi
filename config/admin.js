module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "bb3f0597014cc562acd7aa25d0259253"),
  },
  watchIgnoreFiles: ["**/config/sync/**"],
});
