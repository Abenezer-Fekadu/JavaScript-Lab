let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    weightStatus: "",
    bmi: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    bimStatus: function(){
        return this.weight/Math.pow(this.height,2); 
    },
    calcBmi: function() {
        let tempBmi = this.bimStatus();
        this.bmi = tempBmi;
        if (tempBmi <= 18.5){
            this.weightStatus = "Underweight"
        }
        else if (18.5 > tempBmi <= 24.9){
            this.weightStatus = "Normal or Healthy Weight"
        }
        else if (25 >= tempBmi <=29.9 ){
            this.weightStatus = "Overweight"
        }
        else{
            this.weightStatus = "Obese"
        }
    }
};

personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}

personProfile.ageCalc();
personProfile.checkVote();
personProfile.calcBmi();


// Adding Self Invoking Function Expression 
(function() {

    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    console.log("Family Members ");
    //Displaying the family member with foreach
    personProfile.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    // call bmi calculator 
    console.log("Your weight is " + personProfile.bmi + " " + "and Status: " + personProfile.weightStatus);
    console.log("**************************************************************")

})();