import {Data} from "./quest2";

const data1 = new Data(11, 8, 2023);
const data2 = new Data(1, 2, 2023);

      console.log(data1.compara(data2));
      console.log(data1.getMesExtenso());
      console.log(data1.clone());
      