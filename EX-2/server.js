import express from 'express';
import articleRouter from './routes/articleRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import journalistRouter from './routes/journalistRouter.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/articles', articleRouter);
app.use('/categories', categoryRouter);
app.use('/journalists', journalistRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});