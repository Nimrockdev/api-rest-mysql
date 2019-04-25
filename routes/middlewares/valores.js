// ============================
//  Verifica token
// ============================
let verificaNulos = (request, res) => {

    if ((request.body.name == '') || (request.body.email === '')) {
        // var error = res.status(406).json({
        //     ok: false,
        //     err: { message: 'Datos incorrectos' }
        // });
        console.log('Error Falta un datio');

    }
    console.log('salimos');
    // let token = req.get('token');
    // jwt.verify(token, process.env.SEED, (err, decoded) => {
    //     if (err) {
    //         return res.status(401).json({
    //             ok: false,
    //             err: { message: 'Token no válido' }
    //         });
    //     }
    //     req.usuario = decoded.usuario;
    //     next();

    // })

    /*     res.json({
            token
        }) */
};

module.exports = verificaNulos;