import { response, Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService"

const categoriesRoutes = Router();
const categoriesRepo = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const createCategoryService = new CreateCategoryService(categoriesRepo);
    createCategoryService.execute({ name, description })
    return res.status(201).send();
})

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepo.list();

    return res.json(all)
})


export { categoriesRoutes };

