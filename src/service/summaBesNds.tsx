
export function summaBesNds(number: number, stavka: number){
  //stavka = parseInt(stavka);
  let num = number*(1-(stavka/(100+stavka)));
  return num.toFixed(2);
}