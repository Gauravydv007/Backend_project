const asyncHandler = (requestHandler)  => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}



export {asyncHandler} // it is used to so that we can use it in another file 