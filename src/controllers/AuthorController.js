const AuthorModel = require("../models/AuthorModel")
const jwt = require("jsonwebtoken")
module.exports = {
    createauthor: async (req, res) => {
        try {
            let checkunique = await AuthorModel.findOne({ phone: req.body.phone })
            if (checkunique) return res.status(400).send({ msg: "Mobile number Already exists!" })
            let checkunique_email = await AuthorModel.findOne({ email: req.body.email })
            if (checkunique_email) return res.status(400).send({ msg: "Email Address Already exists!" })
            let obj = { street: req.body.address, city: req.body.city, pincode: req.body.pincode, }
            req.body.address = obj

            let createUserdata = await AuthorModel.create(req.body)
            res.status(201).send({ data: createUserdata })
        }
        catch (error) {
            console.log(error.message)
            res.status(500).send({ status: false, message: error.message })
        }
    },
    authorlogin: async (req, res) => {
        try {
           
            let data = req.body
            let { email, password } = data

            let findUser = await AuthorModel.findOne({ email: email, password: password });
            if (!findUser) return res.status(404).send({ status: false, message: "emailId or password is incorrect" })

            let token = jwt.sign({
                userId: findUser._id
            },
                "secret-Hai-ye-batan-mat", { expiresIn: "1s" })

            res.setHeader("header", token)
            res.status(200).send({ Message: "Author LoggedIn", data: token, Userid: findUser._id })
        } catch (err) {
            return res.status(500).send({ status: false, message: err.message })
        }
    }
}