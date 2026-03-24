function gradeFinder() {

    const a = Number(prompt("Enter your fist mark"));
    const b = Number(prompt("Enter your second mark"));
    const c = Number(prompt("Enter your third mark"));
    const d = Number(prompt("Enter your fourth mark"));
    const e = Number(prompt("Enter your fifth mark"));

    let total = a+b+c+d+e;
    let avg = total/5;
    
    if(avg>=90){
        alert("Total Mark:" + total + ", " + "Average mark:" + avg + ", " + "Grade: A+" );
    }else if(avg>80 && avg<=89){
        alert("Total Mark:" + total + ", " + "Average mark:" + avg + ", " + "Grade: A" );
    }else if(avg>70 && avg<=79){
        alert("Total Mark:" + total + ", " + "Average mark:" + avg + ", " + "Grade: B" );
    }else if(avg>60 && avg<=69){
        alert("Total Mark:" + total + ", " + "Average mark:" + avg + ", " + "Grade: C" );
    }else if(avg>50 && avg<=59){
        alert("Total Mark:" + total + ", " + "Average mark:" + avg + ", " + "Grade: D" );
    }else{
        alert("Total Mark:" + total + ", " + "Average mark:" + avg + ", " + "Grade: F" );
    }
}