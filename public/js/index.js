var res2=fetch('/getAtt');
    let pr2= res2.then((resp)=>{
        if(resp.status!=200){
            return;
        }
        return resp.text();
    })
    pr2.then(function (abc){
        var data=JSON.parse(abc);
        console.log(data);
        setAttendance(data);      
    });

var list=[]



var res=fetch('/getTT');
    let pr= res.then((res)=>{
        if(res.status!=200){
            return;
        }
        return res.text();
    })
    pr.then(function (abc){
        var data=JSON.parse(abc);
        console.log(data);
        for(var i=0;i<5;i++){
            var text="subject"+(i+1);
            var subj=document.getElementById(text);
            list.push(subj.innerHTML);
            //console.log(list)
        }
        arrange(data,list);
    });



function setAttendance(d){
    // for(var m=1;m<=2;m++){
    //     var text="subject"+m;
    //     var sub=document.getElementById(text);
    //     console.log(sub);
    //     console.log(d)
    //     //sub.innerHTML=d[i].Subjects
    // }
    //console.log(d)
    for(var i=0;i<d.length;i++){
        var text="subject"+(i+1);
        var text2="sub"+(i+1)
        // console.log(d[i].Subjects);
        var sub=document.getElementById(text);
        var att=document.getElementById(text2);
        // console.log(sub);
        sub.innerHTML=d[i].Subjects;
        att.innerHTML=d[i].Attendance
        //sub.textContent=d[i].Attendance;
    }

}

function arrange(data,list){
    console.log(data);
    for(var i=0;i<data.length;i++){
        // console.log(data[i].EndTime);
        // console.log(data[i])
        if(data[i].Day=="Monday"){
            if(data[i].EndTime==="10"){
                add(1,0,data[i].Subjects,list)
            }
            else if(data[i].EndTime==="11"){
                add(1,1,data[i].Subjects,list)
            }
            else if(data[i].EndTime==="12"){
                add(1,2,data[i].Subjects,list)
            }
            else if(data[i].EndTime==="1"){
                add(1,3,data[i].Subjects,list)
            }
            // if(data[i].StartTime="1"){
            //     var ch=document.getElementById("c21");
            //     ch.firstElementChild.textContent=data[i].Subjects;
            // }
            else if(data[i].EndTime==="3"){
                add(1,5,data[i].Subjects,list)
            }
            else if(data[i].EndTime==="4"){
                add(1,6,data[i].Subjects,list)
            }
            else if(data[i].EndTime==="5"){
                add(1,7,data[i].Subjects,list)
            }

        }
        if(data[i].Day=="Tuesday"){
            if(data[i].EndTime==="10"){
                add(2,0,data[i].Subjects,list)
            }
            if(data[i].EndTime==="11"){
                add(2,1,data[i].Subjects,list)
            }
            if(data[i].EndTime==="12"){
                add(2,2,data[i].Subjects,list)
            }
            if(data[i].EndTime==="1"){
                add(2,3,data[i].Subjects,list)
            }
            // if(data[i].StartTime="1"){
            //     var ch=document.getElementById("c22");
            //     ch.firstElementChild.textContent=data[i].Subjects;
            // }
            if(data[i].EndTime==="3"){
                add(2,5,data[i].Subjects,list)
            }
            if(data[i].EndTime==="4"){
                add(2,6,data[i].Subjects,list)
            }
            if(data[i].EndTime==="5"){
                add(2,7,data[i].Subjects,list)
            }

        }
        if(data[i].Day=="Wednesday"){
            if(data[i].EndTime==="10"){
                add(3,0,data[i].Subjects,list)
            }
            if(data[i].EndTime==="11"){
                add(3,1,data[i].Subjects,list)
            }
            if(data[i].EndTime==="12"){
                add(3,2,data[i].Subjects,list)
            }
            if(data[i].EndTime==="1"){
                add(3,3,data[i].Subjects,list)
            }
            // if(data[i].StartTime="1"){
            //     var ch=document.getElementById("c22");
            //     ch.firstElementChild.textContent=data[i].Subjects;
            // }
            if(data[i].EndTime==="3"){
                add(3,5,data[i].Subjects,list)
            }
            if(data[i].EndTime==="4"){
                console.log(data[i].Subjects);
                add(3,6,data[i].Subjects,list)
            }
            if(data[i].EndTime==="5"){
                add(3,7,data[i].Subjects,list)
            }
            
        }
        if(data[i].Day=="Thursday"){
            if(data[i].EndTime==="10"){
                add(4,0,data[i].Subjects,list)
            }
            if(data[i].EndTime==="11"){
                add(4,1,data[i].Subjects,list)
            }
            if(data[i].EndTime==="12"){
                add(4,2,data[i].Subjects,list)
            }
            if(data[i].EndTime==="1"){
                add(4,3,data[i].Subjects,list)
            }
            // if(data[i].StartTime="1"){
            //     var ch=document.getElementById("c22");
            //     ch.firstElementChild.textContent=data[i].Subjects;
            // }
            if(data[i].EndTime==="3"){
                add(4,5,data[i].Subjects,list)
            }
            if(data[i].EndTime==="4"){
                add(4,6,data[i].Subjects,list)
            }
            if(data[i].EndTime==="5"){
                add(4,7,data[i].Subjects,list)
            }
        }
        if(data[i].Day=="Friday"){
            if(data[i].EndTime==="10"){
                add(5,0,data[i].Subjects,list)
            }
            if(data[i].EndTime==="11"){
                add(5,1,data[i].Subjects,list)
            }
            if(data[i].EndTime==="12"){
                add(5,2,data[i].Subjects,list)
            }
            if(data[i].EndTime==="1"){
                add(5,3,data[i].Subjects,list)
            }
            // if(data[i].StartTime="1"){
            //     var ch=document.getElementById("c22");
            //     ch.firstElementChild.textContent=data[i].Subjects;
            // }
            if(data[i].EndTime==="3"){
                add(5,5,data[i].Subjects,list)
            }
            if(data[i].EndTime==="4"){
                add(5,6,data[i].Subjects,list)
            }
            if(data[i].EndTime==="5"){
                add(5,7,data[i].Subjects,list)
            }
            
        }
    }
}


function add(dayno,timeno,sub,list){
    var text="c"+(dayno+(5*timeno));
    console.log(text+" "+sub);
    if(text=="c33"){
        console.log("ehhdjs")
    }
    var ch=document.getElementById(text);
    ch.firstElementChild.textContent=sub;
    var flag=0;
    for(var i=0;i<list.length;i++){
        if(list[i]===sub){
            console.log(sub)
            ch.classList.add("s"+(i+1));
            console.log(ch.firstElementChild.nextElementSibling.firstElementChild)
            var btns=ch.firstElementChild.nextElementSibling.firstElementChild
            var btnp=ch.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
            btns.style.display="inline-block";
            btnp.style.display="inline-block"
            flag=1;
        }
    }
    if(flag==0){
        ch.classList.add("labs");
    }
    console.log(ch)
    
    
}


var buttonp=document.getElementsByClassName("btnp")
for(var i=0;i<buttonp.length;i++){
    buttonp[i].addEventListener("click",function(){
        var sub=this.parentElement.parentElement.firstChild.nextElementSibling.innerText;
        var res=fetch('/attplus',{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({"Subject":sub})
          });
        // var res=fetch('/attplus',{
        //     method:post,
        //     body:JSON.stringify({"Subject":sub})
        // });
        let pr= res.then((res)=>{
            if(res.status!=200){
                return;
            }
            return res.text();
        })
        pr.then(function (){
            console.log("done")
            upAtt(sub);
        });
    })
}

var buttons=document.getElementsByClassName("btns")
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var sub=this.parentElement.parentElement.firstChild.nextElementSibling.innerText;
        var res=fetch('/attsub',{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({"Subject":sub})
          });
        // var res=fetch('/attplus',{
        //     method:post,
        //     body:JSON.stringify({"Subject":sub})
        // });
        let pr= res.then((res)=>{
            if(res.status!=200){
                return;
            }
            return res.text();
        })
        pr.then(function (){
            console.log("done")
            downAtt(sub);
        });
    })
}
function upAtt(sub){
    for(var i=0;i<5;i++){
        var text="subject"+(i+1);
        // console.log(d[i].Subjects);
        var subs=document.getElementById(text);
        // console.log(sub);
        if(subs.innerHTML===sub){
            var text2="sub"+(i+1)
            var att=document.getElementById(text2);
            att.innerHTML=Number(att.innerHTML)+1;
        }
        
        //sub.textContent=d[i].Attendance;
    }
}

function downAtt(sub){
    for(var i=0;i<5;i++){
        var text="subject"+(i+1);
        // console.log(d[i].Subjects);
        var subs=document.getElementById(text);
        // console.log(sub);
        if(subs.innerHTML===sub){
            var text2="sub"+(i+1)
            var att=document.getElementById(text2);
            att.innerHTML=Number(att.innerHTML)-1;
        }
        
        //sub.textContent=d[i].Attendance;
    }
}

//console.log(button)
