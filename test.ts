class Person {
    name : string;
    age : number;

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    Affiche(){
        return `Bonjour je m'appelle ${this.name} et j'ai ${this.age} ans.`;
    }
}

let p = new Person("Hilmi",24);
console.log(p.Affiche());

//La manipulation de l'héritage
class Developer extends Person {
    name : string;
    age : number;
    language : string;
    constructor(name,age,language){
        super(name,age);
        this.language=language
    }

    Affiche () {
       return super.Affiche()+` Et je suis specialisé en ${this.language}`;
    }
}

let d = new Developer("Hilmi",24,"JavaScript");
console.log(d.Affiche());
console.log(`Je suis
 Hilmi
 24
 ans
 `);
