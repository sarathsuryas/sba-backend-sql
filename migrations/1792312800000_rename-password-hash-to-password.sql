-- Up Migration
ALTER TABLE portal_users RENAME COLUMN password_hash TO password;

-- Down Migration
ALTER TABLE portal_users RENAME COLUMN password TO password_hash;
