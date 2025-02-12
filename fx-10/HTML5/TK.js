var T = T || {};
T.Toolkit = T.Toolkit || {};

T.Toolkit.TK = class {

	constructor(objServer)
  	{ 
		this.objServer = objServer; 
  	}

	// START METHODS

	GetObjectValue = function (objectName)
	{
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetObjectValue', [objectName]);
	}

	SetObjectValue = function (objectName, newValue, quality = '___Undefined___', timestamp = '___Undefined___', forced  = '___Undefined___')
	{
		if (quality == null)
		{
			DotNet.invokeMethod('THtml5Client', 'TKMethod', 'SetObjectValue', [objectName, newValue]);
			return;
		}

		DotNet.invokeMethod('THtml5Client', 'TKMethod', 'SetObjectValue', [objectName, newValue, quality, timestamp, forced]);
	}

	Asset = function (objectName)
	{
		DotNet.invokeMethod('THtml5Client', 'TKMethod', 'Asset', [objectName]);
	}

	GetExternalTagsFromElement = function (element) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetExternalTagsFromElement', [element]);
	}

	GetAssetNameAsDisplayTextAsync = async function (element) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetAssetNameAsDisplayTextAsync', [element]);
	}

	DoubleQuotes = function (str) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'DoubleQuotes', [str]);
	}

	DownloadFileToLocalStorage = function (url, targetName, isContentText) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'DownloadFileToLocalStorage', [url, targetName, isContentText]);
	}

	LoadFromXMLString = function (xmlData, tag) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'LoadFromXMLString', [xmlData, tag]);
	}

	SaveToXMLString = function (tag) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'SaveToXMLString', [tag]);
	}

	GetParentFolderAsync = async function (assetPath) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetParentFolderAsync', [assetPath]);
	}

	GetAssetFolderNameAsync = async function (objectName) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetAssetFolderNameAsync', [objectName]);
	}

	GetAssetsAsync = async function (assetPath, onlyTags) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetAssetsAsync', [assetPath, onlyTags]);
	}

	GetSubFoldersAsync = async function (assetPath) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetSubFoldersAsync', [assetPath]);
	}

	IsAttributeAsync = async function (elementName, timeoutSeconds) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'IsAttributeAsync', [elementName, timeoutSeconds]);
	}

	HasChildrenAsync = async function (elementName) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'HasChildrenAsync', [elementName]);
	}

	HasAttributesAsync = async function (elementName) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'HasAttributesAsync', [elementName]);
	}

	HasHistorianAsync = async function (name) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'HasHistorianAsync', [name]);
	}

	GetParentElementAsync = async function (elementName) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetParentElementAsync', [elementName]);
	}

	GetChildrenElementsAsync = async function (elementName, hasAttributes, hasChildren) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetChildrenElementsAsync', [elementName, hasAttributes, hasChildren]);
	}

	BeginGetChildrenElements = function (elementName, elementType, callback, state) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'BeginGetChildrenElements', [elementName, elementType, callback, state]);
	}

	EndGetChildrenElements = function (ar, hasAttributes, hasChildren) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'EndGetChildrenElements', [ar, hasAttributes, hasChildren]);
	}

	GetAllAttributesAsync = async function (initialElement, timeoutSeconds, getChildren) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetAllAttributesAsync', [initialElement, timeoutSeconds, getChildren]);
	}

	BeginGetAllAttributes = function (initialElement, timeoutSeconds, getChildren, callback, state) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'BeginGetAllAttributes', [initialElement, timeoutSeconds, getChildren, callback, state]);
	}

	EndGetAllAttributes = function (ar) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'EndGetAllAttributes', [ar]);
	}

	BeginGetAssets = function (initialElement, callback, state) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'BeginGetAssets', [initialElement, callback, state]);
	}

	EndGetAssets = function (ar) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'EndGetAssets', [ar]);
	}

	GetElementTypeAsync = async function (elementName) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetElementTypeAsync', [elementName]);
	}

	BeginGetElementType = function (elementName, callback, state) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'BeginGetElementType', [elementName, callback, state]);
	}

	EndGetElementType = function (ar) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'EndGetElementType', [ar]);
	}

	Char = function (ch) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'Char', [ch]);
	}

	TIf = function (condition, thenStatement, elseStatement) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'TIf', [condition, thenStatement, elseStatement]);
	}

	Toggle = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'Toggle', [value]);
	}

	Logical = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'Logical', [value]);
	}

	LogicalNot = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'LogicalNot', [value]);
	}

	CreateTaskEvent = function (taskName, obj, isSequential = true, addToLast = true, priority = 0) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'CreateTaskEvent', [taskName, obj, isSequential, addToLast, priority]);
	}

	GetTaskEvent = function (taskName) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetTaskEvent', [taskName]);
	}

	GetTaskEventCount = function () {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetTaskEventCount', []);
	}

	Trace = function (message, type = Debug, oobjectName = null, eventSource = null, eventValue = null) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'Trace', [message, type, oobjectName, eventSource, eventValue]);
	}

	GetCategoryNameFromIDs = function (categories, returnTitle = true) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetCategoryNameFromIDs', [categories, returnTitle]);
	}

	GetValueFromHistorianAsync = async function (tagName, dt) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetValueFromHistorianAsync', [tagName, dt]);
	}

	GetValuesFromHistorianAsync = async function (tagNames, dt) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetValuesFromHistorianAsync', [tagNames, dt]);
	}

	UnitsConversionAsync = async function (tagName, unitsDictionary) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'UnitsConversionAsync', [tagName, unitsDictionary]);
	}

	ExecuteClassMethodOnServerAsync = async function (className, methodName, parameters) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'ExecuteClassMethodOnServerAsync', [className, methodName, parameters]);
	}

	BeginExecuteClassMethodOnServer = function (className, methodName, callback, state, parameters) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'BeginExecuteClassMethodOnServer', [className, methodName, callback, state, parameters]);
	}

	EndExecuteClassMethodOnServer = function (ar, parameters) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'EndExecuteClassMethodOnServer', [ar, parameters]);
	}

	GeneratePassword = function (minimumLen = 8) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GeneratePassword', [minimumLen]);
	}

	CreateSyncMarker = function () {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'CreateSyncMarker', []);
	}

	WaitSyncMarkerAsync = async function (id, timeout) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'WaitSyncMarkerAsync', [id, timeout]);
	}

	SaveImageAsPDFAsync = async function (imageFileName, outputFileName, append = false, orientation = 1, margin = null, title = null, subject = null, author = null, creator = null) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'SaveImageAsPDFAsync', [imageFileName, outputFileName, append, orientation, margin, title, subject, author, creator]);
	}

	CompileExpression = function (expression) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'CompileExpression', [expression]);
	}

	EvaluateExpression = function (expression, parameters, extraTypes = null, namespaces = null) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'EvaluateExpression', [expression, parameters, extraTypes, namespaces]);
	}

	GetAssetNameFromElement = function (element, resolvedAssetName) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetAssetNameFromElement', [element, resolvedAssetName]);
	}

	NormalizeObjectName = function (name, concatenateSpaces = false) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'NormalizeObjectName', [name, concatenateSpaces]);
	}

	GetTagHistorianAsync = async function (tagName, start, duration, getSamplesMode = null, getRawData = true, isDrillingChart = false, isDepthChart = false, boundaryOutside = True, filterExpression = null) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetTagHistorianAsync', [tagName, start, duration, getSamplesMode, getRawData, isDrillingChart, isDepthChart, boundaryOutside, filterExpression]);
	}

	GetTagsHistorianAsync = async function (tagNames, start, duration, getSamplesMode = null, getRawData = true, isDrillingChart = false, isDepthChart = false, boundaryOutside = True, filterExpression = null) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'GetTagsHistorianAsync', [tagNames, start, duration, getSamplesMode, getRawData, isDrillingChart, isDepthChart, boundaryOutside, filterExpression]);
	}

	AddValuesToTagHistorianAsync = async function (tagNames, values, qualities, timestamps) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'AddValuesToTagHistorianAsync', [tagNames, values, qualities, timestamps]);
	}

	GetMembersAsDataRow = function (name, filter) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetMembersAsDataRow', [name, filter]);
	}

	GetMembersInfo = function (name, filter) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetMembersInfo', [name, filter]);
	}

	GetMembers = function (name, filter) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetMembers', [name, filter]);
	}

	GetTagChildren = function (name = Tag, isDomainClient = false) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetTagChildren', [name, isDomainClient]);
	}

	GetTagChildrenInfo = function (isDomainClient, name) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetTagChildrenInfo', [isDomainClient, name]);
	}

	GetTagChildrenAsDataRow = function (name = Tag, isDomainClient = false) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetTagChildrenAsDataRow', [name, isDomainClient]);
	}

	PreloadObject = function (objectName, properties) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'PreloadObject', [objectName, properties]);
	}

	GetObjectValue = function (objectName) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetObjectValue', [objectName]);
	}

	Asset = function (name) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'Asset', [name]);
	}

	SetAsset = function (name, newValue) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'SetAsset', [name, newValue]);
	}

	GetAssetDouble = function (name) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetAssetDouble', [name]);
	}

	AddElementToAssetAsync = async function (name, element, isAttribute) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'AddElementToAssetAsync', [name, element, isAttribute]);
	}

	SplitAssetAsync = async function (assetName) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'SplitAssetAsync', [assetName]);
	}

	CopyTagToTag = function (tagSource, tagTarget) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'CopyTagToTag', [tagSource, tagTarget]);
	}

	CompareTag = function (tagSource, tagTarget) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'CompareTag', [tagSource, tagTarget]);
	}

	CopyTagToDataTableAsync = async function (tag) {
		return await DotNet.invokeMethodAsync('THtml5Client', 'TKMethod', 'CopyTagToDataTableAsync', [tag]);
	}

	CopyDataTableToTag = function (table, tag) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'CopyDataTableToTag', [table, tag]);
	}

	ClearTag = function (tag) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ClearTag', [tag]);
	}

	InitializeTag = function (tag, value = null) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'InitializeTag', [tag, value]);
	}

	IsArrayBase = function (tagName) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'IsArrayBase', [tagName]);
	}

	IsFromTemplate = function (tagName) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'IsFromTemplate', [tagName]);
	}

	ArraySize = function (tagName) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ArraySize', [tagName]);
	}

	ArrayDataDefined = function (tagName) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ArrayDataDefined', [tagName]);
	}

	To = function (type, value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'To', [type, value]);
	}

	ConvertTo = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ConvertTo', [value]);
	}

	ToDateTime = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ToDateTime', [value]);
	}

	ToTimeSpan = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ToTimeSpan', [value]);
	}

	ToInt = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ToInt', [value]);
	}

	ToLong = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ToLong', [value]);
	}

	ToDouble = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ToDouble', [value]);
	}

	ToBool = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ToBool', [value]);
	}

	ToString = function (value) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ToString', [value]);
	}

	ToDateTimeOffset = function (value, kind) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'ToDateTimeOffset', [value, kind]);
	}

	GetTagProviderFromAssetName = function (element) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetTagProviderFromAsset', [element]);
	}

	GetTagProviderFromAsset = function (element) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetTagProviderFromAsset', [element]);
	}

	GetAssetNameFromTagProvider = function (element, resolvedAssetName =  false) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetAssetPathFromExternalTag', [element, resolvedAssetName]);
	}

	GetAssetPathFromExternalTag = function (element, resolvedAssetName = false) {
		return DotNet.invokeMethod('THtml5Client', 'TKMethod', 'GetAssetPathFromExternalTag', [element, resolvedAssetName]);
	}

	// END METHODS

 }

