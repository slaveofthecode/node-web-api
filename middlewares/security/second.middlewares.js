const second = (req, res, next) => {
    req.lastName = 'Lopez';
    console.log('Second middleware for ' + req.name + ' ' + req.lastName);
    next();
};

export default second;