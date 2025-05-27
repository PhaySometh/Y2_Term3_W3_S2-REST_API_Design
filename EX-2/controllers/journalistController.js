import journalists from "../models/journalistModel.js";
import articles from "../models/articleModel.js";

// GET /journalists - List all journalists
export const getAllJournalists = (req, res) => {
    res.json(journalists);
}

// GET /journalists/:id - Get a journalist 
export const getJournalistById = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
}

// POST /journalists - Create new journalist
export const createNewJournalist = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newJournalist = {
        id: journalists.length + 1,
        name,
        email
    };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
}

// PUT /journalists/:id - Update journalist
export const updateJournalistInfo = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const { name, email } = req.body;

    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });

    if (name) journalist.name = name;
    if (email) journalist.email = email;

    res.json(journalist);
}

// DELETE /journalists/:id - Delete journalist
export const deleteJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const index = journalists.findIndex(j => j.id === journalistId);
    if (index === -1) return res.status(404).json({ error: 'Journalist not found' });

    journalists.splice(index, 1);
    res.status(204).send();
}

// GET /journalists/:id/articles - Get articles by journalist
export const getArticlesByJournalistId = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const articlesByJournalist = articles.filter(a => a.journalistId === journalistId);
    if (articlesByJournalist.length === 0) return res.status(404).json({ error: 'No articles found for this journalist' });
    res.json(articlesByJournalist);
}