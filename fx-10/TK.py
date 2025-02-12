TKGet = None
TKSet = None
TKExecutePythonShell = None
TKGetObjectPropertyValue = None
TKSetObjectPropertyValue = None
TKGetRunObjName = None
TKGetRunObjDescription = None
TKObjectMethod = None
TKMethod = None

def set_callback_Get(cb):
	global TKGet
	TKGet = cb

def set_callback_Set(cb):
	global TKSet
	TKSet = cb

def set_callback_ExecutePythonShell(cb):
	global TKExecutePythonShell
	TKExecutePythonShell = cb

def set_callback_GetObjectPropertyValue(cb):
	global TKGetObjectPropertyValue
	TKGetObjectPropertyValue = cb

def set_callback_SetObjectPropertyValue(cb):
	global TKSetObjectPropertyValue
	TKSetObjectPropertyValue = cb

def set_callback_GetRunObjName(cb):
	global TKGetRunObjName
	TKGetRunObjName = cb

def set_callback_GetRunObjDescription(cb):
	global TKGetRunObjDescription
	TKGetRunObjDescription = cb

def set_callback_ObjectMethod(cb):
	global TKObjectMethod
	TKObjectMethod = cb

def set_callback_Method(cb):
	global TKMethod
	TKMethod = cb	

class TK():
	def __init__(self):
	   pass

	# START METHODS

	def ExecutePythonShell(self, pyFileName, args):
		return TKMethod('ExecutePythonShell', [pyFileName, args])

	def GetExternalTagsFromElement(self, element):
		return TKMethod('GetExternalTagsFromElement', [element])

	def GetAssetNameAsDisplayText(self, element):
		return TKMethod('GetAssetNameAsDisplayText', [element])

	def DoubleQuotes(self, str):
		return TKMethod('DoubleQuotes', [str])

	def DownloadFileToLocalStorage(self, url, targetName, isContentText):
		return TKMethod('DownloadFileToLocalStorage', [url, targetName, isContentText])

	def LoadFromXMLString(self, xmlData, tag):
		return TKMethod('LoadFromXMLString', [xmlData, tag])

	def LoadFromXML(self, fileName, tag):
		return TKMethod('LoadFromXML', [fileName, tag])

	def SaveToXMLString(self, tag):
		return TKMethod('SaveToXMLString', [tag])

	def SaveToXML(self, fileName, tag):
		return TKMethod('SaveToXML', [fileName, tag])

	def GetParentFolder(self, assetPath):
		return TKMethod('GetParentFolder', [assetPath])

	def GetAssetFolderName(self, objectName):
		return TKMethod('GetAssetFolderName', [objectName])

	def GetAssets(self, assetPath, onlyTags):
		return TKMethod('GetAssets', [assetPath, onlyTags])

	def GetSubFolders(self, assetPath):
		return TKMethod('GetSubFolders', [assetPath])

	def IsAttribute(self, elementName, timeoutSeconds):
		return TKMethod('IsAttribute', [elementName, timeoutSeconds])

	def HasChildren(self, elementName):
		return TKMethod('HasChildren', [elementName])

	def HasAttributes(self, elementName):
		return TKMethod('HasAttributes', [elementName])

	def HasHistorian(self, name):
		return TKMethod('HasHistorian', [name])

	def GetParentElement(self, elementName):
		return TKMethod('GetParentElement', [elementName])

	def GetChildrenElements(self, elementName, hasAttributes, hasChildren):
		return TKMethod('GetChildrenElements', [elementName, hasAttributes, hasChildren])

	def BeginGetChildrenElements(self, elementName, elementType, callback, state):
		return TKMethod('BeginGetChildrenElements', [elementName, elementType, callback, state])

	def EndGetChildrenElements(self, ar, hasAttributes, hasChildren):
		return TKMethod('EndGetChildrenElements', [ar, hasAttributes, hasChildren])

	def GetAllAttributes(self, initialElement, timeoutSeconds, getChildren):
		return TKMethod('GetAllAttributes', [initialElement, timeoutSeconds, getChildren])

	def BeginGetAllAttributes(self, initialElement, timeoutSeconds, getChildren, callback, state):
		return TKMethod('BeginGetAllAttributes', [initialElement, timeoutSeconds, getChildren, callback, state])

	def EndGetAllAttributes(self, ar):
		return TKMethod('EndGetAllAttributes', [ar])

	def BeginGetAssets(self, initialElement, callback, state):
		return TKMethod('BeginGetAssets', [initialElement, callback, state])

	def EndGetAssets(self, ar):
		return TKMethod('EndGetAssets', [ar])

	def GetElementType(self, elementName):
		return TKMethod('GetElementType', [elementName])

	def BeginGetElementType(self, elementName, callback, state):
		return TKMethod('BeginGetElementType', [elementName, callback, state])

	def EndGetElementType(self, ar):
		return TKMethod('EndGetElementType', [ar])

	def Char(self, ch):
		return TKMethod('Char', [ch])

	def TIf(self, condition, thenStatement, elseStatement):
		return TKMethod('TIf', [condition, thenStatement, elseStatement])

	def Toggle(self, value):
		return TKMethod('Toggle', [value])

	def Logical(self, value):
		return TKMethod('Logical', [value])

	def LogicalNot(self, value):
		return TKMethod('LogicalNot', [value])

	def CreateTaskEvent(self, taskName, obj, isSequential = True, addToLast = True, priority = 0):
		return TKMethod('CreateTaskEvent', [taskName, obj, isSequential, addToLast, priority])

	def GetTaskEvent(self, taskName):
		return TKMethod('GetTaskEvent', [taskName])

	def GetTaskEventCount(self):
		return TKMethod('GetTaskEventCount', [])

	def SaveSnapshotTags(self, fileName):
		return TKMethod('SaveSnapshotTags', [fileName])

	def LoadSnapshotTags(self, fileName):
		return TKMethod('LoadSnapshotTags', [fileName])

	def Trace(self, message, type = 4, objectName = None, eventSource = None, eventValue = None):
		return TKMethod('Trace', [message, type, oobjectName, eventSource, eventValue])

	def GetCategoryNameFromIDs(self, categories, returnTitle = True):
		return TKMethod('GetCategoryNameFromIDs', [categories, returnTitle])

	def GetValueFromHistorian(self, tagName, dt):
		return TKMethod('GetValueFromHistorian', [tagName, dt])

	def GetValuesFromHistorian(self, tagNames, dt):
		return TKMethod('GetValuesFromHistorian', [tagNames, dt])

	def UnitsConversion(self, tagName, unitsDictionary):
		return TKMethod('UnitsConversion', [tagName, unitsDictionary])

	def ExecuteClassMethodOnServer(self, className, methodName, parameters):
		return TKMethod('ExecuteClassMethodOnServer', [className, methodName, parameters])

	def BeginExecuteClassMethodOnServer(self, className, methodName, callback, state, parameters):
		return TKMethod('BeginExecuteClassMethodOnServer', [className, methodName, callback, state, parameters])

	def EndExecuteClassMethodOnServer(self, ar, parameters):
		return TKMethod('EndExecuteClassMethodOnServer', [ar, parameters])

	def FileSaveAs(self, content, fileName):
		return TKMethod('FileSaveAs', [content, fileName])

	def GeneratePassword(self, minimumLen = 8):
		return TKMethod('GeneratePassword', [minimumLen])

	def CreateSyncMarker(self):
		return TKMethod('CreateSyncMarker', [])

	def WaitSyncMarker(self, id, timeout):
		return TKMethod('WaitSyncMarker', [id, timeout])

	def SaveImageAsPDF(self, imageFileName, outputFileName, append = False, orientation = 1, margin = None, title = None, subject = None, author = None, creator = None):
		return TKMethod('SaveImageAsPDF', [imageFileName, outputFileName, append, orientation, margin, title, subject, author, creator])

	def ZipFile(self, sourceDirectoryName, destinationArchiveFileName):
		return TKMethod('ZipFile', [sourceDirectoryName, destinationArchiveFileName])

	def UnzipFile(self, zipFileName, destinationDirectoryName = None):
		return TKMethod('UnzipFile', [zipFileName, destinationDirectoryName])

	def CompileExpression(self, expression):
		return TKMethod('CompileExpression', [expression])

	def EvaluateExpression(self, expression, parameters, extraTypes = None, namespaces = None):
		return TKMethod('EvaluateExpression', [expression, parameters, extraTypes, namespaces])

	def IsTagDevicePointPrimaryStation(self, tagName, devicePoint):
		return TKMethod('IsTagDevicePointPrimaryStation', [tagName, devicePoint])

	def GetAssetNameFromElement(self, element, resolvedAssetName):
		return TKMethod('GetAssetNameFromElement', [element, resolvedAssetName])

	def PrepareTK(self, s):
		return TKMethod('PrepareTK', [s])

	def NormalizeObjectName(self, name, concatenateSpaces = False):
		return TKMethod('NormalizeObjectName', [name, concatenateSpaces])

	def LogException(self, ex, methodName = None):
		return TKMethod('LogException', [ex, methodName])

	def GetTagHistorian(self, tagName, start, duration, getSamplesMode = None, getRawData = True, isDrillingChart = False, isDepthChart = False, boundaryOutside = True, filterExpression = None):
		return TKMethod('GetTagHistorian', [tagName, start, duration, getSamplesMode, getRawData, isDrillingChart, isDepthChart, boundaryOutside, filterExpression])

	def GetTagsHistorian(self, tagNames, start, duration, getSamplesMode = None, getRawData = True, isDrillingChart = False, isDepthChart = False, boundaryOutside = True, filterExpression = None):
		return TKMethod('GetTagsHistorian', [tagNames, start, duration, getSamplesMode, getRawData, isDrillingChart, isDepthChart, boundaryOutside, filterExpression])

	def AddValuesToTagHistorian(self, tagNames, values, qualities, timestamps):
		return TKMethod('AddValuesToTagHistorian', [tagNames, values, qualities, timestamps])

	def BulkTreatAlarm(self, tagName, values, qualities, timestamps):
		return TKMethod('BulkTreatAlarm', [tagName, values, qualities, timestamps])

	def GetMembersAsDataRow(self, name, filter):
		return TKMethod('GetMembersAsDataRow', [name, filter])

	def GetMembersInfo(self, name, filter):
		return TKMethod('GetMembersInfo', [name, filter])

	def GetMembers(self, name, filter):
		return TKMethod('GetMembers', [name, filter])

	def GetTagChildren(self, name = None, isDomainClient = False):
		return TKMethod('GetTagChildren', [name, isDomainClient])

	def GetTagChildrenInfo(self, isDomainClient, name):
		return TKMethod('GetTagChildrenInfo', [isDomainClient, name])

	def GetTagChildrenAsDataRow(self, name = None, isDomainClient = False):
		return TKMethod('GetTagChildrenAsDataRow', [name, isDomainClient])

	def PreloadObject(self, objectName, properties):
		return TKMethod('PreloadObject', [objectName, properties])

	def GetObjectValue(self, objectName):
		return TKMethod('GetObjectValue', [objectName])

	def Asset(self, name):
		return TKMethod('Asset', [name])

	def SetAsset(self, name, newValue):
		return TKMethod('SetAsset', [name, newValue])

	def GetAssetDouble(self, name):
		return TKMethod('GetAssetDouble', [name])

	def AddElementToAsset(self, name, element, isAttribute):
		return TKMethod('AddElementToAsset', [name, element, isAttribute])

	def SplitAsset(self, assetName):
		return TKMethod('SplitAsset', [assetName])

	def SetObjectValue(self, objectName, newValue, quality = '___Undefined___', timestamp = '___Undefined___', forced = '___Undefined___'):
		return TKMethod('SetObjectValue', [objectName, newValue, quality, timestamp, forced])

	def CopyTagToTag(self, tagSource, tagTarget):
		return TKMethod('CopyTagToTag', [tagSource, tagTarget])

	def CompareTag(self, tagSource, tagTarget):
		return TKMethod('CompareTag', [tagSource, tagTarget])

	def CopyTagToDataTable(self, tag, reserved):
		return TKMethod('CopyTagToDataTable', [tag, reserved])

	def CopyDataTableToTag(self, table, tag, reserved):
		return TKMethod('CopyDataTableToTag', [table, tag, reserved])

	def ClearTag(self, tag):
		return TKMethod('ClearTag', [tag])

	def InitializeTag(self, tag, value = '___Undefined___'):
		return TKMethod('InitializeTag', [tag, value])

	def IsArrayBase(self, tagName):
		return TKMethod('IsArrayBase', [tagName])

	def IsFromTemplate(self, tagName):
		return TKMethod('IsFromTemplate', [tagName])

	def ArraySize(self, tagName):
		return TKMethod('ArraySize', [tagName])

	def ArrayDataDefined(self, tagName):
		return TKMethod('ArrayDataDefined', [tagName])

	def To(self, type, value):
		return TKMethod('To', [type, value])

	def ConvertTo(self, value):
		return TKMethod('ConvertTo', [value])

	def ToDateTime(self, value):
		return TKMethod('ToDateTime', [value])

	def ToTimeSpan(self, value):
		return TKMethod('ToTimeSpan', [value])

	def ToInt(self, value):
		return TKMethod('ToInt', [value])

	def ToLong(self, value):
		return TKMethod('ToLong', [value])

	def ToDouble(self, value):
		return TKMethod('ToDouble', [value])

	def ToBool(self, value):
		return TKMethod('ToBool', [value])

	def ToString(self, value):
		return TKMethod('ToString', [value])

	def ToDateTimeOffset(self, value, kind):
		return TKMethod('ToDateTimeOffset', [value, kind])

	# END METHODS
