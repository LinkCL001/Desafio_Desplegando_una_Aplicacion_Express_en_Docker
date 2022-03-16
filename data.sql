-- // ● id (idealmente utilizar extensión de postgres uuid)
-- // CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- // id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
-- // ● nombre
-- // ● descripción
-- // ● fecha de creación (automática desde postgres)


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS todos (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(25),
    descripcion VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

