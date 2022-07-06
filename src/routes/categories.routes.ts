import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepo = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    
    categoriesRepo.create({name, description});
    

    return res.status(201).send();
})

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepo.list();

    return res.json(all)
})


export { categoriesRoutes };

