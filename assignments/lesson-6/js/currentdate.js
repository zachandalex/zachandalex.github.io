function currentdate()
    {
        var today = new Date();
        document.getElementById("currentdate").innerHTML=today.toDateString();
        document.write (today);
    }