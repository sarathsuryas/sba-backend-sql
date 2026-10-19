-- Up Migration
-- Dev-only seed admins (plain-text passwords)
INSERT INTO portal_users (email, password, role_id) VALUES
    ('admin@sba.local',  'Admin@123',  (SELECT id FROM roles WHERE name = 'admin')),
    ('admin2@sba.local', 'Admin2@123', (SELECT id FROM roles WHERE name = 'admin')),
    ('admin3@sba.local', 'Admin3@123', (SELECT id FROM roles WHERE name = 'admin'))
ON CONFLICT (email) DO NOTHING;

-- Down Migration
DELETE FROM portal_users WHERE email IN ('admin@sba.local', 'admin2@sba.local', 'admin3@sba.local');
