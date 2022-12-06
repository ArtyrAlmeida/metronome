import { Router } from "express";

const router = new Router();

router.get('/', (req, res) => res.send("Cards"));

export { router as cardsRouter };