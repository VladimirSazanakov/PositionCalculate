import style from './InputPrice.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reducer';
import { setPrice, setNds, setSnizhenie } from '../../state/reducer/price';

const InputPrice = () => {
  const state = useAppSelector(state => state.price);
  const dispatch = useAppDispatch();

  const price = state.price;
  const nds = state.nds;
  const snizhenie = state.snizhenie;

  const validNumber = (str:string):boolean =>{
    return !isNaN(Number(str));
  }

  const priceOnChange = (event: any) => {
    // console.log(event.target.value);
    let value = event.target.value;
    value=value.replace(',','.');
    value = value.replace(' ', '');
    if (validNumber(value)){
      dispatch(setPrice(value));
    }
    console.log(price);
  }

  const ndsOnChange = (event: any) =>{
    let value = event.target.value;
    value = value.replace(',','.');
    value = value.replace(' ', '');
    if(validNumber(value)){
      dispatch(setNds(value));
    }
    console.log('NDS', value);
  }

  const snizhenieOnChange = (event: any) =>{
    let value = event.target.value;
    value = value.replace(',','.');
    value = value.replace(' ', '');
    if(validNumber(value)){
      dispatch(setSnizhenie(value));
    }
    console.log('snizhenie', value);
  }

  return (
    <>
      <div className={style.InputPrice}>
      <div className={style.elementContainer}>
      <p className={style.label}> Цена контракта</p>
      <input
      type="text"
      inputMode='decimal'
      className={style.price}
      placeholder="Цена контракта"
      value={price}
      onChange={priceOnChange} />
      </div>

      <div className={style.elementContainer}>
      <p className={style.label}>НДС, %</p>
        <input type="text" inputMode='decimal' className={style.nds} id='nds' value={nds} onChange={ndsOnChange} />
        </div>
        <div className={style.elementContainer}>
        <p className={style.label}>Снижение, %</p>
        <input type="text" inputMode="decimal" className={style.snizhenie} id='snizhenie_input' value={snizhenie} onChange={snizhenieOnChange} />
        </div>
      </div>
    </>
  )
}

export default InputPrice;
