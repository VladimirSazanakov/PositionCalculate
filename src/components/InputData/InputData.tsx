import style from './InputData.module.scss';

const InputData = ()=>{
  return (
    <>
    <table>
			<thead>
				<tr>
					<td>Наименование</td>
					<td>Колличество</td>
					<td>Ед. в упаковке</td>
					<td>Цена за ед. НМЦК</td> 
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><textarea className={style.name} id="name" ></textarea></td>
					<td><textarea className={style.kolichestvo} id="kolichestvo"></textarea></td>
					<td><textarea className={style.edVUpakovke} id="edVUpakovke"></textarea></td>
					<td><textarea className={style.priceZaEdNMCK} id="priceZaEdNMCK"></textarea></td>
				</tr>
			</tbody>
		</table>
		<br />
		<input type="button" id="getDatabutton" value="Взять данные" />
		<br />
		<br />
		<p>Введите исходные данные</p>
		<input type="button" id='buttonCalculate' value='Вычислить'></input>
    </>
  )
}

export default InputData;