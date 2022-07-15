CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
   first_name  TEXT NOT NULL,
   username     TEXT NOT NULL UNIQUE,
   last_name    TEXT NOT NULL,
   password     TEXT NOT NULL,
   email        TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1)
);

CREATE TABLE nutrition (
    id SERIAL PRIMARY KEY,
    nutrit_id INTEGER NOT NULL,
    nutrit_name   TEXT NOT NULL,
    category TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    calories INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    FOREIGN KEY (nutrit_id) REFERENCES users(id) ON DELETE CASCADE
);

-- CREATE TABLE sleep (
--     id SERIAL PRIMARY KEY,
--   sleep_id INTEGER NOT NULL,
--   createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
--    startDate TIMESTAMP NOT NULL
--     endDate TIMESTAMP  NOT NULL,
--     FOREIGN KEY (sleep_id) REFERENCES users(id) ON DELETE CASCADE
-- )
CREATE TABLE exercise (
    id SERIAL PRIMARY KEY,
    exercise_id INTEGER NOT NULL,
    exercise_name   TEXT NOT NULL,
    category TEXT NOT NULL,
      duration INTEGER NOT NULL,
     intensity INTEGER NOT NULL,
    FOREIGN KEY (exercise_id) REFERENCES users(id) ON DELETE CASCADE
);