import User from "../modals/userSchema.js"

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ name: request.body.name, password: request.body.password,email:request.body.email });
        if(user) {
            return response.status(200).json(`${request.body.name} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

export const userSignup= async (request,response)=>{
    try {
        const exist= await User.findOne({name:request.body.name})
        if(exist){
            return response.json({ message: 'User already exist'});
        }
        const user=request.body
        const newUser= new User(user)
        await newUser.save()

        response.status(200).json("User is sucessfully registered")
    } catch (error) {
        console.log("Error:",error.message)
    }
}