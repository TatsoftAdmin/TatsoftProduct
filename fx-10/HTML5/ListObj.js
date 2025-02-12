var T = T || {};
T.Kernel = T.Kernel || {};
T.Kernel.Core = T.Kernel.Core || {};

T.Kernel.Core.ListObj = class {

	constructor(type = -1, id = -1, parent = null, refType = -1, arrayIndex = -1)
  	{ 
    	this.parent = parent; 
		this.type = type;	
		this.id = id;
		this.refType = refType;
		this.arrayIndex = arrayIndex;
		this.runtimeObjects = new Array();
  	}

	GetObj = function(type, id, refType = -1)
	{
		if (id >= this.runtimeObjects.length)
		{
			var len = this.runtimeObjects.length;
			for (let i = len; i <= id; i++)
				this.runtimeObjects.push(null);
		}
		if (this.runtimeObjects[id] == null)
		{
			var str;
			if (this.parent == null) {
				str = '';
			}
			else
			{
				str = this.parent;
				if (str.length > 0)
					str += '.';
				str += '@' + this.type.toString() + ':' + this.id.toString();
				if (this.refType > 0)
					str += ':' + this.refType.toString();
				if (this.arrayIndex > 0)
					str += '[' + this.arrayIndex.toString() + ']';
			}
			this.runtimeObjects[id] = new T.Kernel.Core.ListObj(type, id, str, refType, -1);
		}	
		return this.runtimeObjects[id];
	}

	GetElement = function(index)
	{
		if (this.runtimeObjects[this.id] == null)
		{
			this.runtimeObjects[this.id] = new Array();
		}	
		var lenArray = this.runtimeObjects[this.id].length;
		for (let i = lenArray; i <= index; i++)
			this.runtimeObjects[this.id].push(null);
		if (this.runtimeObjects[this.id][index] == null)
		{
			this.runtimeObjects[this.id][index] = new T.Kernel.Core.ListObj(this.type, this.id, this.parent, this.refType, index);
		}
		return this.runtimeObjects[this.id][index];
	}

	GetPropertyValue = function(property)
	{
		return DotNet.invokeMethod('THtml5Client', 'GetObjectPropertyValue', this.GetToken(), property);
	}

	SetPropertyValue = function (property, newValue)
	{
		return DotNet.invokeMethod('THtml5Client', 'SetObjectPropertyValue', this.GetToken(), property, newValue);
	}

	GetToken = function ()
	{
		var str = this.parent;
		if (str.length > 0)
			str += '.';
		str += '@' + this.type.toString() + ':' + this.id.toString();
		if (this.refType > 0)
			str += ':' + this.refType.toString();
		if (this.arrayIndex > 0)
			str += '[' + this.arrayIndex.toString() + ']';
		return str;
	}

	GetName = function ()
	{
		return DotNet.invokeMethod('THtml5Client', 'GetRunObjName', this.GetToken());
	}
	GetDescription = function ()
	{
		return DotNet.invokeMethod('THtml5Client', 'GetRunObjDescription', ths.GetToken());
	}

	// START PROPERTIES

	get Value() { return this.GetPropertyValue('Value'); }
	set Value(newValue) { this.SetPropertyValue('Value', newValue); }
	get Timestamp() { return this.GetPropertyValue('Timestamp'); }
	set Timestamp(newValue) { this.SetPropertyValue('Timestamp', newValue); }
	get Quality() { return this.GetPropertyValue('Quality'); }
	set Quality(newValue) { this.SetPropertyValue('Quality', newValue); }
	get Link() { return this.GetPropertyValue('Link'); }
	set Link(newValue) { this.SetPropertyValue('Link', newValue); }
	get Units() { return this.GetPropertyValue('Units'); }
	set Units(newValue) { this.SetPropertyValue('Units', newValue); }
	get Format() { return this.GetPropertyValue('Format'); }
	set Format(newValue) { this.SetPropertyValue('Format', newValue); }
	get Retentive() { return this.GetPropertyValue('Retentive'); }
	get Visibility() { return this.GetPropertyValue('Visibility'); }
	get Domain() { return this.GetPropertyValue('Domain'); }
	get Locked() { return this.GetPropertyValue('Locked'); }
	set Locked(newValue) { this.SetPropertyValue('Locked', newValue); }
	get LockValue() { return this.GetPropertyValue('LockValue'); }
	set LockValue(newValue) { this.SetPropertyValue('LockValue', newValue); }
	get ValueType() { return this.GetPropertyValue('ValueType'); }
	get Historian() { return this.GetPropertyValue('Historian'); }
	get DisplayValue() { return this.GetPropertyValue('DisplayValue'); }
	set DisplayValue(newValue) { this.SetPropertyValue('DisplayValue', newValue); }
	get AlarmState() { return this.GetPropertyValue('AlarmState'); }
	get AckRequired() { return this.GetPropertyValue('AckRequired'); }
	get Acked() { return this.GetPropertyValue('Acked'); }
	set Acked(newValue) { this.SetPropertyValue('Acked', newValue); }
	get AlarmDisable() { return this.GetPropertyValue('AlarmDisable'); }
	set AlarmDisable(newValue) { this.SetPropertyValue('AlarmDisable', newValue); }
	get Disable() { return this.GetPropertyValue('Disable'); }
	set Disable(newValue) { this.SetPropertyValue('Disable', newValue); }
	get State() { return this.GetPropertyValue('State'); }
	get Changed() { return this.GetPropertyValue('Changed'); }
	get RaiseAllChanges() { return this.GetPropertyValue('RaiseAllChanges'); }
	set RaiseAllChanges(newValue) { this.SetPropertyValue('RaiseAllChanges', newValue); }
	get FirstDescription() { return this.GetPropertyValue('FirstDescription'); }
	get Description() { return this.GetPropertyValue('Description'); }
	get FullDescription() { return this.GetPropertyValue('FullDescription'); }
	get ArraySize() { return this.GetPropertyValue('ArraySize'); }
	get LastArrayIndex() { return this.GetPropertyValue('LastArrayIndex'); }
	get DisplayText() { return this.GetPropertyValue('DisplayText'); }
	set DisplayText(newValue) { this.SetPropertyValue('DisplayText', newValue); }
	get Level() { return this.GetPropertyValue('Level'); }
	get Category() { return this.GetPropertyValue('Category'); }
	get ValueAsString() { return this.GetPropertyValue('ValueAsString'); }
	set ValueAsString(newValue) { this.SetPropertyValue('ValueAsString', newValue); }
	get EstimatedValue() { return this.GetPropertyValue('EstimatedValue'); }
	set EstimatedValue(newValue) { this.SetPropertyValue('EstimatedValue', newValue); }
	get DevicePoint() { return this.GetPropertyValue('DevicePoint'); }
	get RelativeAddress() { return this.GetPropertyValue('RelativeAddress'); }
	get XmlAttributes() { return this.GetPropertyValue('XmlAttributes'); }
	set XmlAttributes(newValue) { this.SetPropertyValue('XmlAttributes', newValue); }
	get HistorianValue() { return this.GetPropertyValue('HistorianValue'); }
	get HasHistorian() { return this.GetPropertyValue('HasHistorian'); }
	get DeviceWriteDelta() { return this.GetPropertyValue('DeviceWriteDelta'); }
	set DeviceWriteDelta(newValue) { this.SetPropertyValue('DeviceWriteDelta', newValue); }
	get CommandValue() { return this.GetPropertyValue('CommandValue'); }
	set CommandValue(newValue) { this.SetPropertyValue('CommandValue', newValue); }
	get ReadSecurity() { return this.GetPropertyValue('ReadSecurity'); }
	set ReadSecurity(newValue) { this.SetPropertyValue('ReadSecurity', newValue); }
	get WriteSecurity() { return this.GetPropertyValue('WriteSecurity'); }
	set WriteSecurity(newValue) { this.SetPropertyValue('WriteSecurity', newValue); }
	get AlarmSuspend() { return this.GetPropertyValue('AlarmSuspend'); }
	set AlarmSuspend(newValue) { this.SetPropertyValue('AlarmSuspend', newValue); }
	get PreviousValue() { return this.GetPropertyValue('PreviousValue'); }
	get PrefixAlarmMessage() { return this.GetPropertyValue('PrefixAlarmMessage'); }
	set PrefixAlarmMessage(newValue) { this.SetPropertyValue('PrefixAlarmMessage', newValue); }
	get Text1() { return this.GetPropertyValue('Text1'); }
	set Text1(newValue) { this.SetPropertyValue('Text1', newValue); }
	get Text2() { return this.GetPropertyValue('Text2'); }
	set Text2(newValue) { this.SetPropertyValue('Text2', newValue); }
	get AlarmPriorityEnum() { return this.GetPropertyValue('AlarmPriorityEnum'); }
	set AlarmPriorityEnum(newValue) { this.SetPropertyValue('AlarmPriorityEnum', newValue); }
	get Path() { return this.GetPropertyValue('Path'); }
	get Enumeration() { return this.GetPropertyValue('Enumeration'); }
	get DefaultSymbol() { return this.GetPropertyValue('DefaultSymbol'); }
	get ActiveColor() { return this.GetPropertyValue('ActiveColor'); }
	get InactiveColor() { return this.GetPropertyValue('InactiveColor'); }
	get IsJArray() { return this.GetPropertyValue('IsJArray'); }
	get Min() { return this.GetPropertyValue('Min'); }
	set Min(newValue) { this.SetPropertyValue('Min', newValue); }
	get Max() { return this.GetPropertyValue('Max'); }
	set Max(newValue) { this.SetPropertyValue('Max', newValue); }
	get StartValue() { return this.GetPropertyValue('StartValue'); }
	set StartValue(newValue) { this.SetPropertyValue('StartValue', newValue); }
	get Deadband() { return this.GetPropertyValue('Deadband'); }
	set Deadband(newValue) { this.SetPropertyValue('Deadband', newValue); }
	get DisplayUnits() { return this.GetPropertyValue('DisplayUnits'); }
	get DisplayUnitsDiv() { return this.GetPropertyValue('DisplayUnitsDiv'); }
	get DisplayUnitsAdd() { return this.GetPropertyValue('DisplayUnitsAdd'); }
	get DisplayMin() { return this.GetPropertyValue('DisplayMin'); }
	set DisplayMin(newValue) { this.SetPropertyValue('DisplayMin', newValue); }
	get DisplayMax() { return this.GetPropertyValue('DisplayMax'); }
	set DisplayMax(newValue) { this.SetPropertyValue('DisplayMax', newValue); }
	get Bit0() { return this.GetPropertyValue('Bit0'); }
	set Bit0(newValue) { this.SetPropertyValue('Bit0', newValue); }
	get Bit1() { return this.GetPropertyValue('Bit1'); }
	set Bit1(newValue) { this.SetPropertyValue('Bit1', newValue); }
	get Bit2() { return this.GetPropertyValue('Bit2'); }
	set Bit2(newValue) { this.SetPropertyValue('Bit2', newValue); }
	get Bit3() { return this.GetPropertyValue('Bit3'); }
	set Bit3(newValue) { this.SetPropertyValue('Bit3', newValue); }
	get Bit4() { return this.GetPropertyValue('Bit4'); }
	set Bit4(newValue) { this.SetPropertyValue('Bit4', newValue); }
	get Bit5() { return this.GetPropertyValue('Bit5'); }
	set Bit5(newValue) { this.SetPropertyValue('Bit5', newValue); }
	get Bit6() { return this.GetPropertyValue('Bit6'); }
	set Bit6(newValue) { this.SetPropertyValue('Bit6', newValue); }
	get Bit7() { return this.GetPropertyValue('Bit7'); }
	set Bit7(newValue) { this.SetPropertyValue('Bit7', newValue); }
	get Bit8() { return this.GetPropertyValue('Bit8'); }
	set Bit8(newValue) { this.SetPropertyValue('Bit8', newValue); }
	get Bit9() { return this.GetPropertyValue('Bit9'); }
	set Bit9(newValue) { this.SetPropertyValue('Bit9', newValue); }
	get Bit10() { return this.GetPropertyValue('Bit10'); }
	set Bit10(newValue) { this.SetPropertyValue('Bit10', newValue); }
	get Bit11() { return this.GetPropertyValue('Bit11'); }
	set Bit11(newValue) { this.SetPropertyValue('Bit11', newValue); }
	get Bit12() { return this.GetPropertyValue('Bit12'); }
	set Bit12(newValue) { this.SetPropertyValue('Bit12', newValue); }
	get Bit13() { return this.GetPropertyValue('Bit13'); }
	set Bit13(newValue) { this.SetPropertyValue('Bit13', newValue); }
	get Bit14() { return this.GetPropertyValue('Bit14'); }
	set Bit14(newValue) { this.SetPropertyValue('Bit14', newValue); }
	get Bit15() { return this.GetPropertyValue('Bit15'); }
	set Bit15(newValue) { this.SetPropertyValue('Bit15', newValue); }
	get Bit16() { return this.GetPropertyValue('Bit16'); }
	set Bit16(newValue) { this.SetPropertyValue('Bit16', newValue); }
	get Bit17() { return this.GetPropertyValue('Bit17'); }
	set Bit17(newValue) { this.SetPropertyValue('Bit17', newValue); }
	get Bit18() { return this.GetPropertyValue('Bit18'); }
	set Bit18(newValue) { this.SetPropertyValue('Bit18', newValue); }
	get Bit19() { return this.GetPropertyValue('Bit19'); }
	set Bit19(newValue) { this.SetPropertyValue('Bit19', newValue); }
	get Bit20() { return this.GetPropertyValue('Bit20'); }
	set Bit20(newValue) { this.SetPropertyValue('Bit20', newValue); }
	get Bit21() { return this.GetPropertyValue('Bit21'); }
	set Bit21(newValue) { this.SetPropertyValue('Bit21', newValue); }
	get Bit22() { return this.GetPropertyValue('Bit22'); }
	set Bit22(newValue) { this.SetPropertyValue('Bit22', newValue); }
	get Bit23() { return this.GetPropertyValue('Bit23'); }
	set Bit23(newValue) { this.SetPropertyValue('Bit23', newValue); }
	get Bit24() { return this.GetPropertyValue('Bit24'); }
	set Bit24(newValue) { this.SetPropertyValue('Bit24', newValue); }
	get Bit25() { return this.GetPropertyValue('Bit25'); }
	set Bit25(newValue) { this.SetPropertyValue('Bit25', newValue); }
	get Bit26() { return this.GetPropertyValue('Bit26'); }
	set Bit26(newValue) { this.SetPropertyValue('Bit26', newValue); }
	get Bit27() { return this.GetPropertyValue('Bit27'); }
	set Bit27(newValue) { this.SetPropertyValue('Bit27', newValue); }
	get Bit28() { return this.GetPropertyValue('Bit28'); }
	set Bit28(newValue) { this.SetPropertyValue('Bit28', newValue); }
	get Bit29() { return this.GetPropertyValue('Bit29'); }
	set Bit29(newValue) { this.SetPropertyValue('Bit29', newValue); }
	get Bit30() { return this.GetPropertyValue('Bit30'); }
	set Bit30(newValue) { this.SetPropertyValue('Bit30', newValue); }
	get Bit31() { return this.GetPropertyValue('Bit31'); }
	set Bit31(newValue) { this.SetPropertyValue('Bit31', newValue); }
	get ScaleMin() { return this.GetPropertyValue('ScaleMin'); }
	set ScaleMin(newValue) { this.SetPropertyValue('ScaleMin', newValue); }
	get ScaleMax() { return this.GetPropertyValue('ScaleMax'); }
	set ScaleMax(newValue) { this.SetPropertyValue('ScaleMax', newValue); }
	get UtcDateTime() { return this.GetPropertyValue('UtcDateTime'); }
	set UtcDateTime(newValue) { this.SetPropertyValue('UtcDateTime', newValue); }
	get LocalDateTime() { return this.GetPropertyValue('LocalDateTime'); }
	set LocalDateTime(newValue) { this.SetPropertyValue('LocalDateTime', newValue); }
	get Model() { return this.GetPropertyValue('Model'); }
	get Trigger() { return this.GetPropertyValue('Trigger'); }
	set Trigger(newValue) { this.SetPropertyValue('Trigger', newValue); }
	get Interval() { return this.GetPropertyValue('Interval'); }
	set Interval(newValue) { this.SetPropertyValue('Interval', newValue); }
	get Table() { return this.GetPropertyValue('Table'); }
	get OverwriteOnUpdate() { return this.GetPropertyValue('OverwriteOnUpdate'); }
	set OverwriteOnUpdate(newValue) { this.SetPropertyValue('OverwriteOnUpdate', newValue); }
	get TotalHours() { return this.GetPropertyValue('TotalHours'); }
	set TotalHours(newValue) { this.SetPropertyValue('TotalHours', newValue); }
	get Bit32() { return this.GetPropertyValue('Bit32'); }
	set Bit32(newValue) { this.SetPropertyValue('Bit32', newValue); }
	get Bit33() { return this.GetPropertyValue('Bit33'); }
	set Bit33(newValue) { this.SetPropertyValue('Bit33', newValue); }
	get Bit34() { return this.GetPropertyValue('Bit34'); }
	set Bit34(newValue) { this.SetPropertyValue('Bit34', newValue); }
	get Bit35() { return this.GetPropertyValue('Bit35'); }
	set Bit35(newValue) { this.SetPropertyValue('Bit35', newValue); }
	get Bit36() { return this.GetPropertyValue('Bit36'); }
	set Bit36(newValue) { this.SetPropertyValue('Bit36', newValue); }
	get Bit37() { return this.GetPropertyValue('Bit37'); }
	set Bit37(newValue) { this.SetPropertyValue('Bit37', newValue); }
	get Bit38() { return this.GetPropertyValue('Bit38'); }
	set Bit38(newValue) { this.SetPropertyValue('Bit38', newValue); }
	get Bit39() { return this.GetPropertyValue('Bit39'); }
	set Bit39(newValue) { this.SetPropertyValue('Bit39', newValue); }
	get Bit40() { return this.GetPropertyValue('Bit40'); }
	set Bit40(newValue) { this.SetPropertyValue('Bit40', newValue); }
	get Bit41() { return this.GetPropertyValue('Bit41'); }
	set Bit41(newValue) { this.SetPropertyValue('Bit41', newValue); }
	get Bit42() { return this.GetPropertyValue('Bit42'); }
	set Bit42(newValue) { this.SetPropertyValue('Bit42', newValue); }
	get Bit43() { return this.GetPropertyValue('Bit43'); }
	set Bit43(newValue) { this.SetPropertyValue('Bit43', newValue); }
	get Bit44() { return this.GetPropertyValue('Bit44'); }
	set Bit44(newValue) { this.SetPropertyValue('Bit44', newValue); }
	get Bit45() { return this.GetPropertyValue('Bit45'); }
	set Bit45(newValue) { this.SetPropertyValue('Bit45', newValue); }
	get Bit46() { return this.GetPropertyValue('Bit46'); }
	set Bit46(newValue) { this.SetPropertyValue('Bit46', newValue); }
	get Bit47() { return this.GetPropertyValue('Bit47'); }
	set Bit47(newValue) { this.SetPropertyValue('Bit47', newValue); }
	get Bit48() { return this.GetPropertyValue('Bit48'); }
	set Bit48(newValue) { this.SetPropertyValue('Bit48', newValue); }
	get Bit49() { return this.GetPropertyValue('Bit49'); }
	set Bit49(newValue) { this.SetPropertyValue('Bit49', newValue); }
	get Bit50() { return this.GetPropertyValue('Bit50'); }
	set Bit50(newValue) { this.SetPropertyValue('Bit50', newValue); }
	get Bit51() { return this.GetPropertyValue('Bit51'); }
	set Bit51(newValue) { this.SetPropertyValue('Bit51', newValue); }
	get Bit52() { return this.GetPropertyValue('Bit52'); }
	set Bit52(newValue) { this.SetPropertyValue('Bit52', newValue); }
	get Bit53() { return this.GetPropertyValue('Bit53'); }
	set Bit53(newValue) { this.SetPropertyValue('Bit53', newValue); }
	get Bit54() { return this.GetPropertyValue('Bit54'); }
	set Bit54(newValue) { this.SetPropertyValue('Bit54', newValue); }
	get Bit55() { return this.GetPropertyValue('Bit55'); }
	set Bit55(newValue) { this.SetPropertyValue('Bit55', newValue); }
	get Bit56() { return this.GetPropertyValue('Bit56'); }
	set Bit56(newValue) { this.SetPropertyValue('Bit56', newValue); }
	get Bit57() { return this.GetPropertyValue('Bit57'); }
	set Bit57(newValue) { this.SetPropertyValue('Bit57', newValue); }
	get Bit58() { return this.GetPropertyValue('Bit58'); }
	set Bit58(newValue) { this.SetPropertyValue('Bit58', newValue); }
	get Bit59() { return this.GetPropertyValue('Bit59'); }
	set Bit59(newValue) { this.SetPropertyValue('Bit59', newValue); }
	get Bit60() { return this.GetPropertyValue('Bit60'); }
	set Bit60(newValue) { this.SetPropertyValue('Bit60', newValue); }
	get Bit61() { return this.GetPropertyValue('Bit61'); }
	set Bit61(newValue) { this.SetPropertyValue('Bit61', newValue); }
	get Bit62() { return this.GetPropertyValue('Bit62'); }
	set Bit62(newValue) { this.SetPropertyValue('Bit62', newValue); }
	get Bit63() { return this.GetPropertyValue('Bit63'); }
	set Bit63(newValue) { this.SetPropertyValue('Bit63', newValue); }
	get Now() { return this.GetPropertyValue('Now'); }
	get UtcNow() { return this.GetPropertyValue('UtcNow'); }
	get Date() { return this.GetPropertyValue('Date'); }
	get Year() { return this.GetPropertyValue('Year'); }
	get Month() { return this.GetPropertyValue('Month'); }
	get Day() { return this.GetPropertyValue('Day'); }
	get DayOfWeek() { return this.GetPropertyValue('DayOfWeek'); }
	get DayOfYear() { return this.GetPropertyValue('DayOfYear'); }
	get Tomorrow() { return this.GetPropertyValue('Tomorrow'); }
	get Yesterday() { return this.GetPropertyValue('Yesterday'); }
	get Ticks() { return this.GetPropertyValue('Ticks'); }
	get Time() { return this.GetPropertyValue('Time'); }
	get Hour() { return this.GetPropertyValue('Hour'); }
	get Minute() { return this.GetPropertyValue('Minute'); }
	get Second() { return this.GetPropertyValue('Second'); }
	get Millisecond() { return this.GetPropertyValue('Millisecond'); }
	get BlinkSlow() { return this.GetPropertyValue('BlinkSlow'); }
	get BlinkFast() { return this.GetPropertyValue('BlinkFast'); }
	get Shutdown() { return this.GetPropertyValue('Shutdown'); }
	set Shutdown(newValue) { this.SetPropertyValue('Shutdown', newValue); }
	get Startup() { return this.GetPropertyValue('Startup'); }
	get CultureInfo() { return this.GetPropertyValue('CultureInfo'); }
	set CultureInfo(newValue) { this.SetPropertyValue('CultureInfo', newValue); }
	get CurrentUser() { return this.GetPropertyValue('CurrentUser'); }
	get Localization() { return this.GetPropertyValue('Localization'); }
	set Localization(newValue) { this.SetPropertyValue('Localization', newValue); }
	get SelectedPage() { return this.GetPropertyValue('SelectedPage'); }
	set SelectedPage(newValue) { this.SetPropertyValue('SelectedPage', newValue); }
	get InputUserName() { return this.GetPropertyValue('InputUserName'); }
	set InputUserName(newValue) { this.SetPropertyValue('InputUserName', newValue); }
	get InputPassword() { return this.GetPropertyValue('InputPassword'); }
	set InputPassword(newValue) { this.SetPropertyValue('InputPassword', newValue); }
	get InputMessage() { return this.GetPropertyValue('InputMessage'); }
	set InputMessage(newValue) { this.SetPropertyValue('InputMessage', newValue); }
	get UserName() { return this.GetPropertyValue('UserName'); }
	get ComputerIP() { return this.GetPropertyValue('ComputerIP'); }
	get ComputerName() { return this.GetPropertyValue('ComputerName'); }
	get LayoutName() { return this.GetPropertyValue('LayoutName'); }
	get CurrentPage() { return this.GetPropertyValue('CurrentPage'); }
	get AlarmBeepOff() { return this.GetPropertyValue('AlarmBeepOff'); }
	set AlarmBeepOff(newValue) { this.SetPropertyValue('AlarmBeepOff', newValue); }
	get TimeMs() { return this.GetPropertyValue('TimeMs'); }
	get SimulationAnalog() { return this.GetPropertyValue('SimulationAnalog'); }
	get SimulationDigital() { return this.GetPropertyValue('SimulationDigital'); }
	get PreviousPage() { return this.GetPropertyValue('PreviousPage'); }
	get DateTime() { return this.GetPropertyValue('DateTime'); }
	get IsWebBrowser() { return this.GetPropertyValue('IsWebBrowser'); }
	get OnScreenKeyboard() { return this.GetPropertyValue('OnScreenKeyboard'); }
	set OnScreenKeyboard(newValue) { this.SetPropertyValue('OnScreenKeyboard', newValue); }
	get SimulationDouble() { return this.GetPropertyValue('SimulationDouble'); }
	get ServerHttpAddress() { return this.GetPropertyValue('ServerHttpAddress'); }
	get Uid() { return this.GetPropertyValue('Uid'); }
	set Uid(newValue) { this.SetPropertyValue('Uid', newValue); }
	get TimeSpan() { return this.GetPropertyValue('TimeSpan'); }
	get LogonDateTime() { return this.GetPropertyValue('LogonDateTime'); }
	get UserInactivity() { return this.GetPropertyValue('UserInactivity'); }
	get IsConnected() { return this.GetPropertyValue('IsConnected'); }
	set IsConnected(newValue) { this.SetPropertyValue('IsConnected', newValue); }
	get PreviousLayout() { return this.GetPropertyValue('PreviousLayout'); }
	get RunAlwaysOnTop() { return this.GetPropertyValue('RunAlwaysOnTop'); }
	set RunAlwaysOnTop(newValue) { this.SetPropertyValue('RunAlwaysOnTop', newValue); }
	get StatusBarVisibleOnIOS() { return this.GetPropertyValue('StatusBarVisibleOnIOS'); }
	set StatusBarVisibleOnIOS(newValue) { this.SetPropertyValue('StatusBarVisibleOnIOS', newValue); }
	get IsSmartDevice() { return this.GetPropertyValue('IsSmartDevice'); }
	get IsBackButtonVisibleOnIOS() { return this.GetPropertyValue('IsBackButtonVisibleOnIOS'); }
	set IsBackButtonVisibleOnIOS(newValue) { this.SetPropertyValue('IsBackButtonVisibleOnIOS', newValue); }
	get ConfigurationChanged() { return this.GetPropertyValue('ConfigurationChanged'); }
	set ConfigurationChanged(newValue) { this.SetPropertyValue('ConfigurationChanged', newValue); }
	get IsStarted() { return this.GetPropertyValue('IsStarted'); }
	get StartCounter() { return this.GetPropertyValue('StartCounter'); }
	get TooltipOptions() { return this.GetPropertyValue('TooltipOptions'); }
	set TooltipOptions(newValue) { this.SetPropertyValue('TooltipOptions', newValue); }
	get AutoScaleMargin() { return this.GetPropertyValue('AutoScaleMargin'); }
	set AutoScaleMargin(newValue) { this.SetPropertyValue('AutoScaleMargin', newValue); }
	get IsLocal() { return this.GetPropertyValue('IsLocal'); }
	get IsRemote() { return this.GetPropertyValue('IsRemote'); }
	get ReadOnly() { return this.GetPropertyValue('ReadOnly'); }
	set ReadOnly(newValue) { this.SetPropertyValue('ReadOnly', newValue); }
	get BackPage() { return this.GetPropertyValue('BackPage'); }
	set BackPage(newValue) { this.SetPropertyValue('BackPage', newValue); }
	get NextPage() { return this.GetPropertyValue('NextPage'); }
	set NextPage(newValue) { this.SetPropertyValue('NextPage', newValue); }
	get HistoryPages() { return this.GetPropertyValue('HistoryPages'); }
	get HistoryPagesIndex() { return this.GetPropertyValue('HistoryPagesIndex'); }
	get TooltipInitialShowDelay() { return this.GetPropertyValue('TooltipInitialShowDelay'); }
	set TooltipInitialShowDelay(newValue) { this.SetPropertyValue('TooltipInitialShowDelay', newValue); }
	get IsIPhone() { return this.GetPropertyValue('IsIPhone'); }
	set IsIPhone(newValue) { this.SetPropertyValue('IsIPhone', newValue); }
	get IsIPad() { return this.GetPropertyValue('IsIPad'); }
	set IsIPad(newValue) { this.SetPropertyValue('IsIPad', newValue); }
	get IsSmartDevicePortrait() { return this.GetPropertyValue('IsSmartDevicePortrait'); }
	set IsSmartDevicePortrait(newValue) { this.SetPropertyValue('IsSmartDevicePortrait', newValue); }
	get IsSmartClient() { return this.GetPropertyValue('IsSmartClient'); }
	get Parameters() { return this.GetPropertyValue('Parameters'); }
	get DisableMultiTouch() { return this.GetPropertyValue('DisableMultiTouch'); }
	set DisableMultiTouch(newValue) { this.SetPropertyValue('DisableMultiTouch', newValue); }
	get PreloadedTags() { return this.GetPropertyValue('PreloadedTags'); }
	get NumberOfTagsLoaded() { return this.GetPropertyValue('NumberOfTagsLoaded'); }
	get NumberOfTagPropertiesLoaded() { return this.GetPropertyValue('NumberOfTagPropertiesLoaded'); }
	get Theme() { return this.GetPropertyValue('Theme'); }
	set Theme(newValue) { this.SetPropertyValue('Theme', newValue); }
	get Simulation() { return this.GetPropertyValue('Simulation'); }
	set Simulation(newValue) { this.SetPropertyValue('Simulation', newValue); }
	get HttpAddress() { return this.GetPropertyValue('HttpAddress'); }
	get DateString() { return this.GetPropertyValue('DateString'); }
	get UtcDay() { return this.GetPropertyValue('UtcDay'); }
	get IsRunningAsService() { return this.GetPropertyValue('IsRunningAsService'); }
	get TStartupStartedTime() { return this.GetPropertyValue('TStartupStartedTime'); }
	set TStartupStartedTime(newValue) { this.SetPropertyValue('TStartupStartedTime', newValue); }
	get IsTStartupStarted() { return this.GetPropertyValue('IsTStartupStarted'); }
	set IsTStartupStarted(newValue) { this.SetPropertyValue('IsTStartupStarted', newValue); }
	get IsTServerStartedByTStartup() { return this.GetPropertyValue('IsTServerStartedByTStartup'); }
	set IsTServerStartedByTStartup(newValue) { this.SetPropertyValue('IsTServerStartedByTStartup', newValue); }
	get OSVersion() { return this.GetPropertyValue('OSVersion'); }
	get SaveDiagnostics() { return this.GetPropertyValue('SaveDiagnostics'); }
	set SaveDiagnostics(newValue) { this.SetPropertyValue('SaveDiagnostics', newValue); }
	get IsRunningOnDocker() { return this.GetPropertyValue('IsRunningOnDocker'); }
	get ResetStatistics() { return this.GetPropertyValue('ResetStatistics'); }
	set ResetStatistics(newValue) { this.SetPropertyValue('ResetStatistics', newValue); }
	get Sound() { return this.GetPropertyValue('Sound'); }
	get Show() { return this.GetPropertyValue('Show'); }
	get LogEvents() { return this.GetPropertyValue('LogEvents'); }
	get NotificationMethod() { return this.GetPropertyValue('NotificationMethod'); }
	get TotalCount() { return this.GetPropertyValue('TotalCount'); }
	get UnAckCount() { return this.GetPropertyValue('UnAckCount'); }
	get AckAll() { return this.GetPropertyValue('AckAll'); }
	set AckAll(newValue) { this.SetPropertyValue('AckAll', newValue); }
	get Colors() { return this.GetPropertyValue('Colors'); }
	get ActiveTimeDeadband() { return this.GetPropertyValue('ActiveTimeDeadband'); }
	set ActiveTimeDeadband(newValue) { this.SetPropertyValue('ActiveTimeDeadband', newValue); }
	get PriorityItem() { return this.GetPropertyValue('PriorityItem'); }
	get ActiveUnAckCount() { return this.GetPropertyValue('ActiveUnAckCount'); }
	get AckTimeout() { return this.GetPropertyValue('AckTimeout'); }
	set AckTimeout(newValue) { this.SetPropertyValue('AckTimeout', newValue); }
	get LastAlarmItemNotified() { return this.GetPropertyValue('LastAlarmItemNotified'); }
	get AutoAckTime() { return this.GetPropertyValue('AutoAckTime'); }
	set AutoAckTime(newValue) { this.SetPropertyValue('AutoAckTime', newValue); }
	get CustomEvaluation() { return this.GetPropertyValue('CustomEvaluation'); }
	set CustomEvaluation(newValue) { this.SetPropertyValue('CustomEvaluation', newValue); }
	get DisableLog() { return this.GetPropertyValue('DisableLog'); }
	set DisableLog(newValue) { this.SetPropertyValue('DisableLog', newValue); }
	get Suspend() { return this.GetPropertyValue('Suspend'); }
	set Suspend(newValue) { this.SetPropertyValue('Suspend', newValue); }
	get TagName() { return this.GetPropertyValue('TagName'); }
	get Condition() { return this.GetPropertyValue('Condition'); }
	get Limit() { return this.GetPropertyValue('Limit'); }
	set Limit(newValue) { this.SetPropertyValue('Limit', newValue); }
	get Setpoint() { return this.GetPropertyValue('Setpoint'); }
	set Setpoint(newValue) { this.SetPropertyValue('Setpoint', newValue); }
	get SetpointDeadband() { return this.GetPropertyValue('SetpointDeadband'); }
	set SetpointDeadband(newValue) { this.SetPropertyValue('SetpointDeadband', newValue); }
	get Group() { return this.GetPropertyValue('Group'); }
	get Area() { return this.GetPropertyValue('Area'); }
	set Area(newValue) { this.SetPropertyValue('Area', newValue); }
	get Priority() { return this.GetPropertyValue('Priority'); }
	set Priority(newValue) { this.SetPropertyValue('Priority', newValue); }
	get Message() { return this.GetPropertyValue('Message'); }
	set Message(newValue) { this.SetPropertyValue('Message', newValue); }
	get Alarm() { return this.GetPropertyValue('Alarm'); }
	set Alarm(newValue) { this.SetPropertyValue('Alarm', newValue); }
	get UnAck() { return this.GetPropertyValue('UnAck'); }
	set UnAck(newValue) { this.SetPropertyValue('UnAck', newValue); }
	get ActiveTime() { return this.GetPropertyValue('ActiveTime'); }
	get NormTime() { return this.GetPropertyValue('NormTime'); }
	get AckTime() { return this.GetPropertyValue('AckTime'); }
	get Comment() { return this.GetPropertyValue('Comment'); }
	set Comment(newValue) { this.SetPropertyValue('Comment', newValue); }
	get ColorBG() { return this.GetPropertyValue('ColorBG'); }
	get ColorFG() { return this.GetPropertyValue('ColorFG'); }
	get LastValue() { return this.GetPropertyValue('LastValue'); }
	get MessageExtended() { return this.GetPropertyValue('MessageExtended'); }
	get Limit1() { return this.GetPropertyValue('Limit1'); }
	set Limit1(newValue) { this.SetPropertyValue('Limit1', newValue); }
	get Limit2() { return this.GetPropertyValue('Limit2'); }
	set Limit2(newValue) { this.SetPropertyValue('Limit2', newValue); }
	get Limit0() { return this.GetPropertyValue('Limit0'); }
	set Limit0(newValue) { this.SetPropertyValue('Limit0', newValue); }
	get MessageValue() { return this.GetPropertyValue('MessageValue'); }
	set MessageValue(newValue) { this.SetPropertyValue('MessageValue', newValue); }
	get ActiveLocalTime() { return this.GetPropertyValue('ActiveLocalTime'); }
	get Duration() { return this.GetPropertyValue('Duration'); }
	get AuxValue() { return this.GetPropertyValue('AuxValue'); }
	get ItemName() { return this.GetPropertyValue('ItemName'); }
	set ItemName(newValue) { this.SetPropertyValue('ItemName', newValue); }
	get BlinkBG() { return this.GetPropertyValue('BlinkBG'); }
	get BlinkFG() { return this.GetPropertyValue('BlinkFG'); }
	get AuxValue2() { return this.GetPropertyValue('AuxValue2'); }
	get AuxValue3() { return this.GetPropertyValue('AuxValue3'); }
	get Item() { return this.GetPropertyValue('Item'); }
	get QueryActive() { return this.GetPropertyValue('QueryActive'); }
	get BeepState() { return this.GetPropertyValue('BeepState'); }
	set BeepState(newValue) { this.SetPropertyValue('BeepState', newValue); }
	get LastStoredTimeStamp() { return this.GetPropertyValue('LastStoredTimeStamp'); }
	get LastStoredErrorMessage() { return this.GetPropertyValue('LastStoredErrorMessage'); }
	get IsSecondaryActive() { return this.GetPropertyValue('IsSecondaryActive'); }
	set IsSecondaryActive(newValue) { this.SetPropertyValue('IsSecondaryActive', newValue); }
	get ErrorCount() { return this.GetPropertyValue('ErrorCount'); }
	get SuccessCount() { return this.GetPropertyValue('SuccessCount'); }
	get BeepValue() { return this.GetPropertyValue('BeepValue'); }
	set BeepValue(newValue) { this.SetPropertyValue('BeepValue', newValue); }
	get CurrentShift() { return this.GetPropertyValue('CurrentShift'); }
	set CurrentShift(newValue) { this.SetPropertyValue('CurrentShift', newValue); }
	get LastTickAdded() { return this.GetPropertyValue('LastTickAdded'); }
	get IsNotifySync() { return this.GetPropertyValue('IsNotifySync'); }
	set IsNotifySync(newValue) { this.SetPropertyValue('IsNotifySync', newValue); }
	get LastHistoricID() { return this.GetPropertyValue('LastHistoricID'); }
	get LastHistorianTimestampTicks() { return this.GetPropertyValue('LastHistorianTimestampTicks'); }
	get IsAlarmEventsInOverflow() { return this.GetPropertyValue('IsAlarmEventsInOverflow'); }
	get DisableSaveToDatabase() { return this.GetPropertyValue('DisableSaveToDatabase'); }
	set DisableSaveToDatabase(newValue) { this.SetPropertyValue('DisableSaveToDatabase', newValue); }
	get TotalCountLocal() { return this.GetPropertyValue('TotalCountLocal'); }
	get UnAckCountLocal() { return this.GetPropertyValue('UnAckCountLocal'); }
	get DisableLocal() { return this.GetPropertyValue('DisableLocal'); }
	set DisableLocal(newValue) { this.SetPropertyValue('DisableLocal', newValue); }
	get AckAllLocal() { return this.GetPropertyValue('AckAllLocal'); }
	set AckAllLocal(newValue) { this.SetPropertyValue('AckAllLocal', newValue); }
	get SuspendLocal() { return this.GetPropertyValue('SuspendLocal'); }
	set SuspendLocal(newValue) { this.SetPropertyValue('SuspendLocal', newValue); }
	get DisplayName() { return this.GetPropertyValue('DisplayName'); }
	get PendingAlarmsForSaving() { return this.GetPropertyValue('PendingAlarmsForSaving'); }
	set PendingAlarmsForSaving(newValue) { this.SetPropertyValue('PendingAlarmsForSaving', newValue); }
	get PendingEventsForSaving() { return this.GetPropertyValue('PendingEventsForSaving'); }
	set PendingEventsForSaving(newValue) { this.SetPropertyValue('PendingEventsForSaving', newValue); }
	get LastSyncMessage() { return this.GetPropertyValue('LastSyncMessage'); }
	get LastSyncTimestamp() { return this.GetPropertyValue('LastSyncTimestamp'); }
	get LastSyncErrorMessage() { return this.GetPropertyValue('LastSyncErrorMessage'); }
	get LastSyncErrorTimestamp() { return this.GetPropertyValue('LastSyncErrorTimestamp'); }
	get TimeDeadband() { return this.GetPropertyValue('TimeDeadband'); }
	get LifeTime() { return this.GetPropertyValue('LifeTime'); }
	get AutoCreate() { return this.GetPropertyValue('AutoCreate'); }
	get StorageLocation() { return this.GetPropertyValue('StorageLocation'); }
	get LastDeletedTimeStamp() { return this.GetPropertyValue('LastDeletedTimeStamp'); }
	get LastDeletedErrorMessage() { return this.GetPropertyValue('LastDeletedErrorMessage'); }
	get InitializationMessage() { return this.GetPropertyValue('InitializationMessage'); }
	get RowsCount() { return this.GetPropertyValue('RowsCount'); }
	get SaveOnChange() { return this.GetPropertyValue('SaveOnChange'); }
	get IsDeleting() { return this.GetPropertyValue('IsDeleting'); }
	get SaveQuality() { return this.GetPropertyValue('SaveQuality'); }
	get Normalized() { return this.GetPropertyValue('Normalized'); }
	get HistorianTable() { return this.GetPropertyValue('HistorianTable'); }
	get Deviation() { return this.GetPropertyValue('Deviation'); }
	get DeviationDeadBandType() { return this.GetPropertyValue('DeviationDeadBandType'); }
	get DeviationDeadBandLimit() { return this.GetPropertyValue('DeviationDeadBandLimit'); }
	get Provider() { return this.GetPropertyValue('Provider'); }
	set Provider(newValue) { this.SetPropertyValue('Provider', newValue); }
	get ConnectionString() { return this.GetPropertyValue('ConnectionString'); }
	set ConnectionString(newValue) { this.SetPropertyValue('ConnectionString', newValue); }
	get Database() { return this.GetPropertyValue('Database'); }
	get TimeoutControl() { return this.GetPropertyValue('TimeoutControl'); }
	get ServerIP() { return this.GetPropertyValue('ServerIP'); }
	set ServerIP(newValue) { this.SetPropertyValue('ServerIP', newValue); }
	get OpenStatusMessage() { return this.GetPropertyValue('OpenStatusMessage'); }
	get FileName() { return this.GetPropertyValue('FileName'); }
	get FileType() { return this.GetPropertyValue('FileType'); }
	get Objects() { return this.GetPropertyValue('Objects'); }
	get LastStatus() { return this.GetPropertyValue('LastStatus'); }
	set LastStatus(newValue) { this.SetPropertyValue('LastStatus', newValue); }
	get LastStatusMessage() { return this.GetPropertyValue('LastStatusMessage'); }
	set LastStatusMessage(newValue) { this.SetPropertyValue('LastStatusMessage', newValue); }
	get Completed() { return this.GetPropertyValue('Completed'); }
	set Completed(newValue) { this.SetPropertyValue('Completed', newValue); }
	get Save() { return this.GetPropertyValue('Save'); }
	set Save(newValue) { this.SetPropertyValue('Save', newValue); }
	get Load() { return this.GetPropertyValue('Load'); }
	set Load(newValue) { this.SetPropertyValue('Load', newValue); }
	get SaveExecuted() { return this.GetPropertyValue('SaveExecuted'); }
	set SaveExecuted(newValue) { this.SetPropertyValue('SaveExecuted', newValue); }
	get LoadExecuted() { return this.GetPropertyValue('LoadExecuted'); }
	get Delete() { return this.GetPropertyValue('Delete'); }
	set Delete(newValue) { this.SetPropertyValue('Delete', newValue); }
	get DeleteExecuted() { return this.GetPropertyValue('DeleteExecuted'); }
	get XmlSchemaFile() { return this.GetPropertyValue('XmlSchemaFile'); }
	get DB() { return this.GetPropertyValue('DB'); }
	get TableName() { return this.GetPropertyValue('TableName'); }
	set TableName(newValue) { this.SetPropertyValue('TableName', newValue); }
	get WhereCondition() { return this.GetPropertyValue('WhereCondition'); }
	set WhereCondition(newValue) { this.SetPropertyValue('WhereCondition', newValue); }
	get Access() { return this.GetPropertyValue('Access'); }
	set Access(newValue) { this.SetPropertyValue('Access', newValue); }
	get Mapping() { return this.GetPropertyValue('Mapping'); }
	get CursorIndex() { return this.GetPropertyValue('CursorIndex'); }
	set CursorIndex(newValue) { this.SetPropertyValue('CursorIndex', newValue); }
	get RowCount() { return this.GetPropertyValue('RowCount'); }
	get Select() { return this.GetPropertyValue('Select'); }
	set Select(newValue) { this.SetPropertyValue('Select', newValue); }
	get Next() { return this.GetPropertyValue('Next'); }
	set Next(newValue) { this.SetPropertyValue('Next', newValue); }
	get Insert() { return this.GetPropertyValue('Insert'); }
	set Insert(newValue) { this.SetPropertyValue('Insert', newValue); }
	get Update() { return this.GetPropertyValue('Update'); }
	set Update(newValue) { this.SetPropertyValue('Update', newValue); }
	get AsyncContents() { return this.GetPropertyValue('AsyncContents'); }
	get LocalContents() { return this.GetPropertyValue('LocalContents'); }
	get SelectExecuted() { return this.GetPropertyValue('SelectExecuted'); }
	get NextExecuted() { return this.GetPropertyValue('NextExecuted'); }
	get InsertExecuted() { return this.GetPropertyValue('InsertExecuted'); }
	get UpdateExecuted() { return this.GetPropertyValue('UpdateExecuted'); }
	get DateTimeMode() { return this.GetPropertyValue('DateTimeMode'); }
	set DateTimeMode(newValue) { this.SetPropertyValue('DateTimeMode', newValue); }
	get SqlStatement() { return this.GetPropertyValue('SqlStatement'); }
	set SqlStatement(newValue) { this.SetPropertyValue('SqlStatement', newValue); }
	get Execute() { return this.GetPropertyValue('Execute'); }
	set Execute(newValue) { this.SetPropertyValue('Execute', newValue); }
	get ExecuteCompleted() { return this.GetPropertyValue('ExecuteCompleted'); }
	get Status() { return this.GetPropertyValue('Status'); }
	get LastErrorCode() { return this.GetPropertyValue('LastErrorCode'); }
	get LastErrorDateTime() { return this.GetPropertyValue('LastErrorDateTime'); }
	get Activity() { return this.GetPropertyValue('Activity'); }
	set Activity(newValue) { this.SetPropertyValue('Activity', newValue); }
	get InitialState() { return this.GetPropertyValue('InitialState'); }
	get IsRunning() { return this.GetPropertyValue('IsRunning'); }
	set IsRunning(newValue) { this.SetPropertyValue('IsRunning', newValue); }
	get Diagnostics() { return this.GetPropertyValue('Diagnostics'); }
	set Diagnostics(newValue) { this.SetPropertyValue('Diagnostics', newValue); }
	get DriverVersion() { return this.GetPropertyValue('DriverVersion'); }
	get SuccessAmount() { return this.GetPropertyValue('SuccessAmount'); }
	get FailAmount() { return this.GetPropertyValue('FailAmount'); }
	get AverageTime() { return this.GetPropertyValue('AverageTime'); }
	get AverageCycleTime() { return this.GetPropertyValue('AverageCycleTime'); }
	get ClearReadQueue() { return this.GetPropertyValue('ClearReadQueue'); }
	set ClearReadQueue(newValue) { this.SetPropertyValue('ClearReadQueue', newValue); }
	get ClearWriteQueue() { return this.GetPropertyValue('ClearWriteQueue'); }
	set ClearWriteQueue(newValue) { this.SetPropertyValue('ClearWriteQueue', newValue); }
	get ProcessName() { return this.GetPropertyValue('ProcessName'); }
	get ProcessPID() { return this.GetPropertyValue('ProcessPID'); }
	get DeactivateCounter() { return this.GetPropertyValue('DeactivateCounter'); }
	get PrimaryStation() { return this.GetPropertyValue('PrimaryStation'); }
	set PrimaryStation(newValue) { this.SetPropertyValue('PrimaryStation', newValue); }
	get BackupStation() { return this.GetPropertyValue('BackupStation'); }
	set BackupStation(newValue) { this.SetPropertyValue('BackupStation', newValue); }
	get IsRedundancyEnabled() { return this.GetPropertyValue('IsRedundancyEnabled'); }
	get IsPrimary() { return this.GetPropertyValue('IsPrimary'); }
	get IsBackup() { return this.GetPropertyValue('IsBackup'); }
	get InvalidAddresses() { return this.GetPropertyValue('InvalidAddresses'); }
	set InvalidAddresses(newValue) { this.SetPropertyValue('InvalidAddresses', newValue); }
	get ActivityCounter() { return this.GetPropertyValue('ActivityCounter'); }
	set ActivityCounter(newValue) { this.SetPropertyValue('ActivityCounter', newValue); }
	get DisableAutoSwitch() { return this.GetPropertyValue('DisableAutoSwitch'); }
	set DisableAutoSwitch(newValue) { this.SetPropertyValue('DisableAutoSwitch', newValue); }
	get ForceSwitch() { return this.GetPropertyValue('ForceSwitch'); }
	set ForceSwitch(newValue) { this.SetPropertyValue('ForceSwitch', newValue); }
	get ReadPolling() { return this.GetPropertyValue('ReadPolling'); }
	get ReadPollingRate() { return this.GetPropertyValue('ReadPollingRate'); }
	get WriteEventEnabled() { return this.GetPropertyValue('WriteEventEnabled'); }
	get AcceptUnsolicited() { return this.GetPropertyValue('AcceptUnsolicited'); }
	get ReadOnStartup() { return this.GetPropertyValue('ReadOnStartup'); }
	get ReadTrigger() { return this.GetPropertyValue('ReadTrigger'); }
	get ReadStatus() { return this.GetPropertyValue('ReadStatus'); }
	get ReadCompleted() { return this.GetPropertyValue('ReadCompleted'); }
	get WriteTrigger() { return this.GetPropertyValue('WriteTrigger'); }
	get WriteStatus() { return this.GetPropertyValue('WriteStatus'); }
	get WriteCompleted() { return this.GetPropertyValue('WriteCompleted'); }
	get BlockCommand() { return this.GetPropertyValue('BlockCommand'); }
	get PendingRead() { return this.GetPropertyValue('PendingRead'); }
	get ForcedRead() { return this.GetPropertyValue('ForcedRead'); }
	get PendingWrite() { return this.GetPropertyValue('PendingWrite'); }
	get ForcedWrite() { return this.GetPropertyValue('ForcedWrite'); }
	get IsOpened() { return this.GetPropertyValue('IsOpened'); }
	get ZoomLevel() { return this.GetPropertyValue('ZoomLevel'); }
	set ZoomLevel(newValue) { this.SetPropertyValue('ZoomLevel', newValue); }
	get VerticalScroll() { return this.GetPropertyValue('VerticalScroll'); }
	set VerticalScroll(newValue) { this.SetPropertyValue('VerticalScroll', newValue); }
	get HorizontalScroll() { return this.GetPropertyValue('HorizontalScroll'); }
	set HorizontalScroll(newValue) { this.SetPropertyValue('HorizontalScroll', newValue); }
	get CustomProperties() { return this.GetPropertyValue('CustomProperties'); }
	get CPUName() { return this.GetPropertyValue('CPUName'); }
	get CPUClock() { return this.GetPropertyValue('CPUClock'); }
	get CPUUsage() { return this.GetPropertyValue('CPUUsage'); }
	get MemoryUsage() { return this.GetPropertyValue('MemoryUsage'); }
	get AvailableRAM() { return this.GetPropertyValue('AvailableRAM'); }
	get TotalRAM() { return this.GetPropertyValue('TotalRAM'); }
	get DiskSpace() { return this.GetPropertyValue('DiskSpace'); }
	get TServerCPUUsage() { return this.GetPropertyValue('TServerCPUUsage'); }
	get TServerMemoryMB() { return this.GetPropertyValue('TServerMemoryMB'); }
	get Uptime() { return this.GetPropertyValue('Uptime'); }
	get VisualizerCPUUsage() { return this.GetPropertyValue('VisualizerCPUUsage'); }
	get VisualizerMemoryMB() { return this.GetPropertyValue('VisualizerMemoryMB'); }
	get IsActivated() { return this.GetPropertyValue('IsActivated'); }
	get IsSecondary() { return this.GetPropertyValue('IsSecondary'); }
	get IsSwitchToPrimaryEnabled() { return this.GetPropertyValue('IsSwitchToPrimaryEnabled'); }
	get IsStandByActive() { return this.GetPropertyValue('IsStandByActive'); }
	get PrimaryIP() { return this.GetPropertyValue('PrimaryIP'); }
	get SecondaryIP() { return this.GetPropertyValue('SecondaryIP'); }
	get RedundancyPendingObjects() { return this.GetPropertyValue('RedundancyPendingObjects'); }
	set RedundancyPendingObjects(newValue) { this.SetPropertyValue('RedundancyPendingObjects', newValue); }
	get UpdateSolutionOnInactiveServer() { return this.GetPropertyValue('UpdateSolutionOnInactiveServer'); }
	set UpdateSolutionOnInactiveServer(newValue) { this.SetPropertyValue('UpdateSolutionOnInactiveServer', newValue); }
	get UpdateSolutionIPPathName() { return this.GetPropertyValue('UpdateSolutionIPPathName'); }
	set UpdateSolutionIPPathName(newValue) { this.SetPropertyValue('UpdateSolutionIPPathName', newValue); }
	get PrimaryPort() { return this.GetPropertyValue('PrimaryPort'); }
	get SecondaryPort() { return this.GetPropertyValue('SecondaryPort'); }
	get PairStartedTime() { return this.GetPropertyValue('PairStartedTime'); }
	set PairStartedTime(newValue) { this.SetPropertyValue('PairStartedTime', newValue); }
	get LastSwitchTime() { return this.GetPropertyValue('LastSwitchTime'); }
	set LastSwitchTime(newValue) { this.SetPropertyValue('LastSwitchTime', newValue); }
	get LastSwitchReason() { return this.GetPropertyValue('LastSwitchReason'); }
	get Solution() { return this.GetPropertyValue('Solution'); }
	get Module() { return this.GetPropertyValue('Module'); }
	get TestMode() { return this.GetPropertyValue('TestMode'); }
	get OnlineConfig() { return this.GetPropertyValue('OnlineConfig'); }
	get ScriptClasses() { return this.GetPropertyValue('ScriptClasses'); }
	get ExecutionPath() { return this.GetPropertyValue('ExecutionPath'); }
	get Product() { return this.GetPropertyValue('Product'); }
	get LogObjectStatus() { return this.GetPropertyValue('LogObjectStatus'); }
	set LogObjectStatus(newValue) { this.SetPropertyValue('LogObjectStatus', newValue); }
	get TagPropertyCreated() { return this.GetPropertyValue('TagPropertyCreated'); }
	set TagPropertyCreated(newValue) { this.SetPropertyValue('TagPropertyCreated', newValue); }
	get IsSyncModuleConnected() { return this.GetPropertyValue('IsSyncModuleConnected'); }
	get LastInvalidSetValue() { return this.GetPropertyValue('LastInvalidSetValue'); }
	get SyncMarker() { return this.GetPropertyValue('SyncMarker'); }
	set SyncMarker(newValue) { this.SetPropertyValue('SyncMarker', newValue); }
	get CurrentTotalAssets() { return this.GetPropertyValue('CurrentTotalAssets'); }
	get Profile() { return this.GetPropertyValue('Profile'); }
	get ProfileName() { return this.GetPropertyValue('ProfileName'); }
	get SerialNumber() { return this.GetPropertyValue('SerialNumber'); }
	get ServerConnected() { return this.GetPropertyValue('ServerConnected'); }
	get LicenseMedia() { return this.GetPropertyValue('LicenseMedia'); }
	get ProductFamily() { return this.GetPropertyValue('ProductFamily'); }
	get ProductModel() { return this.GetPropertyValue('ProductModel'); }
	get LicenseType() { return this.GetPropertyValue('LicenseType'); }
	get DateCreated() { return this.GetPropertyValue('DateCreated'); }
	get DateModified() { return this.GetPropertyValue('DateModified'); }
	get ExpirationDate() { return this.GetPropertyValue('ExpirationDate'); }
	get AllowedWebClients() { return this.GetPropertyValue('AllowedWebClients'); }
	get AllowedRichClients() { return this.GetPropertyValue('AllowedRichClients'); }
	get AllowedTagElements() { return this.GetPropertyValue('AllowedTagElements'); }
	get AllowedDevices() { return this.GetPropertyValue('AllowedDevices'); }
	get AllowedRunInstances() { return this.GetPropertyValue('AllowedRunInstances'); }
	get AllowedEngineeringUsers() { return this.GetPropertyValue('AllowedEngineeringUsers'); }
	get ProductVersion() { return this.GetPropertyValue('ProductVersion'); }
	get AllowediOSClients() { return this.GetPropertyValue('AllowediOSClients'); }
	get ExtraNumber1() { return this.GetPropertyValue('ExtraNumber1'); }
	get ExtraNumber2() { return this.GetPropertyValue('ExtraNumber2'); }
	get AllowedWebViews() { return this.GetPropertyValue('AllowedWebViews'); }
	get AllowedProtocolsStandard() { return this.GetPropertyValue('AllowedProtocolsStandard'); }
	get AllowedProtocolsPremium() { return this.GetPropertyValue('AllowedProtocolsPremium'); }
	get AllowedPI() { return this.GetPropertyValue('AllowedPI'); }
	get IsAllowedTagElementsEqualCommPoints() { return this.GetPropertyValue('IsAllowedTagElementsEqualCommPoints'); }
	get Registered() { return this.GetPropertyValue('Registered'); }
	get ActivationCode() { return this.GetPropertyValue('ActivationCode'); }
	get SubscriptionType() { return this.GetPropertyValue('SubscriptionType'); }
	get SubscriptionExpiration() { return this.GetPropertyValue('SubscriptionExpiration'); }
	get AllowedRemoteLicenseClients() { return this.GetPropertyValue('AllowedRemoteLicenseClients'); }
	get RemoteLicenseServer() { return this.GetPropertyValue('RemoteLicenseServer'); }
	get Target() { return this.GetPropertyValue('Target'); }
	get IsPaused() { return this.GetPropertyValue('IsPaused'); }
	set IsPaused(newValue) { this.SetPropertyValue('IsPaused', newValue); }
	get StartStepCounter() { return this.GetPropertyValue('StartStepCounter'); }
	get StatusMessage() { return this.GetPropertyValue('StatusMessage'); }
	get ProductName() { return this.GetPropertyValue('ProductName'); }
	get Company() { return this.GetPropertyValue('Company'); }
	set Company(newValue) { this.SetPropertyValue('Company', newValue); }
	get VersionString() { return this.GetPropertyValue('VersionString'); }
	get SolutionName() { return this.GetPropertyValue('SolutionName'); }
	get SolutionPath() { return this.GetPropertyValue('SolutionPath'); }
	get CurrentBuild() { return this.GetPropertyValue('CurrentBuild'); }
	get TargetFramework() { return this.GetPropertyValue('TargetFramework'); }
	get SchemaVersion() { return this.GetPropertyValue('SchemaVersion'); }
	get VersionID() { return this.GetPropertyValue('VersionID'); }
	get Settings() { return this.GetPropertyValue('Settings'); }
	get AutoDuplicateQuoteEscape() { return this.GetPropertyValue('AutoDuplicateQuoteEscape'); }
	set AutoDuplicateQuoteEscape(newValue) { this.SetPropertyValue('AutoDuplicateQuoteEscape', newValue); }
	get LimitValuesMinMax() { return this.GetPropertyValue('LimitValuesMinMax'); }
	get ChildSolutions() { return this.GetPropertyValue('ChildSolutions'); }
	get PythonRuntimePath() { return this.GetPropertyValue('PythonRuntimePath'); }
	get HelpUrl() { return this.GetPropertyValue('HelpUrl'); }
	get Padding() { return this.GetPropertyValue('Padding'); }
	get SaveFileName() { return this.GetPropertyValue('SaveFileName'); }
	set SaveFileName(newValue) { this.SetPropertyValue('SaveFileName', newValue); }
	get Append() { return this.GetPropertyValue('Append'); }
	set Append(newValue) { this.SetPropertyValue('Append', newValue); }
	get ConfigContent() { return this.GetPropertyValue('ConfigContent'); }
	set ConfigContent(newValue) { this.SetPropertyValue('ConfigContent', newValue); }
	get SaveFormat() { return this.GetPropertyValue('SaveFormat'); }
	set SaveFormat(newValue) { this.SetPropertyValue('SaveFormat', newValue); }
	get IsSavingContent() { return this.GetPropertyValue('IsSavingContent'); }
	set IsSavingContent(newValue) { this.SetPropertyValue('IsSavingContent', newValue); }
	get DocumentClient() { return this.GetPropertyValue('DocumentClient'); }
	set DocumentClient(newValue) { this.SetPropertyValue('DocumentClient', newValue); }
	get SaveFileNameResolved() { return this.GetPropertyValue('SaveFileNameResolved'); }
	set SaveFileNameResolved(newValue) { this.SetPropertyValue('SaveFileNameResolved', newValue); }
	get OpenExecuted() { return this.GetPropertyValue('OpenExecuted'); }
	set OpenExecuted(newValue) { this.SetPropertyValue('OpenExecuted', newValue); }
	get UseDatasetAsyncContents() { return this.GetPropertyValue('UseDatasetAsyncContents'); }
	set UseDatasetAsyncContents(newValue) { this.SetPropertyValue('UseDatasetAsyncContents', newValue); }
	get SaveTrigger() { return this.GetPropertyValue('SaveTrigger'); }
	get Header() { return this.GetPropertyValue('Header'); }
	get Footer() { return this.GetPropertyValue('Footer'); }
	get Encoding() { return this.GetPropertyValue('Encoding'); }
	set Encoding(newValue) { this.SetPropertyValue('Encoding', newValue); }
	get DefaultURL() { return this.GetPropertyValue('DefaultURL'); }
	set DefaultURL(newValue) { this.SetPropertyValue('DefaultURL', newValue); }
	get DefaultURLClient() { return this.GetPropertyValue('DefaultURLClient'); }
	set DefaultURLClient(newValue) { this.SetPropertyValue('DefaultURLClient', newValue); }
	get DisableMultiThreading() { return this.GetPropertyValue('DisableMultiThreading'); }
	set DisableMultiThreading(newValue) { this.SetPropertyValue('DisableMultiThreading', newValue); }
	get Expression() { return this.GetPropertyValue('Expression'); }
	get Running() { return this.GetPropertyValue('Running'); }
	get ErrorMessage() { return this.GetPropertyValue('ErrorMessage'); }
	get LastRun() { return this.GetPropertyValue('LastRun'); }
	get LastDuration() { return this.GetPropertyValue('LastDuration'); }
	get Counter() { return this.GetPropertyValue('Counter'); }
	get Period() { return this.GetPropertyValue('Period'); }
	set Period(newValue) { this.SetPropertyValue('Period', newValue); }
	get StopExecutionOnError() { return this.GetPropertyValue('StopExecutionOnError'); }
	set StopExecutionOnError(newValue) { this.SetPropertyValue('StopExecutionOnError', newValue); }
	get PeakDuration() { return this.GetPropertyValue('PeakDuration'); }
	get PeakDateTime() { return this.GetPropertyValue('PeakDateTime'); }
	get Policy() { return this.GetPropertyValue('Policy'); }
	get Permission() { return this.GetPropertyValue('Permission'); }
	get User() { return this.GetPropertyValue('User'); }
	get RuntimeUser() { return this.GetPropertyValue('RuntimeUser'); }
	get WindowsUser() { return this.GetPropertyValue('WindowsUser'); }
	get Edit() { return this.GetPropertyValue('Edit'); }
	get Run() { return this.GetPropertyValue('Run'); }
	get Identification() { return this.GetPropertyValue('Identification'); }
	get Logon() { return this.GetPropertyValue('Logon'); }
	get ESign() { return this.GetPropertyValue('ESign'); }
	get Session() { return this.GetPropertyValue('Session'); }
	get SessionInactivityMinutes() { return this.GetPropertyValue('SessionInactivityMinutes'); }
	set SessionInactivityMinutes(newValue) { this.SetPropertyValue('SessionInactivityMinutes', newValue); }
	get SessionDurationHours() { return this.GetPropertyValue('SessionDurationHours'); }
	set SessionDurationHours(newValue) { this.SetPropertyValue('SessionDurationHours', newValue); }
	get BlockOnInvalidAttempt() { return this.GetPropertyValue('BlockOnInvalidAttempt'); }
	set BlockOnInvalidAttempt(newValue) { this.SetPropertyValue('BlockOnInvalidAttempt', newValue); }
	get MaxInvalidAttempts() { return this.GetPropertyValue('MaxInvalidAttempts'); }
	set MaxInvalidAttempts(newValue) { this.SetPropertyValue('MaxInvalidAttempts', newValue); }
	get AllowShareUser() { return this.GetPropertyValue('AllowShareUser'); }
	get UserNameMinLength() { return this.GetPropertyValue('UserNameMinLength'); }
	get BlockOnInvalidAttempts() { return this.GetPropertyValue('BlockOnInvalidAttempts'); }
	get BlockAging() { return this.GetPropertyValue('BlockAging'); }
	get ContactInfo() { return this.GetPropertyValue('ContactInfo'); }
	get PolicyName() { return this.GetPropertyValue('PolicyName'); }
	get Blocked() { return this.GetPropertyValue('Blocked'); }
	set Blocked(newValue) { this.SetPropertyValue('Blocked', newValue); }
	get Deleted() { return this.GetPropertyValue('Deleted'); }
	set Deleted(newValue) { this.SetPropertyValue('Deleted', newValue); }
	get Permissions() { return this.GetPropertyValue('Permissions'); }
	get PermissionsName() { return this.GetPropertyValue('PermissionsName'); }
	get RunPermissions() { return this.GetPropertyValue('RunPermissions'); }
	get Realm() { return this.GetPropertyValue('Realm'); }
	get Alias() { return this.GetPropertyValue('Alias'); }
	set Alias(newValue) { this.SetPropertyValue('Alias', newValue); }
	get UserGroup() { return this.GetPropertyValue('UserGroup'); }
	set UserGroup(newValue) { this.SetPropertyValue('UserGroup', newValue); }
	get InvalidAttempts() { return this.GetPropertyValue('InvalidAttempts'); }
	get LastBlockedUserUTC_Ticks() { return this.GetPropertyValue('LastBlockedUserUTC_Ticks'); }
	get Protocol() { return this.GetPropertyValue('Protocol'); }
	get Separators() { return this.GetPropertyValue('Separators'); }
	get CurrentStation() { return this.GetPropertyValue('CurrentStation'); }
	get ReadTime() { return this.GetPropertyValue('ReadTime'); }
	set ReadTime(newValue) { this.SetPropertyValue('ReadTime', newValue); }
	get WriteTime() { return this.GetPropertyValue('WriteTime'); }
	set WriteTime(newValue) { this.SetPropertyValue('WriteTime', newValue); }
	get BranchSeparator() { return this.GetPropertyValue('BranchSeparator'); }
	get AttributeSeparator() { return this.GetPropertyValue('AttributeSeparator'); }
	get DisableCheckInvalidAssets() { return this.GetPropertyValue('DisableCheckInvalidAssets'); }
	set DisableCheckInvalidAssets(newValue) { this.SetPropertyValue('DisableCheckInvalidAssets', newValue); }
	get ConnectionStatus() { return this.GetPropertyValue('ConnectionStatus'); }
	get IsHistorian() { return this.GetPropertyValue('IsHistorian'); }

	// END PROPERTIES

	// START METHODS

	ForceValue = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ForceValue', [p0]); }
	ToString = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ToString', []); }
	ToggleValue = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ToggleValue', []); }
	GetValueAsString = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetValueAsString', [p0]); }
	IsEnumeration = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'IsEnumeration', []); }
	GetEnumerationName = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetEnumerationName', []); }
	Update = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'Update', [p0]); }
	RemoveRow = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'RemoveRow', [p0]); }
	RemoveAll = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'RemoveAll', []); }
	GetRowsCount = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetRowsCount', []); }
	GetColumnsCount = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetColumnsCount', []); }
	GetJObject = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetJObject', []); }
	GetJArray = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetJArray', []); }
	DeserializeObject = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'DeserializeObject', []); }
	DeserializeObjectFromString = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'DeserializeObjectFromString', [p0]); }
	OpenLayout = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'OpenLayout', [p0, p1]); }
	Locale = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'Locale', [p0]); }
	OpenDisplay = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'OpenDisplay', [p0, p1]); }
	CloseDisplay = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'CloseDisplay', [p0]); }
	LogOnAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'LogOnAsync', [p0, p1]); }
	LogOn = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'LogOnAsync', [p0, p1]); }
	LogOnGuestAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'LogOnGuestAsync', []); }
	LogOnGuest = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'LogOnGuestAsync', []); }
	ChangeUserPasswordAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'ChangeUserPasswordAsync', [p0, p1, p2]); }
	ChangeUserPassword = async function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'ChangeUserPasswordAsync', [p0, p1, p2]); }
	PrintDisplay = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'PrintDisplay', [p0, p1]); }
	PrintLayout = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'PrintLayout', []); }
	OpenQuickNote = function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'OpenQuickNote', [p0, p1, p2, p3, p4]); }
	OpenDisplayAtIndex = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'OpenDisplayAtIndex', [p0, p1]); }
	SaveLayoutAsImageFile = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SaveLayoutAsImageFile', [p0]); }
	GetPasswordHintAsync = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'GetPasswordHintAsync', [p0]); }
	GetPasswordHint = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'GetPasswordHintAsync', [p0]); }
	OpenPreviousPage = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'OpenPreviousPage', []); }
	SwitchToStandby = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SwitchToStandby', []); }
	SetLocalization = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SetLocalization', [p0]); }
	IsDisplayOpen = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'IsDisplayOpen', [p0]); }
	PrintDisplayDefaultPrinter = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'PrintDisplayDefaultPrinter', [p0, p1]); }
	SaveDisplayAsImageFile = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SaveDisplayAsImageFile', [p0, p1]); }
	GetCursorX = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetCursorX', [p0]); }
	GetCursorY = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetCursorY', [p0]); }
	PrintLayoutDefaultPrinter = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'PrintLayoutDefaultPrinter', [p0]); }
	AddDisplayInCacheList = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'AddDisplayInCacheList', [p0]); }
	SetMainWindowSize = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SetMainWindowSize', [p0, p1]); }
	IsDisplayOpeningExecuted = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'IsDisplayOpeningExecuted', [p0]); }
	SaveScreenAsImageFile = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SaveScreenAsImageFile', [p0]); }
	PrintScreenDefaultPrinter = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'PrintScreenDefaultPrinter', [p0]); }
	NewPopup = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'NewPopup', [p0, p1]); }
	SetBlockedUserAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'SetBlockedUserAsync', [p0, p1]); }
	SetBlockedUser = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'SetBlockedUserAsync', [p0, p1]); }
	SetDeletedUserAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'SetDeletedUserAsync', [p0, p1]); }
	SetDeletedUser = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'SetDeletedUserAsync', [p0, p1]); }
	SaveDisplayAsPngFile = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SaveDisplayAsPngFile', [p0, p1]); }
	LoadSolutionVersion = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'LoadSolutionVersion', [p0]); }
	ShutdownCommand = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ShutdownCommand', []); }
	GetComputerIP = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetComputerIP', []); }
	RunAndSaveDiagnostics = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'RunAndSaveDiagnostics', [p0]); }
	GetClientConnections = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'GetClientConnectionsAsync', []); }
	GetClientConnectionsAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'GetClientConnectionsAsync', []); }
	GetAllConnections = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'GetAllConnectionsAsync', []); }
	GetAllConnectionsAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'GetAllConnectionsAsync', []); }
	CloseConnection = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'CloseConnectionAsync', [p0, p1]); }
	CloseConnectionAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'CloseConnectionAsync', [p0, p1]); }
	SaveToTextFile = function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___', p5 = '___Undefined___', p6 = '___Undefined___', p7 = '___Undefined___', p8 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SaveToTextFile', [p0, p1, p2, p3, p4, p5, p6, p7, p8]); }
	AckAllWithComments = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'AckAllWithCommentsAsync', [p0]); }
	AckAllWithCommentsAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'AckAllWithCommentsAsync', [p0, p1, p2]); }
	GetItemList = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetItemList', [p0]); }
	VerifyDBConnection = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'VerifyDBConnection', []); }
	ForceAcknowledge = function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___', p5 = '___Undefined___', p6 = '___Undefined___', p7 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ForceAcknowledge', [p0, p1, p2, p3, p4, p5, p6, p7]); }
	GetChildrenAreas = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetChildrenAreas', [p0]); }
	GetFilter = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetFilter', []); }
	GetObjectList = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetObjectList', []); }
	ForceTrigger = function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ForceTrigger', [p0, p1, p2, p3]); }
	DeleteSamples = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'DeleteSamples', [p0, p1]); }
	CopySettingsFromSourceDB = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'CopySettingsFromSourceDB', [p0]); }
	InitializeCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'InitializeCommandAsync', []); }
	LoadCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'LoadCommandAsync', []); }
	SaveCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'SaveCommandAsync', []); }
	DeleteCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'DeleteCommandAsync', []); }
	SelectCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'SelectCommandAsync', []); }
	NextCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'NextCommandAsync', []); }
	InsertCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'InsertCommandAsync', []); }
	UpdateCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'UpdateCommandAsync', []); }
	SelectCommandWithStatusAsync = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'SelectCommandWithStatusAsync', [p0]); }
	UpdateCommandWithStatusAsync = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'UpdateCommandWithStatusAsync', [p0]); }
	UpdateFromDataTableAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'UpdateFromDataTableAsync', [p0, p1]); }
	UpdateFromDataTableWithStatusAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'UpdateFromDataTableWithStatusAsync', [p0, p1, p2]); }
	ReplaceAllContentsAsync = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'ReplaceAllContentsAsync', [p0]); }
	ReplaceAllContentsWithStatusAsync = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'ReplaceAllContentsWithStatusAsync', [p0, p1]); }
	BeginSelectCommandAsync = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'BeginSelectCommandAsync', [p0]); }
	EndSelectCommand = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'EndSelectCommandAsync', [p0]); }
	ExecuteCommandAsync = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'ExecuteCommandAsync', []); }
	Start = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'Start', [p0]); }
	Stop = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'Stop', [p0]); }
	BeginStop = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'BeginStop', []); }
	ForceReadTrigger = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ForceReadTrigger', [p0]); }
	ForceWriteTrigger = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ForceWriteTrigger', [p0]); }
	Open = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'Open', []); }
	Close = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'Close', []); }
	OpenModal = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'OpenModal', []); }
	GetCustomPropertyValue = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetCustomPropertyValue', [p0, p1]); }
	SetCustomPropertyValue = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SetCustomPropertyValue', [p0, p1]); }
	RemoveAllCustomProperties = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'RemoveAllCustomProperties', []); }
	GetCustomPropertiesAsString = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetCustomPropertiesAsString', [p0]); }
	SetCustomProperties = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SetCustomProperties', [p0, p1]); }
	ForceRedundancyRefreshValues = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ForceRedundancyRefreshValues', []); }
	Trace = function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'Trace', [p0, p1, p2, p3, p4]); }
	GetExecutionFolder = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetExecutionFolder', []); }
	GetExecutionPath = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetExecutionPath', []); }
	GetTypeDefintion = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetTypeDefintion', [p0]); }
	GetSerialNumber = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetSerialNumber', []); }
	GetProductPath = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetProductPath', []); }
	OpenCommand = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'OpenCommand', []); }
	SaveCommandWithOrientationAsync = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'SaveCommandWithOrientationAsync', [p0]); }
	GetPageCount = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetPageCount', [p0]); }
	LoadCommandWithStatusAsync = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'LoadCommandWithStatusAsync', [p0]); }
	GetRequestAsync = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetRequestAsync', []); }
	GetRequestWithStatusAsync = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetRequestWithStatusAsync', [p0]); }
	BeginGetRequestAsync = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'BeginGetRequestAsync', [p0, p1]); }
	EndGetRequest = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'EndGetRequest', [p0, p1]); }
	PostRequestAsync = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'PostRequestAsync', []); }
	BeginPostRequestAsync = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'BeginPostRequestAsync', [p0, p1]); }
	EndPostRequest = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'EndPostRequest', [p0]); }
	GetTaskEventCount = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetTaskEventCount', []); }
	CreateEvent = function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'CreateEvent', [p0, p1, p2, p3]); }
	GetEvent = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetEvent', []); }
	AddRuntimeUser = async function (p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___', p5 = '___Undefined___', p6 = '___Undefined___', p7 = '___Undefined___', p8 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'AddRuntimeUserAsync', [p0, p1, p2, p3, p4, p5, p6, p7, p8]); }
	RemoveRuntimeUser = async function (p0 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'RemoveRuntimeUserAsync', [p0]); }
	GetListOfUserNames = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetListOfUserNames', []); }
	GetPasswordHint = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetPasswordHint', [p0]); }
	GetListOfPermissionNamesOfUsers = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetListOfPermissionNamesOfUsers', []); }
	GetListOfPredefinedUserNames = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetListOfPredefinedUserNames', []); }
	GetListOfRuntimeUserNames = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetListOfRuntimeUserNames', []); }
	GetListOfPermissionNamesOfPredefinedUsers = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetListOfPermissionNamesOfPredefinedUsers', []); }
	GetListOfPermissionNamesOfRuntimeUsers = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetListOfPermissionNamesOfRuntimeUsers', []); }
	ValidateUser = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'ValidateUserAsync', [p0, p1]); }
	NewRuntimeUser = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'NewRuntimeUserAsync', [p0, p1]); }
	UpdateRuntimeUser = async function (p0 = '___Undefined___', p1 = '___Undefined___') { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'UpdateRuntimeUserAsync', [p0, p1]); }
	GetUsers = async function () { return await DotNet.invokeMethodAsync('THtml5Client', 'ObjectMethodAsync', this.GetToken(), 'GetUsersAsync', []); }
	ReloadRuntimeUsers = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ReloadRuntimeUsers', []); }
	AddSessionPermission = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'AddSessionPermission', [p0]); }
	RemoveSessionPermission = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'RemoveSessionPermission', [p0]); }
	GetLocalTags = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetLocalTags', []); }
	GetGlobalTags = function () { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetGlobalTags', []); }
	GetObject = function (p0 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'GetObject', [p0]); }
	ForceActive = function (p0 = '___Undefined___', p1 = '___Undefined___') { return DotNet.invokeMethod('THtml5Client', 'ObjectMethod', this.GetToken(), 'ForceActive', [p0, p1]); }

	// END METHODS
 }

