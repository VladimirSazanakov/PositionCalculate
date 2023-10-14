import React from 'react';
import style from './InputData.module.scss';

const InputData = ()=>{
	const nameRef = React.createRef<HTMLTextAreaElement>();
	const kolichestvoRef = React.createRef<HTMLTextAreaElement>();
	const edVUpakovkeRef = React.createRef<HTMLTextAreaElement>();
	const priceZaEdNMCKRef = React.createRef<HTMLTextAreaElement>();

	const handleGetData = () =>{
		console.log(nameRef.current?.value.trimEnd().split('\n'));
		console.log(kolichestvoRef.current?.value.trimEnd().split('\n'));
		console.log(edVUpakovkeRef.current?.value.trimEnd().split('\n'));
		console.log(priceZaEdNMCKRef.current?.value.trimEnd().split('\n'));
	}

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
					<td ><textarea className={style.name} ref={nameRef} id="name" ></textarea></td>
					<td><textarea className={style.kolichestvo} ref={kolichestvoRef} id="kolichestvo"></textarea></td>
					<td><textarea className={style.edVUpakovke} ref={edVUpakovkeRef} id="edVUpakovke"></textarea></td>
					<td><textarea className={style.priceZaEdNMCK} ref={priceZaEdNMCKRef} id="priceZaEdNMCK"></textarea></td>
				</tr>
			</tbody>
		</table>
		<br />
		<input type="button" id="getDatabutton" value="Взять данные" onClick={handleGetData}/>
		<br />
		<br />
		<p>Введите исходные данные</p>
		<input type="button" id='buttonCalculate' value='Вычислить'></input>
    </>
  )
}

export default InputData;