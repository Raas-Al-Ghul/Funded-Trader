# 1- Bootstrap turborepo
-  npx create-turbo@latest

# 2.1- Install tailwind
- npm install tailwindcss @tailwindcss/postcss postcss

# 2.2- Create a postcss.config.mjs file
- const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;

# 2.3- Add an @import to ./user-app/app/globals.css
- @import "tailwindcss";

# 3.1- Adding Prisma
- Create a new db folder in packages/db

# 3.2- Initialise package.json
- npm init -y
- npx tsc --init

# 3.3- Update package.json
-  "name": "@trader/db

# 3.4- Update tsconfig.json
- {
    "extends": "@repo/typescript-config/base.json",
    "compilerOptions": {
      "outDir": "dist"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
  }

# 3.5- Running docker
- docker run --name trading -e POSTGRES_PASSWORD=raasalghul -d -p 1999:5432 -v trading:/var/lib/postgresql/data postgres
- url = 'postgresql://postgres:raasalghul@localhost:1999/postgres'

# 3.6- Migrate db
- npx prisma migrate dev --name init

# 3.7- generate client
- npx prisma generate








- npx prisma studio -> to see the tables in database