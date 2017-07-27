/*
$(function() {

//    var countries = [
//        { Name: "", Id: 0 },
//        { Name: "United States", Id: 1 },
//        { Name: "Canada", Id: 2 },
//        { Name: "United Kingdom", Id: 3 },
//        { Name: "France", Id: 4 },
//        { Name: "Brazil", Id: 5 },
//        { Name: "China", Id: 6 },
//        { Name: "Russia", Id: 7 }
//    ];
    var data = [
  {
    "Property State": "Otto Clay",
    "Property City": 61,
    "Property Country": 6,
    "Property Zip": "Ap #897-1459 Quam Avenue",
    "Origination Mortgagee/Sponsor Originator": false,
    "Originating Mortgagee Number": "jhgfd",
    "Sponsor Name": "gffdgkhdhf",
    "Sponsor Number": "gfgsdfj",
    "Down Payment Source":"jhgshrhghdfh",
    "Non Profit Number":"hfhsdkfhskhf",
    "Product Type": "gdsfgfg",
    "Loan Purpose": "sgdskfd",
    "Property Type": "gdgdfd",
    "Interest Rate": "ghssg",
    "Original Mortgage Amount":"hsgskg",
    "Endorsement Year": "ggfdsgdkgkf",
    "Endorsement Month": "khfssdd"
      
  }
];

    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete?",
        controller: {
            loadData: function(filter) {
                return $.ajax({
                    type: "GET",
                    url: "/clients",
                    data: filter
                });
            }
//            insertItem: function(item) {
//                return $.ajax({
//                    type: "POST",
//                    url: "/clients",
//                    data: item
//                });
//            },
//            updateItem: function(item) {
//                return $.ajax({
//                    type: "PUT",
//                    url: "/clients",
//                    data: item
//                });
//            },
//            deleteItem: function(item) {
//                return $.ajax({
//                    type: "DELETE",
//                    url: "/clients",
//                    data: item
//                });
//            }
        },
        fields: [
            { name: "Property State", type: "text", width: 50 },
            { name: "Property City", type: "text", width: 50, filtering: false },
            { name: "Property Country", type: "text", width: 50 },
            { name: "Property Zip", type: "text", width: 50 },
            { name: "Org. Mortgagee", type: "text", width: 50 },
            { name: "Org. Mortgagee Number", type: "text", width: 50 },
            { name: "Sponsor Name", type: "text", width: 50 },
            { name: "Sponsor Number", type: "text", width: 50 },
            { name: "Down Payment Source", type: "text", width: 50 },
            { name: "Product Type", type: "text", width: 50 },
            { name: "Loan Purpose", type: "text", width: 50 },
            { name: "Property Type", type: "text", width: 50 },
            { name: "Interest Rate", type: "text", width: 50 },
            { name: "Original Mortgage Amount", type: "text", width: 50 },
//            { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
//            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
            { type: "control" }
        ]
    });
    
});

            { name: "Property State", type: "text"},
            { name: "Property City", type: "text" },
            { name: "Property Country", type: "text" },
            { name: "Property Zip", type: "text"},
            { name: "Org. Mortgagee", type: "text" },
            { name: "Org. Mortgagee Number", type: "text" },
            { name: "Sponsor Name", type: "text" },
            { name: "Sponsor Number", type: "text" },
            { name: "Down Payment Source", type: "text" },
            { name: "Product Type", type: "text" },
            { name: "Loan Purpose", type: "text" },
            { name: "Property Type", type: "text" },
            { name: "Interest Rate", type: "text" },
            { name: "Original Mortgage Amount", type: "text" }

*/
        $.jgrid = $.jgrid || {};
        $.jgrid.no_legacy_api = true;
        $.jgrid.useJSON = true;

//        $(function () {
//            "use strict";
//            var $grid = $("#list"),
//                gridData,
//                startTime,
//                measureTime = false,
//                timeInterval;
//
//            var date = new Date(), t = Object.prototype.toString.call(date), t1 = String(date);
//
//            //alert("start to generate the data");
//            //gridData = getGridData(4000);
//            //alert("start to fill the grid")
//            startTime = new Date();
//            $grid.jqGrid({
//            url: '/clients',
//            colModel: [
//            { name: "Property State", type: "text"},
//            { name: "Property City", type: "text" },
//            { name: "Property Country", type: "text" },
//            { name: "Property Zip", type: "text"},
//            { name: "Org. Mortgagee", type: "text" },
//            { name: "Org. Mortgagee Number", type: "text" },
//            { name: "Sponsor Name", type: "text" },
//            { name: "Sponsor Number", type: "text" },
//            { name: "Down Payment Source", type: "text" },
//            { name: "Product Type", type: "text" },
//            { name: "Loan Purpose", type: "text" },
//            { name: "Property Type", type: "text" },
//            { name: "Interest Rate", type: "text" },
//            { name: "Original Mortgage Amount", type: "text" }
//                ],
//                cmTemplate: { width: 100, autoResizable: true },
//                rowNum: 20,
//                rownumWidth: 40,
//                rowList: [20, 100, 1000, 10000, "100000:All"],
//                viewrecords: true,
//                rownumbers: true,
//                toppager: true,
//                pager: true,
//                shrinkToFit: false,
//                autoencode: true,
//                caption: "Shows the performance of resizing. Make double-click on the column resizer"
//             }).jqGrid("filterToolbar", {
//                    beforeSearch: function () {
//                        startTime = new Date();
//                        measureTime = true;
//                        return false; // allow filtering
//                    }
//             }).jqGrid("gridResize");
//        });


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

	var URL = 'https://gs-rest-finaljkapp-gse00012261.apaas.us6.oraclecloud.com/purchase/45';
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
		pager : '#pager',
		height: 'auto',
		ondblClickRow: function(id) {
			jQuery(this).jqGrid('editGridRow', id, editOptions);
		}
	};

	$("#grid")
			.jqGrid(options)
			.navGrid('#pager',
			{}, //options
			editOptions,
			addOptions,
			delOptions,
			{} // search options
	);

});
