const validateCategory = (req, res, next) => {
    const name = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Category name are required' });
    }
    next();
};

export default validateCategory;
