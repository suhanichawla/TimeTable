var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var cookieParser= require('cookie-parser');
var bcrypt=require('bcrypt')
var passport=require('passport')
var localStrategy=require('passport-local').Strategy;
var session=require('express-session');
var path=require('path');
var http=require('http');
var server=http.createServer(app);
var db=require('./db')

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))
app.use(bodyParser.json())
app.use('/',express.static('public'))
app.use('/welcome',express.static('views'))
app.use(cookieParser())
app.use(bodyParser.urlencoded())
app.use(session({secret:"l is god"}))
app.use(passport.initialize())
app.use(passport.session());


server.listen(5000,()=>{
    console.log("server running on 5000");
    db.connection.connect();
})

app.post('/login', passport.authenticate('local',
    {
        successRedirect:'/welcome',
        failureRedirect:'/'
    }
))

passport.use(new localStrategy(
    function(username,password,done){
        //console.log("comin")
        db.getfromDB(username,function(result){
            //console.log(res);
            if(result[0]!=undefined){
                console.log("result is not undefiled")
                bcrypt.compare(password,result[0].Password,function(err,res){
                    // console.log(res)
                    if(res) done(null,result[0]);
                    else  return done(null, false, {message: 'Password is incorrect'})
                })
            }else{
                done(null,false)
            }
            
        })
    }

))

passport.serializeUser(function(user,done){
    done(null,user.RollNo);
})

passport.deserializeUser(function(RollNo,done){
    //console.log(RollNo);
    db.getUser(RollNo,function(results){
        // db.getTT(results[0].Branch,results[0].Year,function(res){
        //     console.log(res)
            
        // })
        done(null,results[0])
    })
   
})


app.get('/welcome', (req, res)=>{
    console.log(req.user);
    var userD=req.user;
    //res.send("login for"+req.user.username+"successful")
    res.render('index',userD);
    //res.redirect("tt.html")
})


app.post('/signup',(req,res)=>{
    console.log(req.body);
    bcrypt.hash(req.body.Password,10,function(err,hash){
        if (err) throw err;
        db.insertIntoDB(req.body.Name,Number(req.body.RollNo),req.body.Branch,Number(req.body.Year),hash,function(){
            db.setAtt(req.body.Branch,Number(req.body.Year),function(result){
                db.setAtt2(Number(req.body.RollNo),result,function(){
                    res.redirect('/')
                })
                
            })
            
        })
    })
    
    
})

app.get('/getTT',(req,res)=>{
    console.log("eka")
    console.log(req.user.Name)
    db.getTT(req.user.Branch,Number(req.user.Year),function(result){
        //console.log(result);
        res.send(result);
    })
    
})

app.get('/getAtt',(req,res)=>{
    db.getatt(Number(req.user.RollNo),function(result){
        //console.log(result);
        res.send(result);
    })
})

app.post('/attplus',(req,res)=>{
    console.log("here")
    console.log(req.body)
    db.updateAtt(Number(req.user.RollNo),req.body.Subject,function(result){
        res.sendStatus(200);
    })
    //res.sendStatus(200);
})

app.post('/attsub',(req,res)=>{
    console.log("here")
    console.log(req.body)
    db.updateAttdown(Number(req.user.RollNo),req.body.Subject,function(result){
        res.sendStatus(200);
    })
    //res.sendStatus(200);
})