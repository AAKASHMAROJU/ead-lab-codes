const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/mydb1",{useNewUrlParser:true})
.then(()=>{
    console.log("Connected Successfully ");
})
.catch((err)=>{
    console.log("Errorrrrr");}
    )
const Myschema=new mongoose.Schema({
    name:String,
    age:Number
})

const Mycollection = mongoose.model("Mycollection",Myschema);

// const obj1=new Mycollection({
//     name:"Aakash",
//     age:19
// });

const createDocument = async(name,age)=>{
    try{

        let obj = new Mycollection({
            name:name,
            age:age
        })
        const result = await obj.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// createDocument("manasvi",22);


const insertManyDocs = async()=>{
    const res = await Mycollection.insertMany([
        {name:"sahithi",age:18},
        {name:"Arjun",age:17},
        {name:"Afreen",age:16}
    ])
    console.log(res);
}

// insertManyDocs();



const printDocument = async()=>{
    try{
        const obj=await Mycollection.find({},{name:1,_id:0}).sort({age:-1});
        // const res= await obj.save();
        console.log(obj);
    }
    catch(err){
        console.log(err);
    }
}

// printDocument();

const deleteDocument = async()=>{
    const res = await Mycollection.deleteOne({name:"Aakash"});
    console.log(res);
}

// deleteDocument();