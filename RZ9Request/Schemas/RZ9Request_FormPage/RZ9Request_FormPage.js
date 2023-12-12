define("RZ9Request_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "fullyColored",
					"mode": "tab",
					"bodyBackgroundColor": "transparent",
					"selectedTabTitleColor": "#000000",
					"tabTitleColor": "#FFFFFF",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "transparent",
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "RZ9Request"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "9fc3a7a4-ccc1-4ed5-bca4-79d9eb4f6359",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_xhc34fr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_xhc34fr_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RZ9Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.RZ9Name",
					"control": "$RZ9Name",
					"labelPosition": "auto",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_50wj6s3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_0f2x0nb",
					"labelPosition": "auto",
					"control": "$LookupAttribute_0f2x0nb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_1dsl6gd",
				"values": {
					"for": "TabPanel_lbl3c26",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_8gqmig2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_dph82jw",
					"labelPosition": "auto",
					"control": "$LookupAttribute_dph82jw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_tonm7md",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_wbvt4lb",
					"labelPosition": "auto",
					"control": "$NumberAttribute_wbvt4lb",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabPanel_lbl3c26",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_0teyep3",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_0teyep3_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "employee-tab-icon"
				},
				"parentName": "TabPanel_lbl3c26",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nrff621",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_0teyep3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_kuk8ju3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_kuk8ju3_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_nrff621",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lxy9ysw",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_0teyep3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_2j3l9xn",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_0f2x0nb"
				},
				"parentName": "FlexContainer_lxy9ysw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_sy0xhxu",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.RZ9ApplicantEmail",
					"control": "$RZ9ApplicantEmail",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_sy0xhxu_caption)#",
					"readonly": true
				},
				"parentName": "FlexContainer_lxy9ysw",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_hupia4l",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_3k00ahc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_5g7anez",
					"labelPosition": "auto",
					"control": "$LookupAttribute_5g7anez",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hupia4l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_a14vd1k",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ggy01e8",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ggy01e8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hupia4l",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_67ojw7q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_zg0xolf",
					"labelPosition": "auto",
					"control": "$LookupAttribute_zg0xolf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hupia4l",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_l49b81h",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_i5x1l7y",
					"labelPosition": "above",
					"control": "$StringAttribute_i5x1l7y",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"placeholder": "#ResourceString(RichTextEditor_l49b81h_placeholder)#",
					"tooltip": "#ResourceString(RichTextEditor_l49b81h_tooltip)#",
					"toolbarDisplayMode": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_acn9u7i",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_acn9u7i_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_c9nc5ss",
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
				"parentName": "TabContainer_acn9u7i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_rjgh49n",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_rjgh49n_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "TabContainer_acn9u7i",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_j7dwk10",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_rjgh49n",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_oa5r54q",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_j7dwk10",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_02i2m4e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_02i2m4e_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "RZ9RequestExpenses",
							"defaultValues": [
								{
									"attributeName": "RZ9Request",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_oa5r54q",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_9x2hlxn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_9x2hlxn_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_amewumeDS"
						}
					}
				},
				"parentName": "FlexContainer_oa5r54q",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_8txi48f",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_8txi48f_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_oa5r54q",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_p80p459",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_p80p459_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_amewume"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8txi48f",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_yne02uv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_yne02uv_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "RZ9RequestExpenses"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8txi48f",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_rkz8hkn",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_rkz8hkn_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_amewume"
					]
				},
				"parentName": "FlexContainer_oa5r54q",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_bmng26z",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_rjgh49n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_amewume",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
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
					"items": "$GridDetail_amewume",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_amewumeDS_Id",
					"columns": [
						{
							"id": "8d45080d-498c-3e82-651d-ac1d7cd5f5b7",
							"code": "GridDetail_amewumeDS_RZ9Amount",
							"path": "RZ9Amount",
							"caption": "#ResourceString(GridDetail_amewumeDS_RZ9Amount)#",
							"dataValueType": 6
						},
						{
							"id": "ead2c0bb-2bd7-06ee-84d6-dc780f691922",
							"code": "GridDetail_amewumeDS_RZ9Type",
							"path": "RZ9Type",
							"caption": "#ResourceString(GridDetail_amewumeDS_RZ9Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "RZ9RequestExpenseType"
						},
						{
							"id": "cbeb51c9-7bf5-75ea-c6b6-c3dd0f419bf0",
							"code": "GridDetail_amewumeDS_RZ9Comment",
							"caption": "#ResourceString(GridDetail_amewumeDS_RZ9Comment)#",
							"dataValueType": 28
						},
						{
							"id": "2766689c-73b9-83b3-6c57-6c36f98dd225",
							"code": "GridDetail_amewumeDS_RZ9Imported",
							"path": "RZ9Imported",
							"caption": "#ResourceString(GridDetail_amewumeDS_RZ9Imported)#",
							"dataValueType": 12
						}
					]
				},
				"parentName": "GridContainer_bmng26z",
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
					"RZ9Name": {
						"modelConfig": {
							"path": "PDS.RZ9Name"
						}
					},
					"StringAttribute_i5x1l7y": {
						"modelConfig": {
							"path": "PDS.RZ9Description"
						}
					},
					"LookupAttribute_0f2x0nb": {
						"modelConfig": {
							"path": "PDS.RZ9Applicant"
						}
					},
					"LookupAttribute_dph82jw": {
						"modelConfig": {
							"path": "PDS.RZ9Owner"
						}
					},
					"LookupAttribute_5g7anez": {
						"modelConfig": {
							"path": "PDS.RZ9Status"
						}
					},
					"LookupAttribute_ggy01e8": {
						"modelConfig": {
							"path": "PDS.RZ9Category"
						}
					},
					"LookupAttribute_zg0xolf": {
						"modelConfig": {
							"path": "PDS.RZ9Subcategory"
						}
					},
					"NumberAttribute_wbvt4lb": {
						"modelConfig": {
							"path": "PDS.RZ9ExpensesTotal"
						}
					},
					"RZ9ApplicantEmail": {
						"modelConfig": {
							"path": "PDS.RZ9ApplicantEmail"
						}
					},
					"GridDetail_amewume": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_amewumeDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_amewumeDS_RZ9Amount": {
									"modelConfig": {
										"path": "GridDetail_amewumeDS.RZ9Amount"
									}
								},
								"GridDetail_amewumeDS_RZ9Type": {
									"modelConfig": {
										"path": "GridDetail_amewumeDS.RZ9Type"
									}
								},
								"GridDetail_amewumeDS_RZ9Comment": {
									"modelConfig": {
										"path": "GridDetail_amewumeDS.RZ9Comment"
									}
								},
								"GridDetail_amewumeDS_RZ9Imported": {
									"modelConfig": {
										"path": "GridDetail_amewumeDS.RZ9Imported"
									}
								},
								"GridDetail_amewumeDS_Id": {
									"modelConfig": {
										"path": "GridDetail_amewumeDS.Id"
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
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_amewumeDS": [
							{
								"attributePath": "RZ9Request",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "RZ9Request",
							"attributes": {
								"RZ9ApplicantEmail": {
									"path": "RZ9Applicant.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_amewumeDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "RZ9RequestExpenses",
							"attributes": {
								"RZ9Amount": {
									"path": "RZ9Amount"
								},
								"RZ9Type": {
									"path": "RZ9Type"
								},
								"RZ9Comment": {
									"path": "RZ9Comment"
								},
								"RZ9Imported": {
									"path": "RZ9Imported"
								}
							}
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