const addHTTPHeader = (req, res, next) => {
    res.setHeader('QuizProjInc', '2024');
    next()
}

module.exports = addHTTPHeader;