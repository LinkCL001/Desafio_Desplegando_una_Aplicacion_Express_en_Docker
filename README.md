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

CREATE TABLE IF NOT EXISTS todos (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(25),
    descripcion VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

## Correr localmente

Primero editar el .env con tus propios datos

```bash
npm i

# start correr con normalidad
npm start

# si quieres seguir desarrollando
npm run dev
```

## Correr en Docker

```bash
# construir la imagen 
docker build -t node-app .

# correr contenedor, recordando utilizar tus propios datos
docker run -dp 4000:4000 -e DATABASE_URL=postgresql://user:password@host:port/dbname node-app

```