var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.Affiche = function () {
        return "Bonjour je m'appelle " + this.name + " et j'ai " + this.age + " ans.";
    };
    return Person;
}());
var p = new Person("Hilmi", 24);
console.log(p.Affiche());
//La manipulation de l'héritage
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, language) {
        _super.call(this, name, age);
        this.language = language;
    }
    Developer.prototype.Affiche = function () {
        return _super.prototype.Affiche.call(this) + (" Et je suis specialis\u00E9 en " + this.language);
    };
    return Developer;
}(Person));
var d = new Developer("Hilmi", 24, "JavaScript");
console.log(d.Affiche());
console.log("Je suis\n Hilmi\n 24\n ans\n ");
