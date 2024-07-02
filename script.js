const updateDayDate = () => {
    const days = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = weekday[days.getUTCDay()];
  
    document.getElementById("currentDate").innerHTML = today;
  };
  
  setInterval(updateDayDate, 60000);
  updateDayDate();
  
  const updateTime = () => {
    const dt = new Date(); 
    let hh = dt.getUTCHours();
    const mm = dt.getUTCMinutes().toString().padStart(2, '0');
    const ss = dt.getUTCSeconds().toString().padStart(2, '0');
    const ampm = hh >= 12 ? 'pm' : 'am';
    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
  
    const pr = `${hh}:${mm}:${ss} ${ampm}`;
  
    document.getElementById("currentTime").innerHTML = pr;
  };
  
  setInterval(updateTime, 1000);
  updateTime();
  