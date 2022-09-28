const jwt =  require('jsonwebtoken')
const index = (req, res) => {
   return res.json({ msg: 'Api REST nodeJS'})
}

const login = (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) return res.json({msg: 'email or password are required.'})

    if (email === 'admin@gmail.com' && password == 'admin'){
        const token = jwt.sign({ auth: true, email: email }, process.env.SECRET_KEY ,{
            expiresIn: 60000
        })

        console.log(token)
        return res.json({ token: token })
    } else{
        return res.json({ msg:'Usuario no válido'})
    }
    
}

const private = (req, res) => {
    console.log(req.decoded.email);
    return res.json({ msg: "Ruta privada" })
}

module.exports = {
    index,
    login,
    private
}