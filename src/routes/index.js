const { Router } = require("express");
const router = Router();

// routers
router.get("/test", (req, res) => {
  const data = {
    name: "Fazt",
    website: "Faztweb.com",
  };
  res.json(data);
});

module.exports = router;
