/* const loginStudent = async (req,res) => {
    const { email, password } = req.body

    try{
        const existingStudent = await Student.findOne({ email })
        
        if(!existingStudent) return res.status(404).json({message: "User not exist!"})
        console.log(existingStudent.password)
        console.log(password)

        const isPasswordCorrect = await bcrypt.compare(password, existingStudent.password)
        console.log(isPasswordCorrect)

        if(!isPasswordCorrect) return res.status(400).json({message: 'Invalid Crededntials'})

        const token = jwt.sign({email: existingStudent.email, id: existingStudent._id}, 'thisisdemoapi', {expiresIn: "1h"})

        res.status(200).send({result: existingStudent, token }) 
    } catch(error) {
        res.status(500).send({message: "Something went wrong!"})
    }
}

 const registrerStudent = async (req, res) => {
    const {email, password, firstName, lastName, phone} = req.body
    
    try{
        const existingStudent = await Student.findOne({ email })
        // console.log(existingStudent)

        if(existingStudent) return res.status(409).send({message: "User already exist!"})

        const hashPassword =  await bcrypt.hash(password, 8)
        const result = await Student.create({email, password: hashPassword, firstName: firstName, lastName: lastName, phone: phone})
        // console.log(result)

        const token = jwt.sign({email: result.email, id: result._id}, 'thisisdemoapi', {expiresIn: "1h"})

        res.status(200).send({result, token })

    } catch (error) {
        res.status(500).send({message: "Something went wrong!"})
    }
} */