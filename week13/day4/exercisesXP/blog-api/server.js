const express = require('express')

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
});

// Create a data array to simulate a database.Each item in the array should represent a blog post with properties like id, title, and content.

const posts = [{ id: 1, title: 'How to write JS', content: 'all the content goes here, Etc etc etc' }, { id: 2, title: 'Another Blog Post', content: 'all the content goes here, Etc etc etc' }, { id: 3, title: 'The Final Blog Post', content: 'all the content goes here, Etc etc etc' }]

/* Implement the following routes using Express:
GET /posts: Return a list of all blog posts.
GET /posts/:id: Return a specific blog post based on its id.
POST /posts: Create a new blog post.
PUT /posts/:id: Update an existing blog post.
DELETE /posts/:id: Delete a blog post.

Implement error handling for invalid routes and server errors.

Start the Express app and listen on a specified port (e.g., 3000).*/

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

app.get('/posts/:postid', (req, res) => {
    const { postid } = req.params;
    const post = posts.find(post => post.id == postid);
    if (post === undefined) {
        res.status(404).json({ msg: 'post not found' });
        return;
    }
    res.status(200).json(post);
});

app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.json({ msg: 'new post created', posts })
});

app.put('/posts/:postid', (req, res) => {
    const { title, content } = req.body;
    const { postid } = req.params;
    const index = posts.findIndex(post => post.id == postid)
    if (index === -1) {
        res.status(404).json({ msg: 'post to modify not found' })
        return
    }
    posts[index] = { ...posts[index], title, content };
    res.json(posts);
});

app.delete('/posts/:postid', (req, res) => {
    const { postid } = req.params;
    const index = posts.findIndex((post) => post.id == postid);
    if (index === -1) {
        res.status(404).json({ msg: 'post to modify not found' })
        return
    }
    posts.splice(index, 1);
    res.json(posts)
});

// invalid routes
app.use((req, res) => {
    res.status(404).json({ msg: 'route not found' });
});

// server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'something went wrong' });
});