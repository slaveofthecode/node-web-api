const first = (req, res, next) => {

    req.name = 'Gustavo';

    console.log('First middleware for ' + req.name);
    next();
};

export default first;