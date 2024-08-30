import Change from "../changes/changes.model.js";

export const viewChages = async (req, res) => {

    const { limit, from } = req.query;

    const [ total, change ] = await Promise.all([

        Change.countDocuments({}),

        Change.find({}).skip(Number(from)).limit(Number(limit))

    ]);

    res.status(200).json({ msg: `The ${total} changes are:`, change });

}