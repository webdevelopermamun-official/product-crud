import express from 'express';
import { createlProduct, getAllProduct, getSinglelProduct, getSinglelProductDeleted, showProductPage, createProductPage, singleProductPage, editProductPage, updateProduct } from '../controllers/productController.js';
import { createProductMiddleware } from '../utilitils/multer.js';


//init router
const router = express.Router();




// ejs route
router.get('/', showProductPage)
router.get('/create', createProductPage)
router.get('/single/:slug', singleProductPage)


router.get('/single-delete/:id', getSinglelProductDeleted);
router.get('/single-edit/:id', editProductPage);
router.post('/single-update/:id', createProductMiddleware, updateProduct);


// product router
router.get('/products', getAllProduct);
router.get('/products/:slug', getSinglelProduct);

router.post('/products', createProductMiddleware, createlProduct);
 


// export router
export default router;