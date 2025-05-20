const validateArticle = (req, res, next) => {
    const { title, content, categoryId, journalistId } = req.body;
    if (!title || !content || !categoryId || !journalistId) {
        return res.status(400).json({ error: 'Article title, content, categoryId, and journalistId are required' });
    }
    next();
};

export default validateArticle;