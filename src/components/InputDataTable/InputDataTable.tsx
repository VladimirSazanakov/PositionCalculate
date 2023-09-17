import style from './InputDataTable.module.scss';

const InputDataTable = () =>{
  return (
    <div>
			<p>Table input Test</p>
			{/* <!--<input type="text" id="colRowsInputTable">--> */}
			<input type="button" id="CreateRowsButton" value="Добавить 1 строку" />
			<input type="button" id="DeleteRowsButton" value="Удалить 1 строку снизу" />
			<br />
			<br />

			<table id="inputTable">
				<tr>
					<th>Наименование</th>
					<th>Кол-во, ед.езмер</th>
					<th>Ед. в упаковке</th>
					<th>Цена НМЦК за ед. измер</th>
				{/* <!--
					<th>Сумма НМЦК</th>
					<th>Сниж-е %</th>
					<th>Сумма со снижением</th>
				--> */}
				</tr>
			</table>

		</div>
  )
}

export default InputDataTable;