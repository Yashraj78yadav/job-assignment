module.exports = (req, res, next) => {
    // Dummy role check logic for demo purposes
    const role = req.headers['role'];
    if (!role || !['admin', 'vendor', 'user'].includes(role)) {
      return res.status(403).json({ message: 'Access forbidden' });
    }
    next();
  };
  