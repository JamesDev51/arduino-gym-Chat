import routes from "./routes"

export let isUsing=false
export let isOpen=false

export const notUsing = async(req,res) => {
    try{
        isUsing=false
        console.log(`isUsing : ${isUsing}`)
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}
export const using = async(req,res) => {
    try{
        isUsing=true
        console.log(`isUsing : ${isUsing}`)
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}
export const open = async(req,res) => {
    try{
        isOpen=true
        console.log(`isOpen : ${isOpen}`)
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}
export const notOpen = async(req,res) => {
    try{
        isOpen=false
        console.log(`isOpen : ${isOpen}`)
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}
