require("dotenv").config();

const app = require("./app");
const pool = require("./db/config");

const PORT = process.env.PORT || 3000;

pool.connect()
  .then(() => console.log("🟢 PostgreSQL conectado correctamente"))
  .catch((err) => console.error("🔴 Error DB:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});