const { PrismaClient } = require("@prisma/client");

declare global {
    namespace globalThis{
        var primadb: PrismaClient
    }
}