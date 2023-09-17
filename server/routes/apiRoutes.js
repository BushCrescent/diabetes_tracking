const router = require("express").Router();
const connection = require("../config/configuration");

router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    `SELECT *
        FROM sugar_levels
        JOIN user ON sugar_levels.user_id = user.id
        WHERE user.id = ${id};
    `,
    (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
    }
  );
});

router.post("/user/sugar-level", (req, res) => {
  const { id, level, date } = req.body;

  console.log(req.body);

  connection.query(
    `
      INSERT INTO sugar_levels (date, level, user_id)
          VALUES
          ("${new Date(date)
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")}", ${level}, ${id});
    `,
    (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
    }
  );
});

module.exports = router;
