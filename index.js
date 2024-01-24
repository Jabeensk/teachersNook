import './backend/localEnv.js';
import {conn} from './backend/db/conn.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

import usersRoutes from './backend/routes/users.js';
import profileRoutes from './backend/routes/profiles.js';
import recipesRoutes from './backend/routes/recipes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

conn();

app.use('/api/users', usersRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/recipes', recipesRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});





app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});