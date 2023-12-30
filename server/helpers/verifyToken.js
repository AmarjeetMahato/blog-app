import jwt from  "jsonwebtoken"


export const verifyToken = (req, res, next) => {
    const token = req.cookies.Admin_token;

    if (!token) {
        return res.status(401).json({ msg: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, process.env.JWT_TOKEN, (err) => {
        if (err) {
            return res.status(401).json({ msg: 'Unauthorized: Invalid token' });
        }
        next();
    });
};


export const userVerifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, process.env.JWT_TOKEN, (err) => {
        if (err) {
            return res.status(401).json({ msg: 'Unauthorized: Invalid token' });
        }
        next();
    });
};
