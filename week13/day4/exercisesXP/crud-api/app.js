const express = require("express");
const { fetchPosts } = require("./data/dataService");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/api/posts", async (req, res) => {
    const posts = await fetchPosts();
    console.log("Data successfully retrieved and sent as response.");
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});