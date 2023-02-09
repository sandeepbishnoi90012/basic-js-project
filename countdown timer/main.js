const inputDate = prompt('please enter the date')
    setInterval(()=>{
        const endDate = new Date(inputDate);
        document.getElementsByClassName('date')[0].innerText = endDate.toDateString();

        const currentDate = new Date();

        let difference = (endDate - currentDate)/1000;
        
        let Days = Math.floor(difference/60/60/24);
        document.getElementsByTagName("input")[0].value = Days;

        let Hours = Math.floor((difference/60/60)%24);
        document.getElementsByTagName("input")[1].value = Hours;

        let Minutes = Math.floor((difference/60)%60);
        document.getElementsByTagName("input")[2].value = Minutes;

        let Second = Math.floor(difference%60);
        document.getElementsByTagName("input")[3].value = Second;

    },1000)
