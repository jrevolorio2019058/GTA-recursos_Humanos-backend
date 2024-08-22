import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({

    windowMs: 7 * 60 * 1000,
    max: 10000,
    
});

export default apiLimiter;