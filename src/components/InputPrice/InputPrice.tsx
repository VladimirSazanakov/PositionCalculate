import style from './InputPrice.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reducer';
import { setPrice, setNds, setSnizhenie } from '../../state/reducer/reducer';

const InputPrice = () => {
  const state = useAppSelector(state => state.price);
  const dispatch = useAppDispatch();

  const price = state.price;
  const nds = state.nds;
  const snizhenie = state.snizhenie;

  const priceOnChange = (event: any) => {
    // console.log(event.target.value);
    const value = event.target.value;
    dispatch(setPrice(value));
  }

  return (
    <>
      <p>Цена контракта--------------НДС------------Снижение</p>

      <div>
        <label className={style.label} > Цена контракта

          <input
            type="text"
            inputMode='decimal'
            className={style.price}
            placeholder="Цена контракта"
            value={price}
            onChange={priceOnChange} />
        </label>
        <input type="text" inputMode='decimal' className={style.nds} id='nds' value={nds} />
        <input type="text" inputMode="decimal" className={style.snizhenie} id='snizhenie_input' value={snizhenie} />
      </div>
    </>
  )
}

export default InputPrice;