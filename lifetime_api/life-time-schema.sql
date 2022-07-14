CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
   first_name  TEXT NOT NULL,
   username     TEXT NOT NULL UNIQUE,
   last_name    TEXT NOT NULL,
   password     TEXT NOT NULL,
   email        TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1)
);