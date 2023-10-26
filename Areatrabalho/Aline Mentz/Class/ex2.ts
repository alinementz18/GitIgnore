export class Livro {
    titulo: string;
    autor: string
    ano: number


constructor (titulo: string, autor: string, ano: number){
this.titulo = titulo;
this.autor = autor;
this.ano = ano;
}

obterDetalhes(): void {
    console.log("Nome", this.titulo, ", Autor", this.autor, ", Ano", this.ano)

}
}