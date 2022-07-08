import { CategoriesRepository } from "../repositories/CategoriesRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepo: CategoriesRepository ) {}

    execute({ name, description }: IRequest): void{

        const categoryAldeadyExist = this.categoriesRepo.findByName(name);

        if(categoryAldeadyExist) {
            throw new Error("Category already exists!")
        }
    
        this.categoriesRepo.create({name, description});
    }
}


export { CreateCategoryService }