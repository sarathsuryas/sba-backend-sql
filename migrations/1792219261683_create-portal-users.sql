-- Up Migration
CREATE TABLE IF NOT EXISTS portal_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    role_id INT REFERENCES roles(id)
);

-- Down Migration
DROP TABLE IF EXISTS portal_users;