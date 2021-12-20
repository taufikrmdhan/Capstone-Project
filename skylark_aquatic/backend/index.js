import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import dhtRoutes from "./routes/sensor.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json({limit:'1024mb'}));
app.use('/products', productRoutes);
app.use(cors());
app.use(express.json({limit:'1024mb'}));
app.use('/dht11', dhtRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));