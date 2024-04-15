const data=[{
      Task:"Meeting",
      Description:"Client Meeting",
      Duration:"00:50:43",
    },
    {
      Task:"Project",
      Description:"Developing-xyz",
      Duration:"01:42:02",
    },
    {
      Task:"Personal Break",
      Description:"-",
      Duration:"02:50:01",
    },
    {
      Task:"Personal Break",
      Description:"Lunch",
      Duration:"02:50:01",
    },
    {
      Task:"Meeting",
      Description:"Daliy scrum",
      Duration:"00:32:28",
    },
  ];
  let table=document.getElementById("mytable");
  table.innerHTML=  data.map((i)=>{ 
    return  `<tr>
    <td>${i.Task}</td>
    <td>${i.Description}</td>
    <td>${i.Duration}</td>
    </tr>`
  }).join("");                   
  let aa=document.getElementById("name");
  let bb=document.getElementById("btn");
  bb.addEventListener("click",()=>{
  const dd=aa.value;
  table.innerHTML=data.filter((i)=> i.Task== dd).map((i)=>{ 
    return  `<tr>
    <td>${i.Task}</td>
    <td>${i.Description}</td>
    <td>${i.Duration}</td>
    </tr>`
  }).join("");});
  // push data
  function add(){
    var task=document.getElementById("task").value;
    var desc=document.getElementById("desc").value;
    var time=document.getElementById("time").value;
    var tt=document.getElementById("mytable");
    var row=tt.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.innerHTML=task;
    cell2.innerHTML=desc;
    cell3.innerHTML=document.querySelector("#ttt").textContent;
    document.getElementById("task").value="";
    document.getElementById("desc").value="";
    document.getElementById("time").value="";
  }
  //btn-add
  const Add=document.getElementById("btn-add");
  Add.addEventListener("click",event=>{
    event.preventDefault();
    add();
  })

  //setTimer
  let sec=0;
  let min=0;
  let hour=0;
  let settime=false;
    function start(){         
      if(!settime){
        settime=true;
        set=setInterval(()=>{
          sec++;
          if(sec==60){
            min++;
            sec=0;
            if(min==60){
              hour++;
              min=0;
            }
          }
          var timer=`${hour.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
          let timme=document.getElementById("ttt");
          timme.innerHTML=timer;
          let change=document.getElementById("stop");
          change.textContent="Stop"
        },1000);
      }else{
        clearInterval(set);
        settime=false;
        let change=document.getElementById("stop");
        change.textContent="Start"
      }
    }
function reset(){
  sec=0;
  min=0;
  hour=0;
  var timer=`${hour.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
          let timme=document.getElementById("ttt");
          timme.innerHTML=timer;
}
//Edit
