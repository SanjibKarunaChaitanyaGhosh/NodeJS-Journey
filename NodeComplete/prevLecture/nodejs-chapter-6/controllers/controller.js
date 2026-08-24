export const hello=(req,res)=>{
    // console.log("learning controler")
    // res.json({message:"Welcome....."})
    res.status(200).json({message:"get method....."})
}

export const send=(req,res)=>{
    const id=req.body.id
    const name=req.body.name
    const address=req.body.address
    console.log(id,name,address)

    res.status(200).json({message:"Post Method....."})
}

export const update=(req,res)=>{
    res.status(200).json({message:"Update Method....."})
}

export const delition=(req,res)=>{
    res.status(200).json({message:"delete Method....."})
}