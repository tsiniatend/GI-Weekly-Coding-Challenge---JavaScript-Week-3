//easy
let exercise = (x) => {
    let exercising = () => {
        return ('Todays exercise is : $(x)'); //connect x into return 
    }
    return exercising;
}

var run = exercise(`running`);
console.log(run());

var swim = exercise('swiming');
console.log(swim());

//medium

let cutPizzaSlices = (x) => {
    let sharedSlices = (y) => {
        var total = (`${(x / y).toFixed(2)}`);
        return ('Each Person gets ${total} slices of pizza.')
    }
    return sharedSlices;
}
var sharedSlices = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));


//hard

function person() {
    function privatePerson() { //person info private constructor
        const pii = {
            firstName: "kesu",
            lastName: "endalkachew",
            job: "bossman"
            ssn: 345678908,
            get name() {
                return this.firstName;
            },
        };
        return pii.name;
    }
    return privatePerson();
}
console.log(person());

// very hard
const tsiniate = new person("tsiniate", "bossman", 21);
tsiniate.exercise();
tsiniate.fetchJob();
class programmer extends person {
    constructor(name, job, age, languages) {
        super(name, age, job);
        this.age = age;
        this.name = name;
        this.job = job;
        this.langauges = languages;
        this.exercise = function () {
            return console.log("Joggin is cool");
        };
        this.fetchJob = function () {
            return console.log(`${this.name} is a ${this.job}`);
        };
    }
}
programmer.prototype.busy = true;
programmer.prototype.completetask = function () {
    return console.log((this.busy = false));
};
programmer.prototype.acceptNewTask = function () {
    return console.log((this.busy = true));
};
programmer.prototype.offerNewTask = function () {
    if (this.busy === false) {
        return console.log(`${this.name} can't accept any task now`);
    } else if (this.busy === true) {
        return console.log(
            `${this.name} would love to take on a new responsibility.`
        );
    } else {
        console.log(`Case not available`);
    }
};
programmer.prototype.learnLanguages = function (lang) { //language breakdown
    this.langauges = [lang];
};
programmer.prototype.listLanguages = function () {
    return console.log((this.busy = true));
};

const tsiniate = new programmer("tsiniate", "bossman", 21, "english");//list out final
tsiniate.acceptNewTask();
tsiniate.acceptNewTask();
tsiniate.learnLanguages("Amharic/HTML");
tsiniate.listLanguages();

