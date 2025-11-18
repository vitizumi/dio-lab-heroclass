// Class init
class heroClass{
    constructor(heroiNome, heroiIdade, heroiClasse){
        // def de params
        this.heroiNome = heroiNome;
        this.heroiIdade = heroiIdade;
        this.heroiClasse = heroiClasse;
        this.heroiAtaque = "";

        // def de tipo de ataque baseado na classe
        switch (true) {
            case (this.heroiClasse == "mago"):
                this.heroiAtaque = "magia";
                break
            case (this.heroiClasse == "guerreiro"):
                this.heroiAtaque = "espada";
                break
            case (this.heroiClasse == "monge"):
                this.heroiAtaque = "artes marciais";
                break
            case (this.heroiClasse == "ninja"):
                this.heroiAtaque = "shuriken";
                break
        }
    }

    // meth def de ataque
    atacar(){
        console.log(`o ${this.heroiClasse} atacou usando ${this.heroiAtaque}`);
    }
}

// def de cada tipo de classe 
let heroiMago = new heroClass("John", 20, "mago");
let heroiWar = new heroClass("Jim", 40, "guerreiro");
let heroiMonk = new heroClass("Jobst", 60, "monge");
let heroiNin = new heroClass("Marcelo", 15, "ninja");

// output para cada classe debug
// console.log(heroiMago);
// console.log(heroiWar);
// console.log(heroiMonk);
// console.log(heroiNin);

// execucao de meth atacar de cada classe
heroiMago.atacar();
heroiWar.atacar();
heroiMonk.atacar();
heroiNin.atacar();
