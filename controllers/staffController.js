/**
 * get all student
 */
export const getAllStaff = (req, res) =>{
    res.status(200).json({name_staff : "Mamun"});
}
/**
 * get all student
 */
export const createStaff = (req, res) =>{
    res.status(200).json(req.body);
}