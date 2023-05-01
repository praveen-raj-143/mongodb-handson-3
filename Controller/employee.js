const {Projectmodel}=require("../Models/projectmodel")

const adddetails= async (req,res)=>{
    const employeedata=req.body;
    console.log(employeedata)
    try{
        const employeeobj= new Projectmodel({
            firstName:employeedata.firstName,
            lastName:employeedata.lastName,
            salary:employeedata.salary,
            department:employeedata.department,
            lastCompany:employeedata.lastCompany,
            lastSalary:employeedata.lastSalary,
            overallExp:employeedata.overallExp,
            contactInfo:employeedata.contactInfo,
            yearGrad:employeedata.yearGrad,
            gradStream:employeedata.gradStream
        })
        const insert = await employeeobj.save();
        return res.status(200).send(insert)
    }
    catch (err){
        console.log(err)
        return res.status(500).send('Something went wrong ')
    }
}

const finddetails = async (req, res)=>{
    try {
        const result = await Projectmodel.find()
        return res.send(result)
    } catch (error) {
        return res.status(500).send('Something went wrong ')
    }
}

const updatesalary = async (req, res)=>{
    
    const filter = req.body.filter;
    const updateData = req.body.updateData;
    const formatFilter = {firstName: filter.firstName}
    const formatUpdate = {$push: {salary: updateData.salary }}
    console.log(formatFilter, formatUpdate);
    try {
        const result = await Projectmodel.updateOne(formatFilter, formatUpdate);
       return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send('Something went wrong ')
    }
}
const deletedetails = async (req, res)=>{
    try {
        const result = await Projectmodel.deleteMany({ lastCompany: 'Y' })
        res.send(result)
    } catch (error) {
        return res.status(500).send('Something went wrong ')
    }
}

module.exports = {adddetails, finddetails, updatesalary, deletedetails}