import mongoose from 'mongoose'

const Validation = mongoose.Schema({
    name: String,
    enroll: String,
    english: String,
    sci: String,
    ssci: String,
    maths: String,
    hindi: String,
    comp: String
})

export default mongoose.model('signup' , Validation)