define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "TabContainer_eqmzg4c",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_eqmzg4c_caption)#"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_uwj8317",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_eqmzg4c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_rztzvu7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 8
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_rztzvu7",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_rztzvu7DS_Id",
					"columns": [
						{
							"id": "e86d128e-a9ae-deff-f203-9f2d08ddcfc3",
							"code": "DataGrid_rztzvu7DS_RZ9Name",
							"caption": "#ResourceString(DataGrid_rztzvu7DS_RZ9Name)#",
							"dataValueType": 28,
							"width": 151
						},
						{
							"id": "6e2966a2-18cd-5f48-8304-883a93054522",
							"code": "DataGrid_rztzvu7DS_RZ9Status",
							"path": "RZ9Status",
							"caption": "#ResourceString(DataGrid_rztzvu7DS_RZ9Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "RZ9RequestStatus",
							"width": 151
						},
						{
							"id": "5fffd8e3-dd62-ec4e-4de6-f811c03268fd",
							"code": "DataGrid_rztzvu7DS_RZ9Category",
							"path": "RZ9Category",
							"caption": "#ResourceString(DataGrid_rztzvu7DS_RZ9Category)#",
							"dataValueType": 10,
							"referenceSchemaName": "RZ9RequestCategory",
							"width": 169
						},
						{
							"id": "110f9614-237c-5405-5b8a-6177496ef519",
							"code": "DataGrid_rztzvu7DS_RZ9Subcategory",
							"path": "RZ9Subcategory",
							"caption": "#ResourceString(DataGrid_rztzvu7DS_RZ9Subcategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "RZ9RequestSubcategory",
							"width": 177
						},
						{
							"id": "f77b4de5-8408-e6b6-696e-23bd7a109da3",
							"code": "DataGrid_rztzvu7DS_RZ9Owner",
							"path": "RZ9Owner",
							"caption": "#ResourceString(DataGrid_rztzvu7DS_RZ9Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					]
				},
				"parentName": "GridContainer_uwj8317",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_rztzvu7": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_rztzvu7DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_rztzvu7DS_RZ9Name": {
									"modelConfig": {
										"path": "DataGrid_rztzvu7DS.RZ9Name"
									}
								},
								"DataGrid_rztzvu7DS_RZ9Status": {
									"modelConfig": {
										"path": "DataGrid_rztzvu7DS.RZ9Status"
									}
								},
								"DataGrid_rztzvu7DS_RZ9Category": {
									"modelConfig": {
										"path": "DataGrid_rztzvu7DS.RZ9Category"
									}
								},
								"DataGrid_rztzvu7DS_RZ9Subcategory": {
									"modelConfig": {
										"path": "DataGrid_rztzvu7DS.RZ9Subcategory"
									}
								},
								"DataGrid_rztzvu7DS_RZ9Owner": {
									"modelConfig": {
										"path": "DataGrid_rztzvu7DS.RZ9Owner"
									}
								},
								"DataGrid_rztzvu7DS_Id": {
									"modelConfig": {
										"path": "DataGrid_rztzvu7DS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_rztzvu7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "RZ9Request",
							"attributes": {
								"RZ9Name": {
									"path": "RZ9Name"
								},
								"RZ9Status": {
									"path": "RZ9Status"
								},
								"RZ9Category": {
									"path": "RZ9Category"
								},
								"RZ9Subcategory": {
									"path": "RZ9Subcategory"
								},
								"RZ9Owner": {
									"path": "RZ9Owner"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_rztzvu7DS": [
						{
							"attributePath": "RZ9Applicant",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});