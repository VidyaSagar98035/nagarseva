import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
================================
       NAGARSEVA BACKEND
================================
Server running on port: ${PORT}
API: http://localhost:${PORT}
Health: http://localhost:${PORT}/api/health
Status: Active
================================
    `);
});
