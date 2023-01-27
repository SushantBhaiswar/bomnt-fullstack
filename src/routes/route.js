const express = require("express")
const router = express.Router()
const { authentication } = require("../middlewares/auth")
const userController = require('../controllers/userController')
const validationmware = require("../middlewares/validationmware")
const bookController = require("../controllers/bookController")
const reviewController = require("../controllers/reviewController")
const { createauthor, authorlogin } = require("../controllers/AuthorController")
const { deleteReview } = require("../controllers/reviewController")

//login user
router.post("/user-login", userController.login)

//create user
router.post("/register", userController.createUser)

//create book
router.post("/books",  bookController.createBook)

//Update book
router.put("/books/:bookId", bookController.UpdateBook)

//Delete book
router.put("/deletebook/:bookId", bookController.deleteBook)

router.get("/books", bookController.getallBook)

//create review
router.post("/createreview", reviewController.createreview)

router.get("/getreview/:bookid", reviewController.getreview)

router.put("/delete-review/:id", deleteReview)
//create author
router.post("/Author-register", createauthor)
//author login
router.post("/author-login", authorlogin)


module.exports = router