define("RZ9Request_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_RZ9Name",
							"caption": "#ResourceString(PDS_RZ9Name)#",
							"dataValueType": 1,
							"width": 181
						},
						{
							"id": "3aeb28b9-d7ec-ebac-3a10-c894fd4239f9",
							"code": "PDS_RZ9Status",
							"path": "RZ9Status",
							"caption": "#ResourceString(PDS_RZ9Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "RZ9RequestStatus"
						},
						{
							"id": "f71ebb9b-393b-38eb-2121-39cd252a11be",
							"code": "PDS_RZ9Category",
							"path": "RZ9Category",
							"caption": "#ResourceString(PDS_RZ9Category)#",
							"dataValueType": 10,
							"referenceSchemaName": "RZ9RequestCategory",
							"width": 179
						},
						{
							"id": "65b5c7db-3069-2f35-c742-818ac0ada74c",
							"code": "PDS_RZ9Subcategory",
							"path": "RZ9Subcategory",
							"caption": "#ResourceString(PDS_RZ9Subcategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "RZ9RequestSubcategory"
						},
						{
							"id": "d9252667-7405-a1cd-81be-d3b509dc8a1a",
							"code": "PDS_RZ9Owner",
							"path": "RZ9Owner",
							"caption": "#ResourceString(PDS_RZ9Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 169
						},
						{
							"id": "d1596ea8-5ebc-c955-799b-3ecf18afd9d1",
							"code": "PDS_RZ9Applicant",
							"path": "RZ9Applicant",
							"caption": "#ResourceString(PDS_RZ9Applicant)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 189
						},
						{
							"id": "fc9df803-cba1-6e4b-4382-0ae3bfd1aeb7",
							"code": "PDS_RZ9ApplicantType",
							"path": "RZ9Applicant.Type",
							"caption": "#ResourceString(PDS_RZ9ApplicantType)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContactType",
							"width": 136
						},
						{
							"id": "b399961f-09b9-9620-02b3-691cc5f37c4e",
							"code": "PDS_RZ9RequestExpensesRZ9RequestIdCount36665667",
							"path": "[RZ9RequestExpenses:RZ9Request].Id",
							"caption": "#ResourceString(PDS_RZ9RequestExpensesRZ9RequestIdCount36665667)#",
							"dataValueType": 4,
							"referenceSchemaName": "RZ9RequestExpenses",
							"width": 146
						},
						{
							"id": "43585014-971d-1105-36f4-dbeeae4f9edb",
							"code": "PDS_RZ9RequestExpensesRZ9RequestRZ9AmountSume944f54f",
							"path": "[RZ9RequestExpenses:RZ9Request].RZ9Amount",
							"caption": "#ResourceString(PDS_RZ9RequestExpensesRZ9RequestRZ9AmountSume944f54f)#",
							"dataValueType": 6,
							"referenceSchemaName": "RZ9RequestExpenses",
							"width": 149
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'"
				}
			},
			{
				"operation": "remove",
				"name": "DataTable",
				"properties": [
					"selectionState",
					"_selectionOptions"
				]
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_caption)#",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LookupQuickFilterByTag",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema"
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Tag_Virtual_Column"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					]
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "RZ9Request",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					],
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": []
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					}
				},
				"parentName": "SectionContentWrapper",
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
					"ItemsSorting": {},
					"FolderTree_visible": {
						"value": false
					},
					"FolderTree_items": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Id"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Name"
									}
								},
								"ParentId": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Parent.Id"
									}
								},
								"FilterData": {
									"modelConfig": {
										"path": "FolderTree_items_DS.FilterData"
									}
								}
							}
						},
						"modelConfig": {
							"path": "FolderTree_items_DS",
							"filterAttributes": [
								{
									"name": "FolderTree_items_DS_filter",
									"loadOnChange": true
								}
							]
						},
						"embeddedModel": {
							"config": {
								"type": "crt.EntityDataSource",
								"config": {
									"entitySchemaName": "FolderTree"
								}
							},
							"name": "FolderTree_items_DS"
						}
					},
					"FolderTree_active_folder_id": {},
					"FolderTree_active_folder_name": {},
					"FolderTree_active_folder_filter": {
						"value": {}
					},
					"FolderTree_items_DS_filter": {
						"value": {
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"filterType": 6,
							"logicalOperation": 0,
							"items": {
								"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "EntitySchemaName"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "RZ9Request"
										}
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items"
				],
				"values": {
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting"
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "LookupQuickFilterByTag_Items",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_RZ9Name": {
						"modelConfig": {
							"path": "PDS.RZ9Name"
						}
					},
					"PDS_RZ9Status": {
						"modelConfig": {
							"path": "PDS.RZ9Status"
						}
					},
					"PDS_RZ9Category": {
						"modelConfig": {
							"path": "PDS.RZ9Category"
						}
					},
					"PDS_RZ9Subcategory": {
						"modelConfig": {
							"path": "PDS.RZ9Subcategory"
						}
					},
					"PDS_RZ9Owner": {
						"modelConfig": {
							"path": "PDS.RZ9Owner"
						}
					},
					"PDS_RZ9Applicant": {
						"modelConfig": {
							"path": "PDS.RZ9Applicant"
						}
					},
					"PDS_RZ9ApplicantType": {
						"modelConfig": {
							"path": "PDS.RZ9ApplicantType"
						}
					},
					"PDS_RZ9RequestExpensesRZ9RequestIdCount36665667": {
						"modelConfig": {
							"path": "PDS.RZ9RequestExpensesRZ9RequestIdCount36665667"
						}
					},
					"PDS_RZ9RequestExpensesRZ9RequestRZ9AmountSume944f54f": {
						"modelConfig": {
							"path": "PDS.RZ9RequestExpensesRZ9RequestRZ9AmountSume944f54f"
						}
					},
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"PDS": {
							"type": "crt.EntityDataSource",
							"hiddenInPageDesigner": true,
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
									},
									"RZ9Applicant": {
										"path": "RZ9Applicant"
									},
									"RZ9ApplicantType": {
										"type": "ForwardReference",
										"path": "RZ9Applicant.Type"
									},
									"RZ9RequestExpensesRZ9RequestIdCount36665667": {
										"type": "Aggregation",
										"path": "[RZ9RequestExpenses:RZ9Request].Id",
										"aggregationConfig": {
											"aggregationFunction": "Count",
											"filter": null
										}
									},
									"RZ9RequestExpensesRZ9RequestRZ9AmountSume944f54f": {
										"type": "Aggregation",
										"path": "[RZ9RequestExpenses:RZ9Request].RZ9Amount",
										"aggregationConfig": {
											"aggregationFunction": "Sum",
											"filter": null
										}
									}
								}
							},
							"scope": "viewElement"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});