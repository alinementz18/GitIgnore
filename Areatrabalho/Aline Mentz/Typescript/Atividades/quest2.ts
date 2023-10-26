    export class Data {
        public dia: number;
        public mes: number;
        public ano: number;
      
        constructor(dia: number, mes: number, ano: number) {
          if(dia>1 && dia<=31){
          this.dia = dia;
          } else {
            console.log ("dia inválido")
          }
          if (mes > 0 && mes <= 12) {
          this.mes = mes;
          } else {
            console.log("Mes inválido");
          }
          if (ano>= 1){
          this.ano = ano;
          } else {
            console.log("Ano inválido")
          }
        }
      
        compara(outraData: Data): string {
          if (this.dia === outraData.dia && this.mes === outraData.mes && this.ano ===outraData.ano){
            return "Datas iguais";
          } else {  
            return "Datas diferentes"
          }
        }
      
  
       getDia(): number {
          return this.dia;
        }
      
        getMes(): number {
          return this.mes;
        }
      
        getMesExtenso(): string {
          switch(this.mes){
            case 1: return "Janeiro";
            case 2: return "Fevereiro";
            case 3: return "Março";
            case 4: return "Abril";
            case 5: return "Maio";
            case 6: return "Junho";
            case 7: return "Julho";
            case 8: return "Agosto";
            case 9: return "Setembro";
            case 10: return "Outubro";
            case 11: return "Novembro";
            case 12: return "Dezembro";
        }
        return ""
        }
      
        getAno(): number {
          return this.ano;
        }
      
        isBissexto(): string {
          let retorno;
          const bissexto = (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
        if(bissexto){
          retorno = "O ano é bissexto"
        } else {
          retorno = "O ano não é bissexto"
        }
        return retorno;
      }
      
        clone(): Data {
          return new Data(this.dia, this.mes, this.ano);
        }
      }
      
      