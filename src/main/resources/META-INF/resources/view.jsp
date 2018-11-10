<%@ include file="/init.jsp"%>
<div ng-app='myApp' ng-controller='myController'>
	<h3><liferay-ui:message key="pais.web.portlet.caption"/></h3>
	<hr>
	<div class="table table-fixed tabla">
	   <table class="table table-striped">
			<thead>
				<tr>
					<th align="center">NOMBRE</th>
					<th align="center">CAPITAL</th>
					<th align="center">MONEDA</th>
					<th align="center">IDIOMA</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat='pais in paises'>
					<td>{{pais.nombre}}</td>
					<td>{{pais.capital}}</td>
					<td>{{pais.moneda}}</td>
					<td>{{pais.idioma}}</td>
				</tr>
 			</tbody>
		</table>
	</div>
</div>