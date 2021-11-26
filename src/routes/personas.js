const { Router } = require("express");
const router = Router();

// routers
router.get("/personas", (req, res) => {
  const data = {
    name: "Fazt",
    website: "Faztweb.com",
  };
  res.json('get');
});

router.post("/personas", (req, res) => {
    const data = {
      name: "Fazt",
      website: "Faztweb.com",
    };
    res.json('post');
  });
  router.delete("/personas", (req, res) => {
    const data = {
      name: "Fazt",
      website: "Faztweb.com",
    };
    res.send('delete');
  });
  router.put("/personas", (req, res) => {
    const data = {
      name: "Fazt",
      website: "Faztweb.com",
    };
    res.json('put');
  });

module.exports = router;
