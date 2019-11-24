var mysql=require('mysql');
var obj={
    host:'localhost',
    user:'suhani',
    password:'Suhani@123',
    database: 'data2'
}

var connection=mysql.createConnection(obj);

function getUser(roll,cb){
    connection.query(`select * from Signup where RollNo='${roll}'`,function(err,results1){
        // console.log(results1[0].Year)
        // console.log(results1[0].Branch)
        // connection.query(`select * from TT where Year=${results1[0].Year} && Branch=${results1[0].Branch}`,function(err,results2){
        //     console.log(results1);
        //     console.log(results2);
        if(err) throw err
        cb(results1);
        // })
        

    })
}


function getTT(br,year,cb){
    connection.query(`select * from TT where Year=${year}`,function(err,results){
        if(err) throw err
        cb(results);
    })
}

function getatt(roll,cb){
    connection.query(`select * from Attendance where RollNo=${roll}`,function(err,results){
        if(err) throw err
        cb(results);
    })
}



function insertIntoDB(name,roll,branch,year,password,cb){
    try{
        connection.query(`insert into Signup values('${name}','${roll}','${branch}','${year}','${password}')`,function(err,results){
            if (err) throw err
            cb();
        })

    }catch(e){
        console.log(e);
    }
    
}

function getfromDB(roll,cb){
    connection.query(`select * from Signup where RollNo='${roll}'`,function(err,results){
        if(err) throw err
        cb(results);

    })
}

function updateAtt(roll,sub,cb){
    connection.query(`Update Attendance set Attendance=Attendance+1 where RollNo=${roll} and Subjects="${sub}"`,function(err,results){
        if(err) throw err
        cb(results);

    })
}

function updateAttdown(roll,sub,cb){
    connection.query(`Update Attendance set Attendance=Attendance-1 where RollNo=${roll} and Subjects="${sub}"`,function(err,results){
        if(err) throw err
        cb(results);

    })
}

function setAtt(branch,year,cb){
    connection.query(`select Subjects from Subjects where Year=${year}`,function(err,results){
        //Branch=${branch}
        if(err) throw err
        cb(results);

    })
}

function setAtt2(roll,res,cb){
    for(var i=0;i<res.length;i++){
        // console.log(res[i].Subjects)
        // console.log(typeof(res[i].Subjects))
        connection.query(`insert into Attendance values(${roll},"${res[i].Subjects}",0)`,function(err,results){
            if(err) throw err
        })
    }
    cb();
}

module.exports={
    connection:connection,
    insertIntoDB:insertIntoDB,
    getfromDB:getfromDB,
    getUser:getUser,
    getTT:getTT,
    getatt:getatt,
    updateAtt:updateAtt,
    setAtt:setAtt,
    setAtt2:setAtt2,
    updateAttdown:updateAttdown

}