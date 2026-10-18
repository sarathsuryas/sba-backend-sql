-- Up Migration
INSERT INTO roles (name) VALUES ('admin'), ('staff'), ('customer');
-- Down Migration
DELETE FROM roles WHERE name IN ('admin', 'staff', 'customer');