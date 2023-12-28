define("RZARealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
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
					"entitySchemaName": "RZARealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "9fc9032e-f92e-4d8e-b066-302901119b91",
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
				"name": "RZATitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.RZAName",
					"control": "$RZAName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RZAPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_pdwjmew",
					"labelPosition": "auto",
					"control": "$NumberAttribute_pdwjmew"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RZAAreaSqft",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_j96rfrx",
					"labelPosition": "auto",
					"control": "$NumberAttribute_j96rfrx"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RZACommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.RZAOfferTypeRZACommissionPercent",
					"labelPosition": "auto",
					"control": "$RZAOfferTypeRZACommissionPercent",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RZACommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_j1q5638",
					"labelPosition": "auto",
					"control": "$NumberAttribute_j1q5638"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RZAType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ovu2fgb",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ovu2fgb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RZAOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_vwcnu6y",
					"labelPosition": "auto",
					"control": "$LookupAttribute_vwcnu6y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RZAComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_wpx1i73",
					"labelPosition": "auto",
					"control": "$StringAttribute_wpx1i73",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_59gseq5",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_59gseq5_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_rhjojs2",
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
				"parentName": "ExpansionPanel_59gseq5",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_j06xbe7",
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
				"parentName": "GridContainer_rhjojs2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ButtonAutoAddVisit",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ButtonAutoAddVisit_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "RZAProcess_ac47640",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ParentId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_j06xbe7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_u6faxwk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_u6faxwk_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "RZARealtyVisits",
							"defaultValues": [
								{
									"attributeName": "RZARealtyParent",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_j06xbe7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_aa4xo56",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_aa4xo56_caption)#",
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
							"dataSourceName": "GridDetail_3brehmfDS"
						}
					}
				},
				"parentName": "FlexContainer_j06xbe7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_de0dgdr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_de0dgdr_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_j06xbe7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_8x59kcz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_8x59kcz_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_3brehmf"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_de0dgdr",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_28l0u8w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_28l0u8w_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "RZARealtyVisits"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_de0dgdr",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_13wd4dt",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_13wd4dt_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_3brehmf"
					]
				},
				"parentName": "FlexContainer_j06xbe7",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_g0lw23o",
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
				"parentName": "ExpansionPanel_59gseq5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3brehmf",
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
						}
					},
					"items": "$GridDetail_3brehmf",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_3brehmfDS_Id",
					"columns": [
						{
							"id": "00b0d8e1-4385-cf58-eabe-7ee418daa130",
							"code": "GridDetail_3brehmfDS_RZAVisitDateTime",
							"path": "RZAVisitDateTime",
							"caption": "#ResourceString(GridDetail_3brehmfDS_RZAVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "14588e76-a478-3e2a-d206-b375511ef267",
							"code": "GridDetail_3brehmfDS_RZAPotentialCustomer",
							"path": "RZAPotentialCustomer",
							"caption": "#ResourceString(GridDetail_3brehmfDS_RZAPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "19d07a94-f7d5-ad3c-255e-fff64f329d73",
							"code": "GridDetail_3brehmfDS_RZAOwner",
							"path": "RZAOwner",
							"caption": "#ResourceString(GridDetail_3brehmfDS_RZAOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "e93f3d26-6970-cbff-c2b9-c13cca11f04a",
							"code": "GridDetail_3brehmfDS_RZAComment",
							"caption": "#ResourceString(GridDetail_3brehmfDS_RZAComment)#",
							"dataValueType": 30
						}
					]
				},
				"parentName": "GridContainer_g0lw23o",
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
					"RZAName": {
						"modelConfig": {
							"path": "PDS.RZAName"
						}
					},
					"NumberAttribute_pdwjmew": {
						"modelConfig": {
							"path": "PDS.RZAPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"NumberAttribute_j96rfrx": {
						"modelConfig": {
							"path": "PDS.RZAAreaSqft"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"LookupAttribute_ovu2fgb": {
						"modelConfig": {
							"path": "PDS.RZAType"
						}
					},
					"LookupAttribute_vwcnu6y": {
						"modelConfig": {
							"path": "PDS.RZAOfferType"
						}
					},
					"StringAttribute_wpx1i73": {
						"modelConfig": {
							"path": "PDS.RZAComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"NumberAttribute_j1q5638": {
						"modelConfig": {
							"path": "PDS.RZACommissionUSD"
						}
					},
					"NumberAttribute_g7hghvo": {
						"modelConfig": {
							"path": "PageParameters.RZAIntegerParameter1"
						}
					},
					"RZAOfferTypeRZACommissionPercent": {
						"modelConfig": {
							"path": "PDS.RZAOfferTypeRZACommissionPercent"
						}
					},
					"GridDetail_3brehmf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_3brehmfDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "RZAVisitDateTime"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_3brehmfDS_RZAVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_3brehmfDS.RZAVisitDateTime"
									}
								},
								"GridDetail_3brehmfDS_RZAPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_3brehmfDS.RZAPotentialCustomer"
									}
								},
								"GridDetail_3brehmfDS_RZAOwner": {
									"modelConfig": {
										"path": "GridDetail_3brehmfDS.RZAOwner"
									}
								},
								"GridDetail_3brehmfDS_RZAComment": {
									"modelConfig": {
										"path": "GridDetail_3brehmfDS.RZAComment"
									}
								},
								"GridDetail_3brehmfDS_Id": {
									"modelConfig": {
										"path": "GridDetail_3brehmfDS.Id"
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
						"GridDetail_3brehmfDS": [
							{
								"attributePath": "RZARealtyParent",
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
							"entitySchemaName": "RZARealty",
							"attributes": {
								"RZAOfferTypeRZACommissionPercent": {
									"path": "RZAOfferType.RZACommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_3brehmfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "RZARealtyVisits",
							"attributes": {
								"RZAVisitDateTime": {
									"path": "RZAVisitDateTime"
								},
								"RZAPotentialCustomer": {
									"path": "RZAPotentialCustomer"
								},
								"RZAOwner": {
									"path": "RZAOwner"
								},
								"RZAComment": {
									"path": "RZAComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
                /* The custom implementation of the system query handler. */
                handler: async (request, next) => {
                    if (request.attributeName === 'NumberAttribute_pdwjmew') {
                        const price = await request.$context.NumberAttribute_pdwjmew;
                        const checkPrice = price > 50000;
                        /* Check the request status. */
                        if (checkPrice) {
                            /* If the request is new, apply the required validator to the UsrDescription attribute. */
                            request.$context.enableAttributeValidator('StringAttribute_wpx1i73', 'required');
                        } else {
                            /* Do not apply the required validator to the UsrDescription attribute for non-new requests. */
                            request.$context.disableAttributeValidator('StringAttribute_wpx1i73', 'required');
                        }
                    }
					if (request.attributeName === 'NumberAttribute_pdwjmew' || 					// if price changed
					   request.attributeName === 'RZAOfferTypeRZACommissionPercent' ) { 		// or multiplier changed
						var price = await request.$context.NumberAttribute_pdwjmew;
						var percent = await request.$context.RZAOfferTypeRZACommissionPercent;
						var commission = price * percent / 100;
						request.$context.NumberAttribute_j1q5638 = commission;					//result of calculation here
					}
                    /* Call the next handler if it exists and return its result. */
					return next?.handle(request);
                }
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});