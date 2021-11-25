const {Router}= require('express')
const { check } = require('express-validator')

const {
    obtenerMembresia,
    obtenerMembresias,
    crearMembresia,
    actualizarMembresia,
    borrarMembresia}= require('../controllers').Membresia;

const {validarCampos}= require ('../middlewares');
const router = Router();

router.get('/',obtenerMembresias);
router.get('/:id', [check('id', 'su id no es valido').isMongoId()],obtenerMembresia);
router.post('/', [ check('cliente', 'El nombre del cliente es obligatorio').not().isEmpty(),
                    validarCampos,
                 ], crearMembresia);
router.put('/:id',  actualizarMembresia);
router.delete('/:id', [ check('id','No es vAlido este id').isMongoId() ] ,  borrarMembresia);

module.exports = router;