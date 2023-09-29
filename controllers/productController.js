import { generateRandomID, generateSlug } from "../helpers/helpers.js";
import fs from 'fs'

// get single product
export const getSinglelProduct = (req, res) => {

    const {slug} = req.params;

    const productData = JSON.parse(fs.readFileSync('db/product.json').toString());

    const singleProduct = productData.find(data => data.slug === slug);

    if(!singleProduct){
        return  res.status(404).json({message: "No Product Found"});
    };
    res.status(200).json(singleProduct);
};


// get all product
export const getAllProduct = (req, res) => {
    const productData = JSON.parse(fs.readFileSync('db/product.json').toString());
    if(productData.length === 0){
       return res.status(404).json({message: 'Product Data Not found'})
    }

    res.status(404).json(productData)
}


// creatw product product
export const createlProduct = (req, res) => {

    const { name, reglurPrice, sellPrice, stock, productPhoto } = req.body;

    // validation
    if(!name || !reglurPrice){
        return res.status(401).send("please provide a valid data");
    }

    const productData = JSON.parse(fs.readFileSync('db/product.json').toString());

    // product name check
    if(productData.some(data => data.slug === generateSlug(name))){
        return res.status(503).send(`this ${generateSlug(name)} already exist`);        
    }


    const product = {
        id: generateRandomID(),
        slug: generateSlug(name),
        name,
        reglurPrice,
        sellPrice,
        stock,
        productPhoto: req.file.filename,
    }

    productData.push(product);
    fs.writeFileSync('db/product.json', JSON.stringify(productData))

    res.redirect('/create')

}

// deleted product
export const getSinglelProductDeleted = (req, res) => {
    const {id} = req.params;

    const productData = JSON.parse(fs.readFileSync('db/product.json').toString());

    const updateData = productData.filter(data => data.id !== id);
    fs.writeFileSync('db/product.json', JSON.stringify(updateData))
    res.redirect('/')
}





// show product page
export const showProductPage = (req, res) => {

    // get all product
    const productData = JSON.parse(fs.readFileSync('db/product.json').toString());
    res.render('product', {
        products : productData,
    })
}

// show product page
export const createProductPage = (req, res) => {
    res.render('create')
}



// show product page
export const singleProductPage = (req, res) => {
    const {slug} = req.params;

        // get all product
        const productData = JSON.parse(fs.readFileSync('db/product.json').toString());

        //find single product
        const findProduct=  productData.find(item => item.slug === slug)

    res.render('single', { 
        products : findProduct 
    })
}



// show product page
export const editProductPage = (req, res) => {
    const {id} = req.params;

    // get all product
    const productData = JSON.parse(fs.readFileSync('db/product.json').toString());

    //find single product
    const editdProduct=  productData.find(item => item.id === id)

    res.render('single-edit', { 
        editProduct : editdProduct 
    })
}

// show update page
export const updateProduct = (req, res) => {
    const {id} = req.params;
    const { name, reglurPrice, sellPrice, stock, productPhoto } = req.body;

    // get all product
    const productData = JSON.parse(fs.readFileSync('db/product.json').toString());

    // photo manage
    let photo_name = productData[productData.findIndex(data => data.id === id)].productPhoto;
    if(req?.file?.filename){
        photo_name = req.file.filename;
    }


    productData[productData.findIndex(data => data.id === id)] ={
       ...productData[productData.findIndex(data => data.id === id)],
        name,
        reglurPrice,
        sellPrice,
        stock,
        productPhoto: photo_name
    }
    fs.writeFileSync('db/product.json', JSON.stringify(productData))
    res.redirect('/')


}