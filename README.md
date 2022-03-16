## Estructura del proyecto

```bash
├── db.js
├── Dockerfile
├── rutas
│   ├── api.js
│   └── front.js
├── server.js
└── views
    ├── create.handlebars
    ├── delete.handlebars
    ├── error.handlebars
    ├── home.handlebars
    └── layouts
        └── main.handlebars
```

## Tabla PostgreSQL requerida

Antes de correr este proyecto asegúrate de tener esta tabla creada

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

## Correr localmente

Primero editáis el .env con tus propios datos

```bash
npm i

# correr normalmente
npm start

# o si quieres seguir desarrollando
npm run dev
```

## Correr en Docker

```bash
# construir la imagen 
docker build -t node-app .

# correr contenedor, recordando utilizar tus propios datos
docker run -dp 4000:4000 -e DATABASE_URL=postgresql://user:password@host:port/dbname node-app

```