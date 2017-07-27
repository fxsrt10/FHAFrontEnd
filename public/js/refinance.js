 $.jgrid = $.jgrid || {};
 $.jgrid.no_legacy_api = true;
 $.jgrid.useJSON = true;

$(function() {

	$.extend($.jgrid.defaults, {
				datatype: 'json',
				jsonReader : {
					repeatitems:false,
					id: "id", 
					root: function(obj) { return obj; },
					total: function(result) {
						//Total number of pages
						return Math.ceil(result.total / result.max);
					},
					records: function(result) {
						//Total number of records
						return result.total;
					}
				},
				prmNames: {
					page: "page.page",
					rows: "page.size",
					sort: "page.sort",
					order: "page.sort.dir"
				},
				sortname: 'title',
				sortorder: 'asc',
				height: 'auto',
				viewrecords: true,
				rowList: [10, 20, 50, 100],
				altRows: true,
				loadError: function(xhr, status, error) {
					alert(error);
				}
			});

	$.extend($.jgrid.edit, {
				closeAfterEdit: true,
				closeAfterAdd: true,
				ajaxEditOptions: { contentType: "application/json" },
				mtype: 'PUT',
				serializeEditData: function(data) {
					delete data.oper;
					return JSON.stringify(data);
				}
			});
	$.extend($.jgrid.del, {
				mtype: 'DELETE',
				serializeDelData: function() {
					return "";
				}
			});

	var editOptions = {
		onclickSubmit: function(params, postdata) {
			params.url = URL + '/' + postdata.id;
		}
	};
	var addOptions = {mtype: "POST"};
	var delOptions = {
		onclickSubmit: function(params, postdata) {
			params.url = URL + '/' + postdata;
		}
	};

	var URL = 'https://gs-rest-finaljkapp-gse00012261.apaas.us6.oraclecloud.com/purchase';
    //var URL = '/clients'
	var options = {
		url: URL,
		editurl: URL,
		colModel:[
			{
				name:'id',
				label: 'ID',
				index: 'id',
				formatter:'integer',
				width: 40,
				editable: false
			},
			{
				name:'propertyState',
				label: 'Property State',
				index: 'propertyState',
				width: 300,
				editable: true,
				editrules: {required: true}
			},
			{
				name:'propertyCity',
				label: 'Property City',
				index: 'propertyCity',
				width: 200,
				editable: true,
				editrules: {required: true}
			},
			{
				name:'Property Country',
				label: 'Property Country',
				index: 'propertyCounty',
				width: 200,
				editable: true,
				editrules: {required:true}
			},
			{
				name:'propertyZip',
				label: 'Property Zip',
				index: 'propertyZip',
				width: 80,
				align: 'center',
				editable: true,
				editrules: {required: true}
			},
			{
				name:'sponsorOriginator',
				label: 'Org. Mortgagee',
				index: 'sponsorOriginator',
				width: 46,
				align: 'center',
				editable: true
			},
			{
				name:'mortgageNumber',
				label: 'Org. Mortgagee Number',
				index: 'mortgageNumber',
				editable: true,
				editrules: {required: true}
			},
			{
				name:'sponsorName',
				label: 'Sponsor Name',
				index: 'sponsorName',
				width: 100,
				editable: true,
				editrules: {required: true}
			},
            {
				name:'sponsorNumber',
				label: 'Sponsor Number',
				index: 'sponsorNumber',
				width: 100,
				editable: true,
				editrules: {required: true}
			},
            {
				name:'downpaymentSource',
				label: 'Down Payment Source',
				index: 'downpaymentSource',
				width: 100,
				editable: true,
				editrules: {required: true}
			},
            {
				name:'productType',
				label: 'Product Type',
				index: 'productType',
				width: 100,
				editable: true,
				editrules: {required: true}
			},
            {
				name:'loanPurpose',
				label: 'Loan Purpose',
				index: 'loanPurpose',
				width: 100,
				editable: true,
				editrules: {required: true}
			},
            {
				name:'propertyType',
				label: 'Property Type',
				index: 'propertyType',
				width: 100,
				editable: true,
				editrules: {required: true}
			},
            {
				name:'interestRate',
				label: 'Interest Rate',
				index: 'interestRate',
				width: 100,
				editable: true,
				editrules: {required: true}
			},
            {
				name:'origMortgageAmount',
				label: 'Original Mortgage Amount',
				index: 'Original Mortgage Amount',
				width: 100,
				editable: true,
				editrules: {required: true}
			},
		],
		caption: "FHA data",
		pager : '#pager1',
		height: 'auto',
		ondblClickRow: function(id) {
			jQuery(this).jqGrid('editGridRow', id, editOptions);
		}
	};

	$("#grid1")
			.jqGrid(options)
			.navGrid('#pager1',
			{}, //options
			editOptions,
			addOptions,
			delOptions,
			{} // search options
	);

});