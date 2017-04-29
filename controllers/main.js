/*const product = require('../models/product')*/
const Product = require('.././models/product')
const cloudinary = require('cloudinary')

exports.init = (request, response) => {
    Product.find((error, data) => {
        if (error) {
            console.log(error)
        } else {
            response.render('index', {producto: data})
        }
    })
}

exports.admin = (request, response) => {
    response.render('admin');
}

exports.product = (request, response) => {
    
}

exports.create = (request, response) => {
    cloudinary.uploader.upload(request.files.fileimage.path, (result) => {
        var data = new Product({
            name: request.fields.name,
            price: request.fields.price,
            image_url: result.url,
            description: request.fields.description,
            date: new Date()
        })

        data.save((error, result) => {
            if (error) {
                console.log(error)
            } else {
                response.redirect('/')
            }
        })

    })

}