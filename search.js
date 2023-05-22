const teacherList = document.getElementsByClassName('teacher-list')[0];
const scrollWiew = document.getElementsByClassName('scroll-wiew')[0];

const rawTimetableJson = [
  {
    "name": "Ondřej Balák",
    "id": "UUZFR",
    "timetable": {
      "15.5.": {
        "hours": [
          {
            "start": "10:00",
            "end": "10:45",
            "room": "U34",
            "groups": [
              "4.J celá"
            ],
            "subject": "D"
          },
          {
            "start": "10:55",
            "end": "11:40",
            "room": "U21",
            "groups": [
              "3.M celá"
            ],
            "subject": "D"
          },
          {
            "start": "11:50",
            "end": "12:35",
            "room": "U26",
            "groups": [
              "5.M celá"
            ],
            "subject": "D"
          }
        ],
        "pauses": [
          {
            "start": "07:40",
            "end": "08:00",
            "floor": "3. patro"
          },
          {
            "start": "09:40",
            "end": "10:00",
            "floor": "4. patro"
          }
        ]
      },
      "16.5.": {
        "hours": [
          {
            "start": "10:00",
            "end": "10:45",
            "room": "U23",
            "groups": [
              "6.M celá"
            ],
            "subject": "D"
          },
          {
            "start": "10:55",
            "end": "11:40",
            "room": "U36",
            "groups": [
              "7.M celá"
            ],
            "subject": "D"
          },
          {
            "start": "11:50",
            "end": "12:35",
            "room": "U21",
            "groups": [
              "3.M celá"
            ],
            "subject": "D"
          },
          {
            "start": "12:45",
            "end": "13:30",
            "room": "U33",
            "groups": [
              "1.M celá"
            ],
            "subject": "D"
          },
          {
            "id": 6,
            "room": "Suplovac&#237; pohotovost"
          }
        ],
        "pauses": [
          {
            "start": "11:40",
            "end": "11:50",
            "floor": "4. patro"
          },
          {
            "start": "14:20",
            "end": "14:25",
            "floor": "3. patro"
          }
        ]
      },
      "17.5.": {
        "hours": [
          {
            "start": "8:00",
            "end": "8:45",
            "room": "U38",
            "groups": [
              "6.J celá"
            ],
            "subject": "D"
          },
          {
            "start": "8:55",
            "end": "9:40",
            "room": "U34",
            "groups": [
              "4.J celá"
            ],
            "subject": "D"
          },
          {
            "id": 2,
            "room": "Suplovac&#237; pohotovost"
          }
        ],
        "pauses": [
          {
            "start": "13:30",
            "end": "13:35",
            "floor": "3. patro"
          }
        ]
      },
      "18.5.": {
        "hours": [
          {
            "start": "10:00",
            "end": "10:45",
            "room": "U21",
            "groups": [
              "3.M celá"
            ],
            "subject": "D"
          },
          {
            "start": "12:45",
            "end": "13:30",
            "room": "U27",
            "groups": [
              "5.J celá"
            ],
            "subject": "D"
          },
          {
            "id": 7,
            "room": "Studovna"
          }
        ],
        "pauses": [
          {
            "start": "10:45",
            "end": "10:55",
            "floor": "4. patro"
          }
        ]
      },
      "19.5.": {
        "hours": [
          {
            "start": "8:55",
            "end": "9:40",
            "room": "U23",
            "groups": [
              "2.J celá"
            ],
            "subject": "D"
          },
          {
            "start": "10:00",
            "end": "10:45",
            "room": "U26",
            "groups": [
              "5.M celá"
            ],
            "subject": "D"
          },
          {
            "start": "10:55",
            "end": "11:40",
            "room": "U24",
            "groups": [
              "7.J celá"
            ],
            "subject": "D"
          },
          {
            "start": "11:50",
            "end": "12:35",
            "room": "U23",
            "groups": [
              "6.M celá"
            ],
            "subject": "D"
          }
        ],
        "pauses": [
          {
            "start": "10:45",
            "end": "10:55",
            "floor": "4. patro"
          }
        ]
      }
    }
  }
];

let simplyfiedTeacherList = [];

function addElement(nameStr, lessonsStr, placeStr) {
  const name = document.createElement('div');
  name.innerText = nameStr;
  name.className = "list-desription-element";
  name.classList.add('text-center');

  const subjectTeaching = document.createElement('div');
  subjectTeaching.innerText = lessonsStr;
  subjectTeaching.className = "list-desription-element";
  subjectTeaching.classList.add('text-center');

  const whereHeIs = document.createElement('div');
  whereHeIs.innerText = placeStr;
  whereHeIs.className = "list-desription-element";
  whereHeIs.classList.add('text-center');



  const newDiv = document.createElement("div");  
  newDiv.className = "teacher-list-li-content";

  newDiv.appendChild(whereHeIs);
  newDiv.appendChild(subjectTeaching);
  newDiv.appendChild(name);

  let li = document.createElement("li");
  li.appendChild(newDiv);
  li.classList.add("teacher-list-teacher-li");
  li.classList.add("shiny");
  li.addEventListener("mousemove", (e) => {
    const { x, y } = li.getBoundingClientRect();
    li.style.setProperty("--x", e.clientX - x);
    li.style.setProperty("--y", e.clientY - y);
  });
  if (!motionMatchMedia.matches) {
    li.addEventListener("mousemove", partialApply(handleHover, li));
    li.addEventListener("mouseleave", partialApply(resetStyles, li));
  }
  teacherList.appendChild(li);
  
}

const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 6;

function handleHover(div, e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY + document.documentElement.scrollTop + scrollWiew.scrollTop - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  div.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(div, e) {
    div.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

function partialApply(fn, ...args) {
    return fn.bind(null, ...args);
}

function addElements(){
    for(let i = 0; i < simplyfiedTeacherList.length; i++){
        const tchr = simplyfiedTeacherList[i]
        addElement(tchr['name'], tchr['lessons'], tchr['plce']);
    }
}

function classicTeacherList(rawJson){
  const teachingToday = false;

  
  //get current day string
  const date = new Date(); 
  const day= date.getDate();   
  const month= date.getMonth()+1;  
  const currDayStr = day.toString()+"."+month.toString()+".";// "15.5.";
  const currMinute = date.getHours() * 60 + date.getMinutes(); // 7 * 60 + 50;

  for(const teacher of rawJson){
    //get name
    const teacherName = teacher["name"];

    //get place    
    let place;
    if (!teacher["timetable"][currDayStr]){
      place = "Určitě doma";
    }
    else if(teacher["timetable"][currDayStr]["hours"].length == 0 && teacher["timetable"][currDayStr]["pauses"].length == 0){
      place = "Nejspíše doma";
    }

    else{
      place = "Nejspíše v kabinetě";

      //hours
      if (teacher["timetable"][currDayStr]['hours']){      
        for(const hour of teacher["timetable"][currDayStr]["hours"]){        
          const hourStart = parseInt(hour['start'].split(":")[0] * 60) + parseInt(hour['start'].split(":")[1]);
          const hourEnd = parseInt(hour['end'].split(":")[0] * 60) + parseInt(hour['end'].split(":")[1]);
  
          if(hourStart < currMinute && hourEnd > currMinute){ //is teaching
            place = "Právě učí v " + hour['room'];
            console.log(place);
          }
        }
  
        //pauses
        for(const pause of teacher["timetable"][currDayStr]["pauses"]){
          const pauseStart = parseInt(pause['start'].split(":")[0] * 60) + parseInt(pause['start'].split(":")[1]);
          const pauseEnd = parseInt(pause['end'].split(":")[0] * 60) + parseInt(pause['end'].split(":")[1]);
          
          if(pauseStart < currMinute && pauseEnd > currMinute){ //is guarding
            place = "Nejspíše dozoruje v " + pause['floor'].split(".")[0] + ". patře";          
          }        
        }        
      }

      else{ //nema dnes hodinu ale ma supl. pohotovost, hlida na chodbe nebo ve studovne
        console.log('villager'); 
      }
    }

    //get lessons
    let lessons = [];    
    for (let day in teacher["timetable"]){
      for(const hour of teacher["timetable"][day]['hours']){
        if(hour['room'] != 'Suplovac&#237; pohotovost' && hour['room'] != 'Studovna'){
          if(!lessons.includes(hour['subject'])){            
            lessons.push(hour['subject']);
          }
        }         
      }
    }  


    let lessonsString = '';

    for(let i = 0; i < lessons.length; i++){
      if(i != lessons.length - 1){
        lessonsString += lessons[i] + ', ';
      }
      else{
        lessonsString += lessons[i];
      }      
    }

    console.log(teacherName);
    console.log(lessonsString);
    console.log(place);

    simplyfiedTeacherList.push({'name':teacherName, 'lessons': lessonsString, 'plce': place})       
  }


}

classicTeacherList(rawTimetableJson);
addElements()

