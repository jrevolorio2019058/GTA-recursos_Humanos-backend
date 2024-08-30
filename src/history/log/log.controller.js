import Log from "../log/log.model.js";

export const viewLogs = async (req, res) => {

    const { limit, from } = req.query;

    const [total, log] = await Promise.all([

        Log.countDocuments({}),

        Log.find({}).skip(Number(from)).limit(Number(limit))

    ]);

    res.status(200).json({ msg: `The ${total} logs are:`, log });

}

export const logout = async (req, res) => {

    const log = new Log({

        username: req.user.username,

        role: req.user.role,

        dateLogin: Date.now(),

        action: "LOGOUT"

    });
    
    await log.save();

    res.status(200).json({ msg: `The user ${req.user.username} was successfully logged out.` });

}