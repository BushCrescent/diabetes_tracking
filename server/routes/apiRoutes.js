const router = require("express").Router();
const connection = require("../config/configuration");

router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    `SELECT *
        FROM sugar_levels
        JOIN user ON suger_levels.user_id = user.id
        WHERE user.id = ${id};
    `,
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
});

module.exports = router;
