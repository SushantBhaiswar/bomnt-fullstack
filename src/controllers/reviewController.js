const reviewModel = require("../models/reviewModel")
module.exports = {

    createreview: async (req, res) => {
        req.body.reviewedBy = req.body.authorname
        req.body.reviewedAt = new Date().toDateString()
        await reviewModel.create(req.body)
        return res.status(200).send({ message: "Created Successfully" })
    },
    getreview: async (req, res) => {
        let getreview = await reviewModel.find({ isDeleted: false, bookId: req.params.bookid })
        res.status(201).send(getreview)
    },
    deleteReview: async (req, res) => {
        await reviewModel.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true })
        return res.status(201).send({ message: "Review Deleted Successfully" })
    }
}
