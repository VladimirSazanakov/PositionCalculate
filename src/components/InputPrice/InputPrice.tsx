import style from './InputPrice.module.scss';

const InputPrice = () => {
  return (
    <>
      <p>Цена контракта--------------НДС------------Снижение</p>

      <div>
        <input type="text" inputMode='decimal' className={style.price} placeholder="Цена контракта" />
        <input type="text" inputMode='decimal' className={style.nds} id='nds' defaultValue="10" />
        <input type="text" inputMode="decimal" className={style.snizhenie} id='snizhenie_input' defaultValue="0" />
      </div>
    </>
  )
}

export default InputPrice;