var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseAge(prompt("Enter your age"));
     floatDays = parseFloat(floatAge * 365.25).toFixed(2);
     floatMonths = parseFloat(floatAge * 12 ).toFixed(2);
     intWeeks = parseInt(floatDays / 7 );
    intFortnights = parseInt(floatAge / 14 );
      alert("You are  " + floatAge + " years old " +
     "You are "+ floatDays + " days old " +
     "You are " + floatMonths + " months old " +
    " You are" + intWeeks + " weeks old " +
     "You are " + intFortnights +" fortnights old!!" );
     