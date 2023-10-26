import {CriaturaMagica, GuardiaoAnciao, SereiaEncantada, DragaoMilenar} from "./habilidade"


const criatura = new CriaturaMagica("Mago", "Humano");


criatura.usarMagia();
criatura.conjurarFeitico();
console.log("Nome:", criatura.getNome());
console.log("Tipo:", criatura.getTipo());


const guardiao = new GuardiaoAnciao("Gandalf");
const dragao = new DragaoMilenar("Niv");
const sereia = new SereiaEncantada("Ariel");


guardiao.usarMagia();
guardiao.conjurarFeitico();
console.log("Nome do Guardião Ancião:", guardiao.getNome());
console.log("Tipo do Guardião Ancião:", guardiao.getTipo());

dragao.usarMagia();
dragao.conjurarFeitico();
console.log("Nome do Dragão Milenar:", dragao.getNome());
console.log("Tipo do Dragão Milenar:", dragao.getTipo());

sereia.usarMagia();
sereia.conjurarFeitico();
console.log("Nome da Sereia Encantada:", sereia.getNome());
console.log("Tipo da Sereia Encantada:", sereia.getTipo());

const gandalf = new GuardiaoAnciao("Gandalf");
const niv = new DragaoMilenar("Niv");
const ariel = new SereiaEncantada("Ariel");
