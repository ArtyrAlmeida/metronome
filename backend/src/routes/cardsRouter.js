import { Router } from "express";
import { createCard, deleteCard, getCards, getOneCard, updateCard } from "../controllers/cardsController.js";

const router = new Router();

router.get('/', getCards);
router.get('/:id', getOneCard);
router.post('/', createCard);
router.delete('/:id', deleteCard);
router.patch('/:id', updateCard);

export { router as cardsRouter };