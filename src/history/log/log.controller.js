import Log from "../log/log.model.js";

export const viewLogs = async (req, res) => {

    const { limit, from } = req.query;

    const [total, log] = await Promise.all([

        Log.countDocuments({}),

        Log.find({}).skip(Number(from)).limit(Number(limit))

    ]);

    res.status(200).json({ msg: `The ${total} logs are:`, log });

}