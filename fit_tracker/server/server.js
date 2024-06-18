const PORT = process.env.PORT ?? 8000;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server listen on PORT: ${PORT}`));
