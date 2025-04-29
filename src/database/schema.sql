CREATE DATABASE marvel;

\c marvel;

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    teams VARCHAR(255) NOT NULL
);

CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name_characters VARCHAR(255) UNIQUE NOT NULL,
    publishers_id INTEGER REFERENCES publishers(id) ON DELETE SET NULL
);

INSERT INTO publishers (name, teams) VALUES
    ('Marvel Comics', 'Marvel'),
    ('DC Comics', 'DC'),
    ('Fawcett Comics', 'Fawcett');

INSERT INTO heroes (name_characters, publishers_id) VALUES
    ('Thor', 1),
    ('Hulk', 1),
    ('Captain America', 1),
    ('Batman', 2),
    ('The Flash', 2),
    ('Batgirl', 2),
    ('Shazam', 3),
    ('Mary Marvel', 3),
    ('Minute-Man', 3);
