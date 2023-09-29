/**
 * Get all student data
 */

export const getAllStudent = (req, res) => {
    res.status(200).json({name : "Mamun"});
};

/**
 * creae student data
 */

export const creaeStudent = (req, res) => {
    res.status(200).json(req.body);
};
/**
 * creae student data
 */

export const deletedStudent = (req, res) => {
    res.status(200).json({message: 'student data deleted'});
};