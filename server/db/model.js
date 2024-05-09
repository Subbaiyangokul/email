const employeeSchema = new mongoose.Schema({
    name : String ,
    email: String,
    mobilenumber : Number

})

const EmployeeModel = mongoose.model("employee", employeeSchema)
module.exports = EmployeeModel