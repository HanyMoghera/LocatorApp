const Store = require('../modles/StoreModle');


// Get all the stores 
exports.getAllStores = async(req, res, next)=>{
    try{
    const stores = await Store.find();
        console.log(stores);
        return res.status(200).json({
            Success: true,
            count: stores.length,
            data: stores
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            error: "Server error"
        });
    }
};


// add store 

exports.addStore = async(req, res, next)=>{
    try{
        const store = await Store.create(req.body);
        return res.status(200).json({
            success: true,
            data: store
        });
    }catch(err){
        console.log(err);
        if(err.code === 11000){
            return res.status(400).json({
                erre: "This store already exists"
            });
        }else {
            res.status(500).json({
            error: "Server error"
        });
        }
        
    }
};