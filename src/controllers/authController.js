const bcrypt = require('bcrypt');
const speakeasy = require('speakeasy');
const { generateToken } = require('../config/auth');
const pool = require('../config/db');

exports.register = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userResult.rowCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        const user = userResult.rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate TOTP secret for 2FA
        const secret = speakeasy.generateSecret({ length: 20 });
        await pool.query('UPDATE users SET totp_secret = $1 WHERE email = $2', [secret.base32, email]);

        const token = generateToken(user.id);
        res.json({ token, message: 'Login successful' });
    } catch (error) {
        next(error);
    }
};