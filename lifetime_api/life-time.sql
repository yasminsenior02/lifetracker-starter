\echo 'Delete and recreate life_time db?'
\prompt 'return for yes or control-C to cancel >' answer

DROP DATABASE life_time;
CREATE DATABASE life_time;
\connect life_time;

\i life-time-schema.sql