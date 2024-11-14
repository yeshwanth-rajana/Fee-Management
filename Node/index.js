const express=require('express');
const mysql=require('mysql');
const app=express();
const server=require('http').createServer(app);
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=8000;

let connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'fee'
    })
    connection.connect((err)=>{
        if(!err){ 
            console.log('database connected succesfully!!!!!!')
        }
        else
        {
            console.log('database not connected')
        }
    }
    )  
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
      });
      app.post('/form',(req,res)=>
      {
          console.log(req.body)
          connection.query('insert into `signup`(`username`,`email`,`password`,`roletype`,`totalfee`,`discount`,`balance`,`duedate`,`clearedfee`) values("'+req.body.username+'","'+req.body.email+'","'+req.body.password+'","'+req.body.roletype+'","'+req.body.totalfee+'","'+req.body.discount+'","'+req.body.balance+'","'+req.body.duedate+'","'+req.body.clearedfee+'")',(err,rows,fields)=>
          {
            if(!err)
            {
               res.send(rows);
            }
            else
            {
               console.log(err);
             }
          })
      })
    app.post('/login',(req,res)=>
    {
        console.log(req.body)
        connection.query('select * from `signup` where email="'+req.body.email+'" and password="'+req.body.password+'"',(err,rows,fields)=>
        {
         if(!err)
         {
            console.log('helloo');
            res.send(rows);
         }
         else
         {
            console.log(err);
        }
    
    
        })
    })
    app.get('/student/:id',(req,res)=>
{
    console.log (req.body);
    connection.query('select * from `signup` where id="'+req.params.id+'"',(err,rows,fields)=>
    {
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    })
})
app.get('/Adminpage/:id',(req,res)=>
{
    console.log (req.body);
    connection.query('select * from `signup` where roletype="student"',(err,rows,fields)=>
    {
       if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    })})
    app.post('/Formupdation/:id',(req,res)=>
    {console.log(req.params.id)
        connection.query('update `signup` set username="'+req.body.username+'",email="'+req.body.email+'",totalfee="'+req.body.totalfee+'",discount="'+req.body.discount+'", balance="'+req.body.balance+'",duedate="'+req.body.duedate+'" where id="'+req.params.id+'"',(err,rows,fields)=>
        {
            if(!err)
            {
                
                res.send(rows);
            }
            else{
                console.log(err);
            }
        })
    })

    server.listen(PORT,()=>
    {console.log('listening port'+PORT)
  }
    )