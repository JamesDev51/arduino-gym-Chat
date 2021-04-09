import routes from "./routes"

export let isUsing=false
export let isOpen=false
//hello
export const notUsing = (req,res) => {
    try{
        isUsing=false
        console.log(`isUsing : ${isUsing}`)
        res.status(200)
        res.end()
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}
export const using = (req,res) => {
    try{
        isUsing=true
        console.log(`isUsing : ${isUsing}`)
        res.status(200)
        res.end()
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}
export const open = (req,res) => {
    try{
        isOpen=true
        console.log(`isOpen : ${isOpen}`)
        res.status(200)
        res.end()
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}
export const notOpen = (req,res) => {
    try{
        isOpen=false
        console.log(`isOpen : ${isOpen}`)
        res.status(200)
        res.end()
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}
