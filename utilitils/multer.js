import multer from 'multer';

// disk storge setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname === 'staff-photo'){
            cb(null, 'public/staff')
        }else if(file.fieldname === 'customer-photo'){
            cb(null, 'public/customar')
        }else if(file.fieldname === 'student-photo'){
            cb(null, 'public/student')
        }else if(file.fieldname === 'user-profile-photo'){
            cb(null, 'public/user-profile-photo')
        }else if(file.fieldname === 'user-cv'){
            cb(null, 'public/user-cv')
        }else if(file.fieldname === 'productPhoto'){
            cb(null, 'public/products')
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'_'+ Math.round(Math.random() * 10000)+'_' +file.originalname);
    }
});


// create customar middleware
export const createCustomerMiddleware = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp'){
            cb(null, true)
        }else{
            cb(new Error('Invalid file type'));
        }
    },
    limits: {
        fileSize: 40,
    }

}).single('customer-photo');


export const createProductMiddleware = multer({storage}).single('productPhoto');


export const createStaffMiddleware = multer({storage}).single('staff-photo');
export const createStudentMiddleware = multer({storage}).array('student-photo', 10);
export const createUserMiddleware = multer({storage}).fields([
    {
        name:'user-profile-photo',
        maxCount: 1
    },
    {
        name :'user-cv',
        maxCount: 1
    }
]);