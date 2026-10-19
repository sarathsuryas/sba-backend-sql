-- Up Migration
-- Dev-only seed admins. Passwords: Admin@123, Admin2@123, Admin3@123 (bcrypt, cost 10)
INSERT INTO portal_users (email, password_hash, role_id) VALUES
    ('admin@sba.local',  '$2b$10$yJN..g5hb1K.3JT/2Ob6zOGIggdJsDst3kAS5mTxHV.E4mgvPj6ri', (SELECT id FROM roles WHERE name = 'admin')),
    ('admin2@sba.local', '$2b$10$VBBjBnnyYjeJRWRp2qv2ZOETq0NG/eRrn9PKbRzeeRsUmmgEV58za', (SELECT id FROM roles WHERE name = 'admin')),
    ('admin3@sba.local', '$2b$10$O5aWfRpzxJW.aXY2ixuUGOIYqHgt6YzTFCDP0u//Yxcv2BL8EDcNi', (SELECT id FROM roles WHERE name = 'admin'))
ON CONFLICT (email) DO NOTHING;

-- Down Migration
DELETE FROM portal_users WHERE email IN ('admin@sba.local', 'admin2@sba.local', 'admin3@sba.local');
