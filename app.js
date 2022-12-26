const express= require("express");
const bodyParser = require("body-parser");


const app =express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=["Buy Food", "Cook Food", "Eat Food"];
app.get("/", function(req,res){
    let today = new Date();
    let options ={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day= today.toLocaleDateString("en-US", options);
    
    res.render("list", {kindOfDay:day, newListItem:items});

});

app.post("/", (req, res)=>{
   let item = req.body.newItem;   // new item come from the name in the form for input
    
    items.push(item);
    res.redirect("/");

})


app.listen(3000,function(){
    console.log("Server is running on port 3000");
})