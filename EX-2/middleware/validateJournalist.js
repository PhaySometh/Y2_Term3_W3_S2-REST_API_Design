const validateJournalist = (req, res, next) => {
    const { name, email} = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Journalist name and email are required' });
    }
    next();
};

export default validateJournalist;
