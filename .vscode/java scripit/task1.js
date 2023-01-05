// Implement the class User as per the youtuber. Every time a new user registers, keep a count of number of registered users.
//At any given point of time if we do User.registeredUsers , i should be able to get the value .

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password= password;

    }
    static countUsers(){
        console.log('There are 50 users');
    }
    register(){
        console.log(this.username+ ' is now registered');
    }
}
    class Member extends User{
        constructor(username, email, password, memberPackage){
            super(username, email, password);
            this.package = memberPackage;
        }

        getPackage(){
            console.log(this.username +' is for the ' + this.package + 'package');
        }
    }
    let surya = new Member('surya', 'surya@gmail.com', 134898, 'standard');
    surya.register();
