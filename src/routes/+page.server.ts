import { PrismaClient } from '@prisma/client'
import type { PageServerLoad } from "./$types"


export const load: PageServerLoad = async () => {
    const prisma = new PrismaClient();
    return {
        items: await prisma.item.findMany()
    } 
        
}
