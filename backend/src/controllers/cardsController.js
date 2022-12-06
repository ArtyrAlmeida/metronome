import mongoose from "mongoose";
import Card from "../models/cardSchema.js";

const getCards = async (req, res) => {
    const cards = await Card.find();
    res.status(200).json(cards);
};

const getOneCard = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Card not found" });
    }

    const card = await Card.findById(id);
    
    if(!card) {
        return res.status(404).json({ error: "Card not found" });
    }

    res.status(200).json(card);
}

const createCard = async (req, res) => {
    const example = { name: "Card", time: 3, initialVel: 3, currentVel: 4, maxVel: 41 }
    //const body = req.body
    try {
        const card = await Card.create(example);
        res.status(201).json(card);
    } catch (error) {
        res.status(400).json({ error })
    }
};

const deleteCard = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such card' });
    }
    
    const card = await Card.findByIdAndDelete(id);

    if(!card) return res.status(404).json({ error: 'No such card' });

    res.status(200).json(card);
    
};

const updateCard = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such card' });
    }

    const card = await Card.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if(!card) {
        return res.status(404).json({ error: 'No such card' });
    }

    res.status(200).json(card);
}

export {
    getCards,
    createCard,
    deleteCard,
    updateCard,
    getOneCard
}