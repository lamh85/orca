CREATE DATABASE orca_development;

CREATE TABLE expenses (
  id integer PRIMARY KEY,
  name text UNIQUE NOT NULL,
  description text,
  amount numeric NOT NULL,
  period_length numeric NOT NULL,
  period_units text
    CONSTRAINT period_units_choices
    CHECK (period_units IN ('days', 'weeks', 'months', 'years'))
);

CREATE TABLE income_sources (
  id integer PRIMARY KEY,
  name text UNIQUE NOT NULL,
  description text,
  amount numeric NOT NULL,
  period_length numeric NOT NULL,
  period_units text
    CONSTRAINT period_units_choices
    CHECK (period_units IN ('days', 'weeks', 'months', 'years'))
);

ALTER TABLE expenses
  ALTER COLUMN amount SET DEFAULT 0,
  ALTER COLUMN period_length SET DEFAULT 1,
  ALTER COLUMN period_units SET DEFAULT 'months';

ALTER TABLE income_sources
  ALTER COLUMN amount SET DEFAULT 0,
  ALTER COLUMN period_length SET DEFAULT 1,
  ALTER COLUMN period_units SET DEFAULT 'years';

ALTER TABLE expenses
  DROP COLUMN id,
  ADD COLUMN id BIGSERIAL PRIMARY KEY;

ALTER TABLE income_sources
  DROP COLUMN id,
  ADD COLUMN id BIGSERIAL PRIMARY KEY;

ALTER TABLE expenses
  ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE income_sources
  ADD COLUMN created_at TIMESTAMP AT TIME ZONE 'UTC' DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN updated_at TIMESTAMP AT TIME ZONE 'UTC' DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- DUMMY DATA -----------------------------------

INSERT INTO expenses (name, description, amount, period_length, period_units)
VALUES ('Compass Card',
        'Monthly pass for public transit.',
        98,
        1,
        'months');