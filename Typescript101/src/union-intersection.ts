
// union

type NoobDeveloper = {
    name: string;
};

type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
};

// stating NoobDeveloper or JuniorDeveloper as type declaration , it is called union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'saif',
    expertise: 'React JS Developer',
    experience: 7,
};



// intersaction

type NoobDeveloper1 = {
    name: string;
};


// not using or operator, here we are using and operator to declare object type
type JuniorDeveloper1 = NoobDeveloper & {
    expertise: string;
    experience: number;
};


const newDeveloper1: JuniorDeveloper1 = {
    name: "saif",   
    expertise: 'React JS Developer',
    experience: 7,
}

// intersection 2.0 

type NextLevelDeveloper = JuniorDeveloper1 & {
    leadershipExperience: number;
    level: 'junior' | 'mid' | 'senior';
};


const halfProDev: NextLevelDeveloper = {
    name: 'saif',
    expertise: 'shera technologies',
    experience: 2,
    leadershipExperience: 1,
    level: 'junior',
}