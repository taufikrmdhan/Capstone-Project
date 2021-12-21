import Dht from "../models/dht.js";

export const getAllDht11 = async (req, res) => {
    try {
        const dht11 = await Dht.findAll();
        res.json(dht11);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const getDhtById = async (req, res) => {
    try {
        const dht = await Dht.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(dht[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const createDht = async (req, res) => {
    try {
        await Dht.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const updateDht = async (req, res) => {
    try {
        await Dht.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
export const deleteDht = async (req, res) => {
    try {
        await Dht.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
