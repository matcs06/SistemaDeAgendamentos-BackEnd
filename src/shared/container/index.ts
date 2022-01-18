import { container, delay} from "tsyringe"
import { IAvailabilityRepository } from "../../modules/availability/repositories/IAvailabilityRepository"
import { AvailabilityRepository } from "../../modules/availability/repositories/implementations/AvailabilityRepository"

import { ProductsRepository } from "../../modules/product/repositories/implementations/ProductsRepository"
import { IProductsRepository } from "../../modules/product/repositories/IProductsRepository"

import { UserRepository} from "../../modules/users/repositories/implementations/UserRepository"
import {IUserRepository} from "../../modules/users/repositories/IUserRepository"

container.registerSingleton<IProductsRepository>(
   "ProductsRepository", ProductsRepository
)

container.registerSingleton<IUserRepository>(
   "UserRepository", 
   delay(() => UserRepository) 
)

container.registerSingleton<IAvailabilityRepository>(
   "AvailabilityRepository", 
   delay(() => AvailabilityRepository) 
)
