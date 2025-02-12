from TK import TKGetObjectPropertyValue
from TK import TKSetObjectPropertyValue
from TK import TKGetRunObjName
from TK import TKGetRunObjDescription
from TK import TKObjectMethod

class TKListObj():

	def __init__(self, type=-1, id=-1, parent=None, ref_type=-1, array_index=-1):
		self.parent = parent
		self.type = type
		self.id = id
		self.ref_type = ref_type
		self.array_index = array_index
		self.runtime_objects = []

	def GetObj(self, type, id, ref_type=-1):
		while len(self.runtime_objects) <= id:
			self.runtime_objects.append(None)
		if self.runtime_objects[id] is None:
			str_repr = '';
			if self.parent is not None:
				str_repr = self._calculate_str_representation()
			self.runtime_objects[id] = TKListObj(type, id, str_repr, ref_type, -1)
		return self.runtime_objects[id]

	def _calculate_str_representation(self):
		str_repr = '' if self.parent is None else self.parent
		if str_repr:
			str_repr += '.'
		str_repr += f'@{self.type}:{self.id}'
		if self.ref_type > 0:
			str_repr += f':{self.ref_type}'
		if self.array_index >= 0:
			str_repr += f'[{self.array_index}]'
		return str_repr

	def GetElement(self, index):
		if self.id >= len(self.runtime_objects) or self.runtime_objects[self.id] is None:
			self.runtime_objects.extend([None] * (self.id - len(self.runtime_objects) + 1))
			self.runtime_objects[self.id] = []
		while len(self.runtime_objects[self.id]) <= index:
			self.runtime_objects[self.id].append(None)
		if self.runtime_objects[self.id][index] is None:
			self.runtime_objects[self.id][index] = TKListObj(self.type, self.id, self.parent, self.ref_type, index)
		return self.runtime_objects[self.id][index]

	def GetToken(self):
		str_repr = '' if self.parent is None else self.parent
		if str_repr:
			str_repr += '.'
		str_repr += f'@{self.type}:{self.id}'
		if self.ref_type > 0:
			str_repr += f':{self.ref_type}'
		if self.array_index >= 0:
			str_repr += f'[{self.array_index}]'
		return str_repr

	def GetPropertyValue(self, property):
		return TKGetObjectPropertyValue(self.GetToken(), property)

	def SetPropertyValue(self, property, newValue):
		return TKSetObjectPropertyValue(self.GetToken(), property, newValue)

	def GetName(self):
		return TKGetRunObjName(self.GetToken())
	
	def GetDescription(self):
		return TKGetRunObjDescription(self.GetToken())

	# START PROPERTIES

	@property
	def Value(self):
		return self.GetPropertyValue('Value')
	@Value.setter
	def Value(self, newValue):
		self.SetPropertyValue('Value', newValue)

	@property
	def Timestamp(self):
		return self.GetPropertyValue('Timestamp')
	@Timestamp.setter
	def Timestamp(self, newValue):
		self.SetPropertyValue('Timestamp', newValue)

	@property
	def Quality(self):
		return self.GetPropertyValue('Quality')
	@Quality.setter
	def Quality(self, newValue):
		self.SetPropertyValue('Quality', newValue)

	@property
	def Link(self):
		return self.GetPropertyValue('Link')
	@Link.setter
	def Link(self, newValue):
		self.SetPropertyValue('Link', newValue)

	@property
	def Units(self):
		return self.GetPropertyValue('Units')
	@Units.setter
	def Units(self, newValue):
		self.SetPropertyValue('Units', newValue)

	@property
	def Format(self):
		return self.GetPropertyValue('Format')
	@Format.setter
	def Format(self, newValue):
		self.SetPropertyValue('Format', newValue)

	@property
	def Retentive(self):
		return self.GetPropertyValue('Retentive')

	@property
	def Visibility(self):
		return self.GetPropertyValue('Visibility')

	@property
	def Domain(self):
		return self.GetPropertyValue('Domain')

	@property
	def Locked(self):
		return self.GetPropertyValue('Locked')
	@Locked.setter
	def Locked(self, newValue):
		self.SetPropertyValue('Locked', newValue)

	@property
	def LockValue(self):
		return self.GetPropertyValue('LockValue')
	@LockValue.setter
	def LockValue(self, newValue):
		self.SetPropertyValue('LockValue', newValue)

	@property
	def ValueType(self):
		return self.GetPropertyValue('ValueType')

	@property
	def Historian(self):
		return self.GetPropertyValue('Historian')

	@property
	def DisplayValue(self):
		return self.GetPropertyValue('DisplayValue')
	@DisplayValue.setter
	def DisplayValue(self, newValue):
		self.SetPropertyValue('DisplayValue', newValue)

	@property
	def AlarmState(self):
		return self.GetPropertyValue('AlarmState')

	@property
	def AckRequired(self):
		return self.GetPropertyValue('AckRequired')

	@property
	def Acked(self):
		return self.GetPropertyValue('Acked')
	@Acked.setter
	def Acked(self, newValue):
		self.SetPropertyValue('Acked', newValue)

	@property
	def AlarmDisable(self):
		return self.GetPropertyValue('AlarmDisable')
	@AlarmDisable.setter
	def AlarmDisable(self, newValue):
		self.SetPropertyValue('AlarmDisable', newValue)

	@property
	def Disable(self):
		return self.GetPropertyValue('Disable')
	@Disable.setter
	def Disable(self, newValue):
		self.SetPropertyValue('Disable', newValue)

	@property
	def State(self):
		return self.GetPropertyValue('State')

	@property
	def Changed(self):
		return self.GetPropertyValue('Changed')

	@property
	def RaiseAllChanges(self):
		return self.GetPropertyValue('RaiseAllChanges')
	@RaiseAllChanges.setter
	def RaiseAllChanges(self, newValue):
		self.SetPropertyValue('RaiseAllChanges', newValue)

	@property
	def FirstDescription(self):
		return self.GetPropertyValue('FirstDescription')

	@property
	def Description(self):
		return self.GetPropertyValue('Description')

	@property
	def FullDescription(self):
		return self.GetPropertyValue('FullDescription')

	@property
	def ArraySize(self):
		return self.GetPropertyValue('ArraySize')

	@property
	def LastArrayIndex(self):
		return self.GetPropertyValue('LastArrayIndex')

	@property
	def DisplayText(self):
		return self.GetPropertyValue('DisplayText')
	@DisplayText.setter
	def DisplayText(self, newValue):
		self.SetPropertyValue('DisplayText', newValue)

	@property
	def Level(self):
		return self.GetPropertyValue('Level')

	@property
	def Category(self):
		return self.GetPropertyValue('Category')

	@property
	def ValueAsString(self):
		return self.GetPropertyValue('ValueAsString')
	@ValueAsString.setter
	def ValueAsString(self, newValue):
		self.SetPropertyValue('ValueAsString', newValue)

	@property
	def EstimatedValue(self):
		return self.GetPropertyValue('EstimatedValue')
	@EstimatedValue.setter
	def EstimatedValue(self, newValue):
		self.SetPropertyValue('EstimatedValue', newValue)

	@property
	def DevicePoint(self):
		return self.GetPropertyValue('DevicePoint')

	@property
	def RelativeAddress(self):
		return self.GetPropertyValue('RelativeAddress')

	@property
	def XmlAttributes(self):
		return self.GetPropertyValue('XmlAttributes')
	@XmlAttributes.setter
	def XmlAttributes(self, newValue):
		self.SetPropertyValue('XmlAttributes', newValue)

	@property
	def HistorianValue(self):
		return self.GetPropertyValue('HistorianValue')

	@property
	def HasHistorian(self):
		return self.GetPropertyValue('HasHistorian')

	@property
	def DeviceWriteDelta(self):
		return self.GetPropertyValue('DeviceWriteDelta')
	@DeviceWriteDelta.setter
	def DeviceWriteDelta(self, newValue):
		self.SetPropertyValue('DeviceWriteDelta', newValue)

	@property
	def CommandValue(self):
		return self.GetPropertyValue('CommandValue')
	@CommandValue.setter
	def CommandValue(self, newValue):
		self.SetPropertyValue('CommandValue', newValue)

	@property
	def ReadSecurity(self):
		return self.GetPropertyValue('ReadSecurity')
	@ReadSecurity.setter
	def ReadSecurity(self, newValue):
		self.SetPropertyValue('ReadSecurity', newValue)

	@property
	def WriteSecurity(self):
		return self.GetPropertyValue('WriteSecurity')
	@WriteSecurity.setter
	def WriteSecurity(self, newValue):
		self.SetPropertyValue('WriteSecurity', newValue)

	@property
	def AlarmSuspend(self):
		return self.GetPropertyValue('AlarmSuspend')
	@AlarmSuspend.setter
	def AlarmSuspend(self, newValue):
		self.SetPropertyValue('AlarmSuspend', newValue)

	@property
	def PreviousValue(self):
		return self.GetPropertyValue('PreviousValue')

	@property
	def PrefixAlarmMessage(self):
		return self.GetPropertyValue('PrefixAlarmMessage')
	@PrefixAlarmMessage.setter
	def PrefixAlarmMessage(self, newValue):
		self.SetPropertyValue('PrefixAlarmMessage', newValue)

	@property
	def Text1(self):
		return self.GetPropertyValue('Text1')
	@Text1.setter
	def Text1(self, newValue):
		self.SetPropertyValue('Text1', newValue)

	@property
	def Text2(self):
		return self.GetPropertyValue('Text2')
	@Text2.setter
	def Text2(self, newValue):
		self.SetPropertyValue('Text2', newValue)

	@property
	def AlarmPriorityEnum(self):
		return self.GetPropertyValue('AlarmPriorityEnum')
	@AlarmPriorityEnum.setter
	def AlarmPriorityEnum(self, newValue):
		self.SetPropertyValue('AlarmPriorityEnum', newValue)

	@property
	def Path(self):
		return self.GetPropertyValue('Path')

	@property
	def Enumeration(self):
		return self.GetPropertyValue('Enumeration')

	@property
	def DefaultSymbol(self):
		return self.GetPropertyValue('DefaultSymbol')

	@property
	def ActiveColor(self):
		return self.GetPropertyValue('ActiveColor')

	@property
	def InactiveColor(self):
		return self.GetPropertyValue('InactiveColor')

	@property
	def IsJArray(self):
		return self.GetPropertyValue('IsJArray')

	@property
	def Min(self):
		return self.GetPropertyValue('Min')
	@Min.setter
	def Min(self, newValue):
		self.SetPropertyValue('Min', newValue)

	@property
	def Max(self):
		return self.GetPropertyValue('Max')
	@Max.setter
	def Max(self, newValue):
		self.SetPropertyValue('Max', newValue)

	@property
	def StartValue(self):
		return self.GetPropertyValue('StartValue')
	@StartValue.setter
	def StartValue(self, newValue):
		self.SetPropertyValue('StartValue', newValue)

	@property
	def Deadband(self):
		return self.GetPropertyValue('Deadband')
	@Deadband.setter
	def Deadband(self, newValue):
		self.SetPropertyValue('Deadband', newValue)

	@property
	def DisplayUnits(self):
		return self.GetPropertyValue('DisplayUnits')

	@property
	def DisplayUnitsDiv(self):
		return self.GetPropertyValue('DisplayUnitsDiv')

	@property
	def DisplayUnitsAdd(self):
		return self.GetPropertyValue('DisplayUnitsAdd')

	@property
	def DisplayMin(self):
		return self.GetPropertyValue('DisplayMin')
	@DisplayMin.setter
	def DisplayMin(self, newValue):
		self.SetPropertyValue('DisplayMin', newValue)

	@property
	def DisplayMax(self):
		return self.GetPropertyValue('DisplayMax')
	@DisplayMax.setter
	def DisplayMax(self, newValue):
		self.SetPropertyValue('DisplayMax', newValue)

	@property
	def Bit0(self):
		return self.GetPropertyValue('Bit0')
	@Bit0.setter
	def Bit0(self, newValue):
		self.SetPropertyValue('Bit0', newValue)

	@property
	def Bit1(self):
		return self.GetPropertyValue('Bit1')
	@Bit1.setter
	def Bit1(self, newValue):
		self.SetPropertyValue('Bit1', newValue)

	@property
	def Bit2(self):
		return self.GetPropertyValue('Bit2')
	@Bit2.setter
	def Bit2(self, newValue):
		self.SetPropertyValue('Bit2', newValue)

	@property
	def Bit3(self):
		return self.GetPropertyValue('Bit3')
	@Bit3.setter
	def Bit3(self, newValue):
		self.SetPropertyValue('Bit3', newValue)

	@property
	def Bit4(self):
		return self.GetPropertyValue('Bit4')
	@Bit4.setter
	def Bit4(self, newValue):
		self.SetPropertyValue('Bit4', newValue)

	@property
	def Bit5(self):
		return self.GetPropertyValue('Bit5')
	@Bit5.setter
	def Bit5(self, newValue):
		self.SetPropertyValue('Bit5', newValue)

	@property
	def Bit6(self):
		return self.GetPropertyValue('Bit6')
	@Bit6.setter
	def Bit6(self, newValue):
		self.SetPropertyValue('Bit6', newValue)

	@property
	def Bit7(self):
		return self.GetPropertyValue('Bit7')
	@Bit7.setter
	def Bit7(self, newValue):
		self.SetPropertyValue('Bit7', newValue)

	@property
	def Bit8(self):
		return self.GetPropertyValue('Bit8')
	@Bit8.setter
	def Bit8(self, newValue):
		self.SetPropertyValue('Bit8', newValue)

	@property
	def Bit9(self):
		return self.GetPropertyValue('Bit9')
	@Bit9.setter
	def Bit9(self, newValue):
		self.SetPropertyValue('Bit9', newValue)

	@property
	def Bit10(self):
		return self.GetPropertyValue('Bit10')
	@Bit10.setter
	def Bit10(self, newValue):
		self.SetPropertyValue('Bit10', newValue)

	@property
	def Bit11(self):
		return self.GetPropertyValue('Bit11')
	@Bit11.setter
	def Bit11(self, newValue):
		self.SetPropertyValue('Bit11', newValue)

	@property
	def Bit12(self):
		return self.GetPropertyValue('Bit12')
	@Bit12.setter
	def Bit12(self, newValue):
		self.SetPropertyValue('Bit12', newValue)

	@property
	def Bit13(self):
		return self.GetPropertyValue('Bit13')
	@Bit13.setter
	def Bit13(self, newValue):
		self.SetPropertyValue('Bit13', newValue)

	@property
	def Bit14(self):
		return self.GetPropertyValue('Bit14')
	@Bit14.setter
	def Bit14(self, newValue):
		self.SetPropertyValue('Bit14', newValue)

	@property
	def Bit15(self):
		return self.GetPropertyValue('Bit15')
	@Bit15.setter
	def Bit15(self, newValue):
		self.SetPropertyValue('Bit15', newValue)

	@property
	def Bit16(self):
		return self.GetPropertyValue('Bit16')
	@Bit16.setter
	def Bit16(self, newValue):
		self.SetPropertyValue('Bit16', newValue)

	@property
	def Bit17(self):
		return self.GetPropertyValue('Bit17')
	@Bit17.setter
	def Bit17(self, newValue):
		self.SetPropertyValue('Bit17', newValue)

	@property
	def Bit18(self):
		return self.GetPropertyValue('Bit18')
	@Bit18.setter
	def Bit18(self, newValue):
		self.SetPropertyValue('Bit18', newValue)

	@property
	def Bit19(self):
		return self.GetPropertyValue('Bit19')
	@Bit19.setter
	def Bit19(self, newValue):
		self.SetPropertyValue('Bit19', newValue)

	@property
	def Bit20(self):
		return self.GetPropertyValue('Bit20')
	@Bit20.setter
	def Bit20(self, newValue):
		self.SetPropertyValue('Bit20', newValue)

	@property
	def Bit21(self):
		return self.GetPropertyValue('Bit21')
	@Bit21.setter
	def Bit21(self, newValue):
		self.SetPropertyValue('Bit21', newValue)

	@property
	def Bit22(self):
		return self.GetPropertyValue('Bit22')
	@Bit22.setter
	def Bit22(self, newValue):
		self.SetPropertyValue('Bit22', newValue)

	@property
	def Bit23(self):
		return self.GetPropertyValue('Bit23')
	@Bit23.setter
	def Bit23(self, newValue):
		self.SetPropertyValue('Bit23', newValue)

	@property
	def Bit24(self):
		return self.GetPropertyValue('Bit24')
	@Bit24.setter
	def Bit24(self, newValue):
		self.SetPropertyValue('Bit24', newValue)

	@property
	def Bit25(self):
		return self.GetPropertyValue('Bit25')
	@Bit25.setter
	def Bit25(self, newValue):
		self.SetPropertyValue('Bit25', newValue)

	@property
	def Bit26(self):
		return self.GetPropertyValue('Bit26')
	@Bit26.setter
	def Bit26(self, newValue):
		self.SetPropertyValue('Bit26', newValue)

	@property
	def Bit27(self):
		return self.GetPropertyValue('Bit27')
	@Bit27.setter
	def Bit27(self, newValue):
		self.SetPropertyValue('Bit27', newValue)

	@property
	def Bit28(self):
		return self.GetPropertyValue('Bit28')
	@Bit28.setter
	def Bit28(self, newValue):
		self.SetPropertyValue('Bit28', newValue)

	@property
	def Bit29(self):
		return self.GetPropertyValue('Bit29')
	@Bit29.setter
	def Bit29(self, newValue):
		self.SetPropertyValue('Bit29', newValue)

	@property
	def Bit30(self):
		return self.GetPropertyValue('Bit30')
	@Bit30.setter
	def Bit30(self, newValue):
		self.SetPropertyValue('Bit30', newValue)

	@property
	def Bit31(self):
		return self.GetPropertyValue('Bit31')
	@Bit31.setter
	def Bit31(self, newValue):
		self.SetPropertyValue('Bit31', newValue)

	@property
	def ScaleMin(self):
		return self.GetPropertyValue('ScaleMin')
	@ScaleMin.setter
	def ScaleMin(self, newValue):
		self.SetPropertyValue('ScaleMin', newValue)

	@property
	def ScaleMax(self):
		return self.GetPropertyValue('ScaleMax')
	@ScaleMax.setter
	def ScaleMax(self, newValue):
		self.SetPropertyValue('ScaleMax', newValue)

	@property
	def UtcDateTime(self):
		return self.GetPropertyValue('UtcDateTime')
	@UtcDateTime.setter
	def UtcDateTime(self, newValue):
		self.SetPropertyValue('UtcDateTime', newValue)

	@property
	def LocalDateTime(self):
		return self.GetPropertyValue('LocalDateTime')
	@LocalDateTime.setter
	def LocalDateTime(self, newValue):
		self.SetPropertyValue('LocalDateTime', newValue)

	@property
	def Model(self):
		return self.GetPropertyValue('Model')

	@property
	def Trigger(self):
		return self.GetPropertyValue('Trigger')
	@Trigger.setter
	def Trigger(self, newValue):
		self.SetPropertyValue('Trigger', newValue)

	@property
	def Interval(self):
		return self.GetPropertyValue('Interval')
	@Interval.setter
	def Interval(self, newValue):
		self.SetPropertyValue('Interval', newValue)

	@property
	def Table(self):
		return self.GetPropertyValue('Table')

	@property
	def OverwriteOnUpdate(self):
		return self.GetPropertyValue('OverwriteOnUpdate')
	@OverwriteOnUpdate.setter
	def OverwriteOnUpdate(self, newValue):
		self.SetPropertyValue('OverwriteOnUpdate', newValue)

	@property
	def TotalHours(self):
		return self.GetPropertyValue('TotalHours')
	@TotalHours.setter
	def TotalHours(self, newValue):
		self.SetPropertyValue('TotalHours', newValue)

	@property
	def Bit32(self):
		return self.GetPropertyValue('Bit32')
	@Bit32.setter
	def Bit32(self, newValue):
		self.SetPropertyValue('Bit32', newValue)

	@property
	def Bit33(self):
		return self.GetPropertyValue('Bit33')
	@Bit33.setter
	def Bit33(self, newValue):
		self.SetPropertyValue('Bit33', newValue)

	@property
	def Bit34(self):
		return self.GetPropertyValue('Bit34')
	@Bit34.setter
	def Bit34(self, newValue):
		self.SetPropertyValue('Bit34', newValue)

	@property
	def Bit35(self):
		return self.GetPropertyValue('Bit35')
	@Bit35.setter
	def Bit35(self, newValue):
		self.SetPropertyValue('Bit35', newValue)

	@property
	def Bit36(self):
		return self.GetPropertyValue('Bit36')
	@Bit36.setter
	def Bit36(self, newValue):
		self.SetPropertyValue('Bit36', newValue)

	@property
	def Bit37(self):
		return self.GetPropertyValue('Bit37')
	@Bit37.setter
	def Bit37(self, newValue):
		self.SetPropertyValue('Bit37', newValue)

	@property
	def Bit38(self):
		return self.GetPropertyValue('Bit38')
	@Bit38.setter
	def Bit38(self, newValue):
		self.SetPropertyValue('Bit38', newValue)

	@property
	def Bit39(self):
		return self.GetPropertyValue('Bit39')
	@Bit39.setter
	def Bit39(self, newValue):
		self.SetPropertyValue('Bit39', newValue)

	@property
	def Bit40(self):
		return self.GetPropertyValue('Bit40')
	@Bit40.setter
	def Bit40(self, newValue):
		self.SetPropertyValue('Bit40', newValue)

	@property
	def Bit41(self):
		return self.GetPropertyValue('Bit41')
	@Bit41.setter
	def Bit41(self, newValue):
		self.SetPropertyValue('Bit41', newValue)

	@property
	def Bit42(self):
		return self.GetPropertyValue('Bit42')
	@Bit42.setter
	def Bit42(self, newValue):
		self.SetPropertyValue('Bit42', newValue)

	@property
	def Bit43(self):
		return self.GetPropertyValue('Bit43')
	@Bit43.setter
	def Bit43(self, newValue):
		self.SetPropertyValue('Bit43', newValue)

	@property
	def Bit44(self):
		return self.GetPropertyValue('Bit44')
	@Bit44.setter
	def Bit44(self, newValue):
		self.SetPropertyValue('Bit44', newValue)

	@property
	def Bit45(self):
		return self.GetPropertyValue('Bit45')
	@Bit45.setter
	def Bit45(self, newValue):
		self.SetPropertyValue('Bit45', newValue)

	@property
	def Bit46(self):
		return self.GetPropertyValue('Bit46')
	@Bit46.setter
	def Bit46(self, newValue):
		self.SetPropertyValue('Bit46', newValue)

	@property
	def Bit47(self):
		return self.GetPropertyValue('Bit47')
	@Bit47.setter
	def Bit47(self, newValue):
		self.SetPropertyValue('Bit47', newValue)

	@property
	def Bit48(self):
		return self.GetPropertyValue('Bit48')
	@Bit48.setter
	def Bit48(self, newValue):
		self.SetPropertyValue('Bit48', newValue)

	@property
	def Bit49(self):
		return self.GetPropertyValue('Bit49')
	@Bit49.setter
	def Bit49(self, newValue):
		self.SetPropertyValue('Bit49', newValue)

	@property
	def Bit50(self):
		return self.GetPropertyValue('Bit50')
	@Bit50.setter
	def Bit50(self, newValue):
		self.SetPropertyValue('Bit50', newValue)

	@property
	def Bit51(self):
		return self.GetPropertyValue('Bit51')
	@Bit51.setter
	def Bit51(self, newValue):
		self.SetPropertyValue('Bit51', newValue)

	@property
	def Bit52(self):
		return self.GetPropertyValue('Bit52')
	@Bit52.setter
	def Bit52(self, newValue):
		self.SetPropertyValue('Bit52', newValue)

	@property
	def Bit53(self):
		return self.GetPropertyValue('Bit53')
	@Bit53.setter
	def Bit53(self, newValue):
		self.SetPropertyValue('Bit53', newValue)

	@property
	def Bit54(self):
		return self.GetPropertyValue('Bit54')
	@Bit54.setter
	def Bit54(self, newValue):
		self.SetPropertyValue('Bit54', newValue)

	@property
	def Bit55(self):
		return self.GetPropertyValue('Bit55')
	@Bit55.setter
	def Bit55(self, newValue):
		self.SetPropertyValue('Bit55', newValue)

	@property
	def Bit56(self):
		return self.GetPropertyValue('Bit56')
	@Bit56.setter
	def Bit56(self, newValue):
		self.SetPropertyValue('Bit56', newValue)

	@property
	def Bit57(self):
		return self.GetPropertyValue('Bit57')
	@Bit57.setter
	def Bit57(self, newValue):
		self.SetPropertyValue('Bit57', newValue)

	@property
	def Bit58(self):
		return self.GetPropertyValue('Bit58')
	@Bit58.setter
	def Bit58(self, newValue):
		self.SetPropertyValue('Bit58', newValue)

	@property
	def Bit59(self):
		return self.GetPropertyValue('Bit59')
	@Bit59.setter
	def Bit59(self, newValue):
		self.SetPropertyValue('Bit59', newValue)

	@property
	def Bit60(self):
		return self.GetPropertyValue('Bit60')
	@Bit60.setter
	def Bit60(self, newValue):
		self.SetPropertyValue('Bit60', newValue)

	@property
	def Bit61(self):
		return self.GetPropertyValue('Bit61')
	@Bit61.setter
	def Bit61(self, newValue):
		self.SetPropertyValue('Bit61', newValue)

	@property
	def Bit62(self):
		return self.GetPropertyValue('Bit62')
	@Bit62.setter
	def Bit62(self, newValue):
		self.SetPropertyValue('Bit62', newValue)

	@property
	def Bit63(self):
		return self.GetPropertyValue('Bit63')
	@Bit63.setter
	def Bit63(self, newValue):
		self.SetPropertyValue('Bit63', newValue)

	@property
	def Now(self):
		return self.GetPropertyValue('Now')

	@property
	def UtcNow(self):
		return self.GetPropertyValue('UtcNow')

	@property
	def Date(self):
		return self.GetPropertyValue('Date')

	@property
	def Year(self):
		return self.GetPropertyValue('Year')

	@property
	def Month(self):
		return self.GetPropertyValue('Month')

	@property
	def Day(self):
		return self.GetPropertyValue('Day')

	@property
	def DayOfWeek(self):
		return self.GetPropertyValue('DayOfWeek')

	@property
	def DayOfYear(self):
		return self.GetPropertyValue('DayOfYear')

	@property
	def Tomorrow(self):
		return self.GetPropertyValue('Tomorrow')

	@property
	def Yesterday(self):
		return self.GetPropertyValue('Yesterday')

	@property
	def Ticks(self):
		return self.GetPropertyValue('Ticks')

	@property
	def Time(self):
		return self.GetPropertyValue('Time')

	@property
	def Hour(self):
		return self.GetPropertyValue('Hour')

	@property
	def Minute(self):
		return self.GetPropertyValue('Minute')

	@property
	def Second(self):
		return self.GetPropertyValue('Second')

	@property
	def Millisecond(self):
		return self.GetPropertyValue('Millisecond')

	@property
	def BlinkSlow(self):
		return self.GetPropertyValue('BlinkSlow')

	@property
	def BlinkFast(self):
		return self.GetPropertyValue('BlinkFast')

	@property
	def Shutdown(self):
		return self.GetPropertyValue('Shutdown')
	@Shutdown.setter
	def Shutdown(self, newValue):
		self.SetPropertyValue('Shutdown', newValue)

	@property
	def Startup(self):
		return self.GetPropertyValue('Startup')

	@property
	def CultureInfo(self):
		return self.GetPropertyValue('CultureInfo')
	@CultureInfo.setter
	def CultureInfo(self, newValue):
		self.SetPropertyValue('CultureInfo', newValue)

	@property
	def CurrentUser(self):
		return self.GetPropertyValue('CurrentUser')

	@property
	def Localization(self):
		return self.GetPropertyValue('Localization')
	@Localization.setter
	def Localization(self, newValue):
		self.SetPropertyValue('Localization', newValue)

	@property
	def SelectedPage(self):
		return self.GetPropertyValue('SelectedPage')
	@SelectedPage.setter
	def SelectedPage(self, newValue):
		self.SetPropertyValue('SelectedPage', newValue)

	@property
	def InputUserName(self):
		return self.GetPropertyValue('InputUserName')
	@InputUserName.setter
	def InputUserName(self, newValue):
		self.SetPropertyValue('InputUserName', newValue)

	@property
	def UserName(self):
		return self.GetPropertyValue('UserName')

	@property
	def ComputerIP(self):
		return self.GetPropertyValue('ComputerIP')

	@property
	def ComputerName(self):
		return self.GetPropertyValue('ComputerName')

	@property
	def LayoutName(self):
		return self.GetPropertyValue('LayoutName')

	@property
	def CurrentPage(self):
		return self.GetPropertyValue('CurrentPage')

	@property
	def AlarmBeepOff(self):
		return self.GetPropertyValue('AlarmBeepOff')
	@AlarmBeepOff.setter
	def AlarmBeepOff(self, newValue):
		self.SetPropertyValue('AlarmBeepOff', newValue)

	@property
	def TimeMs(self):
		return self.GetPropertyValue('TimeMs')

	@property
	def SimulationAnalog(self):
		return self.GetPropertyValue('SimulationAnalog')

	@property
	def SimulationDigital(self):
		return self.GetPropertyValue('SimulationDigital')

	@property
	def PreviousPage(self):
		return self.GetPropertyValue('PreviousPage')

	@property
	def DateTime(self):
		return self.GetPropertyValue('DateTime')

	@property
	def IsWebBrowser(self):
		return self.GetPropertyValue('IsWebBrowser')

	@property
	def OnScreenKeyboard(self):
		return self.GetPropertyValue('OnScreenKeyboard')
	@OnScreenKeyboard.setter
	def OnScreenKeyboard(self, newValue):
		self.SetPropertyValue('OnScreenKeyboard', newValue)

	@property
	def SimulationDouble(self):
		return self.GetPropertyValue('SimulationDouble')

	@property
	def ServerHttpAddress(self):
		return self.GetPropertyValue('ServerHttpAddress')

	@property
	def Uid(self):
		return self.GetPropertyValue('Uid')
	@Uid.setter
	def Uid(self, newValue):
		self.SetPropertyValue('Uid', newValue)

	@property
	def TimeSpan(self):
		return self.GetPropertyValue('TimeSpan')

	@property
	def LogonDateTime(self):
		return self.GetPropertyValue('LogonDateTime')

	@property
	def UserInactivity(self):
		return self.GetPropertyValue('UserInactivity')

	@property
	def IsConnected(self):
		return self.GetPropertyValue('IsConnected')
	@IsConnected.setter
	def IsConnected(self, newValue):
		self.SetPropertyValue('IsConnected', newValue)

	@property
	def PreviousLayout(self):
		return self.GetPropertyValue('PreviousLayout')

	@property
	def RunAlwaysOnTop(self):
		return self.GetPropertyValue('RunAlwaysOnTop')
	@RunAlwaysOnTop.setter
	def RunAlwaysOnTop(self, newValue):
		self.SetPropertyValue('RunAlwaysOnTop', newValue)

	@property
	def StatusBarVisibleOnIOS(self):
		return self.GetPropertyValue('StatusBarVisibleOnIOS')
	@StatusBarVisibleOnIOS.setter
	def StatusBarVisibleOnIOS(self, newValue):
		self.SetPropertyValue('StatusBarVisibleOnIOS', newValue)

	@property
	def IsSmartDevice(self):
		return self.GetPropertyValue('IsSmartDevice')

	@property
	def IsBackButtonVisibleOnIOS(self):
		return self.GetPropertyValue('IsBackButtonVisibleOnIOS')
	@IsBackButtonVisibleOnIOS.setter
	def IsBackButtonVisibleOnIOS(self, newValue):
		self.SetPropertyValue('IsBackButtonVisibleOnIOS', newValue)

	@property
	def ConfigurationChanged(self):
		return self.GetPropertyValue('ConfigurationChanged')
	@ConfigurationChanged.setter
	def ConfigurationChanged(self, newValue):
		self.SetPropertyValue('ConfigurationChanged', newValue)

	@property
	def IsStarted(self):
		return self.GetPropertyValue('IsStarted')

	@property
	def StartCounter(self):
		return self.GetPropertyValue('StartCounter')

	@property
	def TooltipOptions(self):
		return self.GetPropertyValue('TooltipOptions')
	@TooltipOptions.setter
	def TooltipOptions(self, newValue):
		self.SetPropertyValue('TooltipOptions', newValue)

	@property
	def AutoScaleMargin(self):
		return self.GetPropertyValue('AutoScaleMargin')
	@AutoScaleMargin.setter
	def AutoScaleMargin(self, newValue):
		self.SetPropertyValue('AutoScaleMargin', newValue)

	@property
	def IsLocal(self):
		return self.GetPropertyValue('IsLocal')

	@property
	def IsRemote(self):
		return self.GetPropertyValue('IsRemote')

	@property
	def ReadOnly(self):
		return self.GetPropertyValue('ReadOnly')
	@ReadOnly.setter
	def ReadOnly(self, newValue):
		self.SetPropertyValue('ReadOnly', newValue)

	@property
	def BackPage(self):
		return self.GetPropertyValue('BackPage')
	@BackPage.setter
	def BackPage(self, newValue):
		self.SetPropertyValue('BackPage', newValue)

	@property
	def NextPage(self):
		return self.GetPropertyValue('NextPage')
	@NextPage.setter
	def NextPage(self, newValue):
		self.SetPropertyValue('NextPage', newValue)

	@property
	def HistoryPages(self):
		return self.GetPropertyValue('HistoryPages')

	@property
	def HistoryPagesIndex(self):
		return self.GetPropertyValue('HistoryPagesIndex')

	@property
	def TooltipInitialShowDelay(self):
		return self.GetPropertyValue('TooltipInitialShowDelay')
	@TooltipInitialShowDelay.setter
	def TooltipInitialShowDelay(self, newValue):
		self.SetPropertyValue('TooltipInitialShowDelay', newValue)

	@property
	def IsIPhone(self):
		return self.GetPropertyValue('IsIPhone')
	@IsIPhone.setter
	def IsIPhone(self, newValue):
		self.SetPropertyValue('IsIPhone', newValue)

	@property
	def IsIPad(self):
		return self.GetPropertyValue('IsIPad')
	@IsIPad.setter
	def IsIPad(self, newValue):
		self.SetPropertyValue('IsIPad', newValue)

	@property
	def IsSmartDevicePortrait(self):
		return self.GetPropertyValue('IsSmartDevicePortrait')
	@IsSmartDevicePortrait.setter
	def IsSmartDevicePortrait(self, newValue):
		self.SetPropertyValue('IsSmartDevicePortrait', newValue)

	@property
	def IsSmartClient(self):
		return self.GetPropertyValue('IsSmartClient')

	@property
	def Parameters(self):
		return self.GetPropertyValue('Parameters')

	@property
	def DisableMultiTouch(self):
		return self.GetPropertyValue('DisableMultiTouch')
	@DisableMultiTouch.setter
	def DisableMultiTouch(self, newValue):
		self.SetPropertyValue('DisableMultiTouch', newValue)

	@property
	def PreloadedTags(self):
		return self.GetPropertyValue('PreloadedTags')

	@property
	def NumberOfTagsLoaded(self):
		return self.GetPropertyValue('NumberOfTagsLoaded')

	@property
	def NumberOfTagPropertiesLoaded(self):
		return self.GetPropertyValue('NumberOfTagPropertiesLoaded')

	@property
	def Theme(self):
		return self.GetPropertyValue('Theme')
	@Theme.setter
	def Theme(self, newValue):
		self.SetPropertyValue('Theme', newValue)

	@property
	def Simulation(self):
		return self.GetPropertyValue('Simulation')
	@Simulation.setter
	def Simulation(self, newValue):
		self.SetPropertyValue('Simulation', newValue)

	@property
	def HttpAddress(self):
		return self.GetPropertyValue('HttpAddress')

	@property
	def DateString(self):
		return self.GetPropertyValue('DateString')

	@property
	def UtcDay(self):
		return self.GetPropertyValue('UtcDay')

	@property
	def IsRunningAsService(self):
		return self.GetPropertyValue('IsRunningAsService')

	@property
	def TStartupStartedTime(self):
		return self.GetPropertyValue('TStartupStartedTime')
	@TStartupStartedTime.setter
	def TStartupStartedTime(self, newValue):
		self.SetPropertyValue('TStartupStartedTime', newValue)

	@property
	def IsTStartupStarted(self):
		return self.GetPropertyValue('IsTStartupStarted')
	@IsTStartupStarted.setter
	def IsTStartupStarted(self, newValue):
		self.SetPropertyValue('IsTStartupStarted', newValue)

	@property
	def IsTServerStartedByTStartup(self):
		return self.GetPropertyValue('IsTServerStartedByTStartup')
	@IsTServerStartedByTStartup.setter
	def IsTServerStartedByTStartup(self, newValue):
		self.SetPropertyValue('IsTServerStartedByTStartup', newValue)

	@property
	def OSVersion(self):
		return self.GetPropertyValue('OSVersion')

	@property
	def SaveDiagnostics(self):
		return self.GetPropertyValue('SaveDiagnostics')
	@SaveDiagnostics.setter
	def SaveDiagnostics(self, newValue):
		self.SetPropertyValue('SaveDiagnostics', newValue)

	@property
	def IsRunningOnDocker(self):
		return self.GetPropertyValue('IsRunningOnDocker')

	@property
	def ResetStatistics(self):
		return self.GetPropertyValue('ResetStatistics')
	@ResetStatistics.setter
	def ResetStatistics(self, newValue):
		self.SetPropertyValue('ResetStatistics', newValue)

	@property
	def Sound(self):
		return self.GetPropertyValue('Sound')

	@property
	def Show(self):
		return self.GetPropertyValue('Show')

	@property
	def LogEvents(self):
		return self.GetPropertyValue('LogEvents')

	@property
	def NotificationMethod(self):
		return self.GetPropertyValue('NotificationMethod')

	@property
	def TotalCount(self):
		return self.GetPropertyValue('TotalCount')

	@property
	def UnAckCount(self):
		return self.GetPropertyValue('UnAckCount')

	@property
	def AckAll(self):
		return self.GetPropertyValue('AckAll')
	@AckAll.setter
	def AckAll(self, newValue):
		self.SetPropertyValue('AckAll', newValue)

	@property
	def Colors(self):
		return self.GetPropertyValue('Colors')

	@property
	def ActiveTimeDeadband(self):
		return self.GetPropertyValue('ActiveTimeDeadband')
	@ActiveTimeDeadband.setter
	def ActiveTimeDeadband(self, newValue):
		self.SetPropertyValue('ActiveTimeDeadband', newValue)

	@property
	def PriorityItem(self):
		return self.GetPropertyValue('PriorityItem')

	@property
	def ActiveUnAckCount(self):
		return self.GetPropertyValue('ActiveUnAckCount')

	@property
	def AckTimeout(self):
		return self.GetPropertyValue('AckTimeout')
	@AckTimeout.setter
	def AckTimeout(self, newValue):
		self.SetPropertyValue('AckTimeout', newValue)

	@property
	def LastAlarmItemNotified(self):
		return self.GetPropertyValue('LastAlarmItemNotified')

	@property
	def AutoAckTime(self):
		return self.GetPropertyValue('AutoAckTime')
	@AutoAckTime.setter
	def AutoAckTime(self, newValue):
		self.SetPropertyValue('AutoAckTime', newValue)

	@property
	def CustomEvaluation(self):
		return self.GetPropertyValue('CustomEvaluation')
	@CustomEvaluation.setter
	def CustomEvaluation(self, newValue):
		self.SetPropertyValue('CustomEvaluation', newValue)

	@property
	def DisableLog(self):
		return self.GetPropertyValue('DisableLog')
	@DisableLog.setter
	def DisableLog(self, newValue):
		self.SetPropertyValue('DisableLog', newValue)

	@property
	def Suspend(self):
		return self.GetPropertyValue('Suspend')
	@Suspend.setter
	def Suspend(self, newValue):
		self.SetPropertyValue('Suspend', newValue)

	@property
	def TagName(self):
		return self.GetPropertyValue('TagName')

	@property
	def Condition(self):
		return self.GetPropertyValue('Condition')

	@property
	def Limit(self):
		return self.GetPropertyValue('Limit')
	@Limit.setter
	def Limit(self, newValue):
		self.SetPropertyValue('Limit', newValue)

	@property
	def Setpoint(self):
		return self.GetPropertyValue('Setpoint')
	@Setpoint.setter
	def Setpoint(self, newValue):
		self.SetPropertyValue('Setpoint', newValue)

	@property
	def SetpointDeadband(self):
		return self.GetPropertyValue('SetpointDeadband')
	@SetpointDeadband.setter
	def SetpointDeadband(self, newValue):
		self.SetPropertyValue('SetpointDeadband', newValue)

	@property
	def Group(self):
		return self.GetPropertyValue('Group')

	@property
	def Area(self):
		return self.GetPropertyValue('Area')
	@Area.setter
	def Area(self, newValue):
		self.SetPropertyValue('Area', newValue)

	@property
	def Priority(self):
		return self.GetPropertyValue('Priority')
	@Priority.setter
	def Priority(self, newValue):
		self.SetPropertyValue('Priority', newValue)

	@property
	def Message(self):
		return self.GetPropertyValue('Message')
	@Message.setter
	def Message(self, newValue):
		self.SetPropertyValue('Message', newValue)

	@property
	def Alarm(self):
		return self.GetPropertyValue('Alarm')
	@Alarm.setter
	def Alarm(self, newValue):
		self.SetPropertyValue('Alarm', newValue)

	@property
	def UnAck(self):
		return self.GetPropertyValue('UnAck')
	@UnAck.setter
	def UnAck(self, newValue):
		self.SetPropertyValue('UnAck', newValue)

	@property
	def ActiveTime(self):
		return self.GetPropertyValue('ActiveTime')

	@property
	def NormTime(self):
		return self.GetPropertyValue('NormTime')

	@property
	def AckTime(self):
		return self.GetPropertyValue('AckTime')

	@property
	def Comment(self):
		return self.GetPropertyValue('Comment')
	@Comment.setter
	def Comment(self, newValue):
		self.SetPropertyValue('Comment', newValue)

	@property
	def ColorBG(self):
		return self.GetPropertyValue('ColorBG')

	@property
	def ColorFG(self):
		return self.GetPropertyValue('ColorFG')

	@property
	def LastValue(self):
		return self.GetPropertyValue('LastValue')

	@property
	def MessageExtended(self):
		return self.GetPropertyValue('MessageExtended')

	@property
	def Limit1(self):
		return self.GetPropertyValue('Limit1')
	@Limit1.setter
	def Limit1(self, newValue):
		self.SetPropertyValue('Limit1', newValue)

	@property
	def Limit2(self):
		return self.GetPropertyValue('Limit2')
	@Limit2.setter
	def Limit2(self, newValue):
		self.SetPropertyValue('Limit2', newValue)

	@property
	def Limit0(self):
		return self.GetPropertyValue('Limit0')
	@Limit0.setter
	def Limit0(self, newValue):
		self.SetPropertyValue('Limit0', newValue)

	@property
	def MessageValue(self):
		return self.GetPropertyValue('MessageValue')
	@MessageValue.setter
	def MessageValue(self, newValue):
		self.SetPropertyValue('MessageValue', newValue)

	@property
	def ActiveLocalTime(self):
		return self.GetPropertyValue('ActiveLocalTime')

	@property
	def Duration(self):
		return self.GetPropertyValue('Duration')

	@property
	def AuxValue(self):
		return self.GetPropertyValue('AuxValue')

	@property
	def ItemName(self):
		return self.GetPropertyValue('ItemName')
	@ItemName.setter
	def ItemName(self, newValue):
		self.SetPropertyValue('ItemName', newValue)

	@property
	def BlinkBG(self):
		return self.GetPropertyValue('BlinkBG')

	@property
	def BlinkFG(self):
		return self.GetPropertyValue('BlinkFG')

	@property
	def AuxValue2(self):
		return self.GetPropertyValue('AuxValue2')

	@property
	def AuxValue3(self):
		return self.GetPropertyValue('AuxValue3')

	@property
	def Item(self):
		return self.GetPropertyValue('Item')

	@property
	def QueryActive(self):
		return self.GetPropertyValue('QueryActive')

	@property
	def BeepState(self):
		return self.GetPropertyValue('BeepState')
	@BeepState.setter
	def BeepState(self, newValue):
		self.SetPropertyValue('BeepState', newValue)

	@property
	def LastStoredTimeStamp(self):
		return self.GetPropertyValue('LastStoredTimeStamp')

	@property
	def LastStoredErrorMessage(self):
		return self.GetPropertyValue('LastStoredErrorMessage')

	@property
	def IsSecondaryActive(self):
		return self.GetPropertyValue('IsSecondaryActive')
	@IsSecondaryActive.setter
	def IsSecondaryActive(self, newValue):
		self.SetPropertyValue('IsSecondaryActive', newValue)

	@property
	def ErrorCount(self):
		return self.GetPropertyValue('ErrorCount')

	@property
	def SuccessCount(self):
		return self.GetPropertyValue('SuccessCount')

	@property
	def BeepValue(self):
		return self.GetPropertyValue('BeepValue')
	@BeepValue.setter
	def BeepValue(self, newValue):
		self.SetPropertyValue('BeepValue', newValue)

	@property
	def CurrentShift(self):
		return self.GetPropertyValue('CurrentShift')
	@CurrentShift.setter
	def CurrentShift(self, newValue):
		self.SetPropertyValue('CurrentShift', newValue)

	@property
	def LastTickAdded(self):
		return self.GetPropertyValue('LastTickAdded')

	@property
	def IsNotifySync(self):
		return self.GetPropertyValue('IsNotifySync')
	@IsNotifySync.setter
	def IsNotifySync(self, newValue):
		self.SetPropertyValue('IsNotifySync', newValue)

	@property
	def LastHistoricID(self):
		return self.GetPropertyValue('LastHistoricID')

	@property
	def LastHistorianTimestampTicks(self):
		return self.GetPropertyValue('LastHistorianTimestampTicks')

	@property
	def IsAlarmEventsInOverflow(self):
		return self.GetPropertyValue('IsAlarmEventsInOverflow')

	@property
	def DisableSaveToDatabase(self):
		return self.GetPropertyValue('DisableSaveToDatabase')
	@DisableSaveToDatabase.setter
	def DisableSaveToDatabase(self, newValue):
		self.SetPropertyValue('DisableSaveToDatabase', newValue)

	@property
	def TotalCountLocal(self):
		return self.GetPropertyValue('TotalCountLocal')

	@property
	def UnAckCountLocal(self):
		return self.GetPropertyValue('UnAckCountLocal')

	@property
	def DisableLocal(self):
		return self.GetPropertyValue('DisableLocal')
	@DisableLocal.setter
	def DisableLocal(self, newValue):
		self.SetPropertyValue('DisableLocal', newValue)

	@property
	def AckAllLocal(self):
		return self.GetPropertyValue('AckAllLocal')
	@AckAllLocal.setter
	def AckAllLocal(self, newValue):
		self.SetPropertyValue('AckAllLocal', newValue)

	@property
	def SuspendLocal(self):
		return self.GetPropertyValue('SuspendLocal')
	@SuspendLocal.setter
	def SuspendLocal(self, newValue):
		self.SetPropertyValue('SuspendLocal', newValue)

	@property
	def DisplayName(self):
		return self.GetPropertyValue('DisplayName')

	@property
	def PendingAlarmsForSaving(self):
		return self.GetPropertyValue('PendingAlarmsForSaving')
	@PendingAlarmsForSaving.setter
	def PendingAlarmsForSaving(self, newValue):
		self.SetPropertyValue('PendingAlarmsForSaving', newValue)

	@property
	def PendingEventsForSaving(self):
		return self.GetPropertyValue('PendingEventsForSaving')
	@PendingEventsForSaving.setter
	def PendingEventsForSaving(self, newValue):
		self.SetPropertyValue('PendingEventsForSaving', newValue)

	@property
	def LastSyncMessage(self):
		return self.GetPropertyValue('LastSyncMessage')

	@property
	def LastSyncTimestamp(self):
		return self.GetPropertyValue('LastSyncTimestamp')

	@property
	def LastSyncErrorMessage(self):
		return self.GetPropertyValue('LastSyncErrorMessage')

	@property
	def LastSyncErrorTimestamp(self):
		return self.GetPropertyValue('LastSyncErrorTimestamp')

	@property
	def TimeDeadband(self):
		return self.GetPropertyValue('TimeDeadband')

	@property
	def LifeTime(self):
		return self.GetPropertyValue('LifeTime')

	@property
	def AutoCreate(self):
		return self.GetPropertyValue('AutoCreate')

	@property
	def StorageLocation(self):
		return self.GetPropertyValue('StorageLocation')

	@property
	def LastDeletedTimeStamp(self):
		return self.GetPropertyValue('LastDeletedTimeStamp')

	@property
	def LastDeletedErrorMessage(self):
		return self.GetPropertyValue('LastDeletedErrorMessage')

	@property
	def InitializationMessage(self):
		return self.GetPropertyValue('InitializationMessage')

	@property
	def RowsCount(self):
		return self.GetPropertyValue('RowsCount')

	@property
	def SaveOnChange(self):
		return self.GetPropertyValue('SaveOnChange')

	@property
	def IsDeleting(self):
		return self.GetPropertyValue('IsDeleting')

	@property
	def SaveQuality(self):
		return self.GetPropertyValue('SaveQuality')

	@property
	def Normalized(self):
		return self.GetPropertyValue('Normalized')

	@property
	def HistorianTable(self):
		return self.GetPropertyValue('HistorianTable')

	@property
	def Deviation(self):
		return self.GetPropertyValue('Deviation')

	@property
	def DeviationDeadBandType(self):
		return self.GetPropertyValue('DeviationDeadBandType')

	@property
	def DeviationDeadBandLimit(self):
		return self.GetPropertyValue('DeviationDeadBandLimit')

	@property
	def Provider(self):
		return self.GetPropertyValue('Provider')
	@Provider.setter
	def Provider(self, newValue):
		self.SetPropertyValue('Provider', newValue)

	@property
	def ConnectionString(self):
		return self.GetPropertyValue('ConnectionString')
	@ConnectionString.setter
	def ConnectionString(self, newValue):
		self.SetPropertyValue('ConnectionString', newValue)

	@property
	def Database(self):
		return self.GetPropertyValue('Database')

	@property
	def TimeoutControl(self):
		return self.GetPropertyValue('TimeoutControl')

	@property
	def ServerIP(self):
		return self.GetPropertyValue('ServerIP')
	@ServerIP.setter
	def ServerIP(self, newValue):
		self.SetPropertyValue('ServerIP', newValue)

	@property
	def OpenStatusMessage(self):
		return self.GetPropertyValue('OpenStatusMessage')

	@property
	def FileName(self):
		return self.GetPropertyValue('FileName')

	@property
	def FileType(self):
		return self.GetPropertyValue('FileType')

	@property
	def Objects(self):
		return self.GetPropertyValue('Objects')

	@property
	def LastStatus(self):
		return self.GetPropertyValue('LastStatus')
	@LastStatus.setter
	def LastStatus(self, newValue):
		self.SetPropertyValue('LastStatus', newValue)

	@property
	def LastStatusMessage(self):
		return self.GetPropertyValue('LastStatusMessage')
	@LastStatusMessage.setter
	def LastStatusMessage(self, newValue):
		self.SetPropertyValue('LastStatusMessage', newValue)

	@property
	def Completed(self):
		return self.GetPropertyValue('Completed')
	@Completed.setter
	def Completed(self, newValue):
		self.SetPropertyValue('Completed', newValue)

	@property
	def Save(self):
		return self.GetPropertyValue('Save')
	@Save.setter
	def Save(self, newValue):
		self.SetPropertyValue('Save', newValue)

	@property
	def Load(self):
		return self.GetPropertyValue('Load')
	@Load.setter
	def Load(self, newValue):
		self.SetPropertyValue('Load', newValue)

	@property
	def SaveExecuted(self):
		return self.GetPropertyValue('SaveExecuted')
	@SaveExecuted.setter
	def SaveExecuted(self, newValue):
		self.SetPropertyValue('SaveExecuted', newValue)

	@property
	def LoadExecuted(self):
		return self.GetPropertyValue('LoadExecuted')

	@property
	def Delete(self):
		return self.GetPropertyValue('Delete')
	@Delete.setter
	def Delete(self, newValue):
		self.SetPropertyValue('Delete', newValue)

	@property
	def DeleteExecuted(self):
		return self.GetPropertyValue('DeleteExecuted')

	@property
	def XmlSchemaFile(self):
		return self.GetPropertyValue('XmlSchemaFile')

	@property
	def DB(self):
		return self.GetPropertyValue('DB')

	@property
	def TableName(self):
		return self.GetPropertyValue('TableName')
	@TableName.setter
	def TableName(self, newValue):
		self.SetPropertyValue('TableName', newValue)

	@property
	def WhereCondition(self):
		return self.GetPropertyValue('WhereCondition')
	@WhereCondition.setter
	def WhereCondition(self, newValue):
		self.SetPropertyValue('WhereCondition', newValue)

	@property
	def Access(self):
		return self.GetPropertyValue('Access')
	@Access.setter
	def Access(self, newValue):
		self.SetPropertyValue('Access', newValue)

	@property
	def Mapping(self):
		return self.GetPropertyValue('Mapping')

	@property
	def CursorIndex(self):
		return self.GetPropertyValue('CursorIndex')
	@CursorIndex.setter
	def CursorIndex(self, newValue):
		self.SetPropertyValue('CursorIndex', newValue)

	@property
	def RowCount(self):
		return self.GetPropertyValue('RowCount')

	@property
	def Select(self):
		return self.GetPropertyValue('Select')
	@Select.setter
	def Select(self, newValue):
		self.SetPropertyValue('Select', newValue)

	@property
	def Next(self):
		return self.GetPropertyValue('Next')
	@Next.setter
	def Next(self, newValue):
		self.SetPropertyValue('Next', newValue)

	@property
	def Insert(self):
		return self.GetPropertyValue('Insert')
	@Insert.setter
	def Insert(self, newValue):
		self.SetPropertyValue('Insert', newValue)

	@property
	def Update(self):
		return self.GetPropertyValue('Update')
	@Update.setter
	def Update(self, newValue):
		self.SetPropertyValue('Update', newValue)

	@property
	def AsyncContents(self):
		return self.GetPropertyValue('AsyncContents')

	@property
	def LocalContents(self):
		return self.GetPropertyValue('LocalContents')

	@property
	def SelectExecuted(self):
		return self.GetPropertyValue('SelectExecuted')

	@property
	def NextExecuted(self):
		return self.GetPropertyValue('NextExecuted')

	@property
	def InsertExecuted(self):
		return self.GetPropertyValue('InsertExecuted')

	@property
	def UpdateExecuted(self):
		return self.GetPropertyValue('UpdateExecuted')

	@property
	def DateTimeMode(self):
		return self.GetPropertyValue('DateTimeMode')
	@DateTimeMode.setter
	def DateTimeMode(self, newValue):
		self.SetPropertyValue('DateTimeMode', newValue)

	@property
	def SqlStatement(self):
		return self.GetPropertyValue('SqlStatement')
	@SqlStatement.setter
	def SqlStatement(self, newValue):
		self.SetPropertyValue('SqlStatement', newValue)

	@property
	def Execute(self):
		return self.GetPropertyValue('Execute')
	@Execute.setter
	def Execute(self, newValue):
		self.SetPropertyValue('Execute', newValue)

	@property
	def ExecuteCompleted(self):
		return self.GetPropertyValue('ExecuteCompleted')

	@property
	def Status(self):
		return self.GetPropertyValue('Status')

	@property
	def LastErrorCode(self):
		return self.GetPropertyValue('LastErrorCode')

	@property
	def LastErrorDateTime(self):
		return self.GetPropertyValue('LastErrorDateTime')

	@property
	def Activity(self):
		return self.GetPropertyValue('Activity')
	@Activity.setter
	def Activity(self, newValue):
		self.SetPropertyValue('Activity', newValue)

	@property
	def InitialState(self):
		return self.GetPropertyValue('InitialState')

	@property
	def IsRunning(self):
		return self.GetPropertyValue('IsRunning')
	@IsRunning.setter
	def IsRunning(self, newValue):
		self.SetPropertyValue('IsRunning', newValue)

	@property
	def Diagnostics(self):
		return self.GetPropertyValue('Diagnostics')
	@Diagnostics.setter
	def Diagnostics(self, newValue):
		self.SetPropertyValue('Diagnostics', newValue)

	@property
	def DriverVersion(self):
		return self.GetPropertyValue('DriverVersion')

	@property
	def SuccessAmount(self):
		return self.GetPropertyValue('SuccessAmount')

	@property
	def FailAmount(self):
		return self.GetPropertyValue('FailAmount')

	@property
	def AverageTime(self):
		return self.GetPropertyValue('AverageTime')

	@property
	def AverageCycleTime(self):
		return self.GetPropertyValue('AverageCycleTime')

	@property
	def ClearReadQueue(self):
		return self.GetPropertyValue('ClearReadQueue')
	@ClearReadQueue.setter
	def ClearReadQueue(self, newValue):
		self.SetPropertyValue('ClearReadQueue', newValue)

	@property
	def ClearWriteQueue(self):
		return self.GetPropertyValue('ClearWriteQueue')
	@ClearWriteQueue.setter
	def ClearWriteQueue(self, newValue):
		self.SetPropertyValue('ClearWriteQueue', newValue)

	@property
	def ProcessName(self):
		return self.GetPropertyValue('ProcessName')

	@property
	def ProcessPID(self):
		return self.GetPropertyValue('ProcessPID')

	@property
	def DeactivateCounter(self):
		return self.GetPropertyValue('DeactivateCounter')

	@property
	def PrimaryStation(self):
		return self.GetPropertyValue('PrimaryStation')
	@PrimaryStation.setter
	def PrimaryStation(self, newValue):
		self.SetPropertyValue('PrimaryStation', newValue)

	@property
	def BackupStation(self):
		return self.GetPropertyValue('BackupStation')
	@BackupStation.setter
	def BackupStation(self, newValue):
		self.SetPropertyValue('BackupStation', newValue)

	@property
	def IsRedundancyEnabled(self):
		return self.GetPropertyValue('IsRedundancyEnabled')

	@property
	def IsPrimary(self):
		return self.GetPropertyValue('IsPrimary')

	@property
	def IsBackup(self):
		return self.GetPropertyValue('IsBackup')

	@property
	def InvalidAddresses(self):
		return self.GetPropertyValue('InvalidAddresses')
	@InvalidAddresses.setter
	def InvalidAddresses(self, newValue):
		self.SetPropertyValue('InvalidAddresses', newValue)

	@property
	def ActivityCounter(self):
		return self.GetPropertyValue('ActivityCounter')
	@ActivityCounter.setter
	def ActivityCounter(self, newValue):
		self.SetPropertyValue('ActivityCounter', newValue)

	@property
	def DisableAutoSwitch(self):
		return self.GetPropertyValue('DisableAutoSwitch')
	@DisableAutoSwitch.setter
	def DisableAutoSwitch(self, newValue):
		self.SetPropertyValue('DisableAutoSwitch', newValue)

	@property
	def ForceSwitch(self):
		return self.GetPropertyValue('ForceSwitch')
	@ForceSwitch.setter
	def ForceSwitch(self, newValue):
		self.SetPropertyValue('ForceSwitch', newValue)

	@property
	def ReadPolling(self):
		return self.GetPropertyValue('ReadPolling')

	@property
	def ReadPollingRate(self):
		return self.GetPropertyValue('ReadPollingRate')

	@property
	def WriteEventEnabled(self):
		return self.GetPropertyValue('WriteEventEnabled')

	@property
	def AcceptUnsolicited(self):
		return self.GetPropertyValue('AcceptUnsolicited')

	@property
	def ReadOnStartup(self):
		return self.GetPropertyValue('ReadOnStartup')

	@property
	def ReadTrigger(self):
		return self.GetPropertyValue('ReadTrigger')

	@property
	def ReadStatus(self):
		return self.GetPropertyValue('ReadStatus')

	@property
	def ReadCompleted(self):
		return self.GetPropertyValue('ReadCompleted')

	@property
	def WriteTrigger(self):
		return self.GetPropertyValue('WriteTrigger')

	@property
	def WriteStatus(self):
		return self.GetPropertyValue('WriteStatus')

	@property
	def WriteCompleted(self):
		return self.GetPropertyValue('WriteCompleted')

	@property
	def BlockCommand(self):
		return self.GetPropertyValue('BlockCommand')

	@property
	def PendingRead(self):
		return self.GetPropertyValue('PendingRead')

	@property
	def ForcedRead(self):
		return self.GetPropertyValue('ForcedRead')

	@property
	def PendingWrite(self):
		return self.GetPropertyValue('PendingWrite')

	@property
	def ForcedWrite(self):
		return self.GetPropertyValue('ForcedWrite')

	@property
	def IsOpened(self):
		return self.GetPropertyValue('IsOpened')

	@property
	def ZoomLevel(self):
		return self.GetPropertyValue('ZoomLevel')
	@ZoomLevel.setter
	def ZoomLevel(self, newValue):
		self.SetPropertyValue('ZoomLevel', newValue)

	@property
	def VerticalScroll(self):
		return self.GetPropertyValue('VerticalScroll')
	@VerticalScroll.setter
	def VerticalScroll(self, newValue):
		self.SetPropertyValue('VerticalScroll', newValue)

	@property
	def HorizontalScroll(self):
		return self.GetPropertyValue('HorizontalScroll')
	@HorizontalScroll.setter
	def HorizontalScroll(self, newValue):
		self.SetPropertyValue('HorizontalScroll', newValue)

	@property
	def CustomProperties(self):
		return self.GetPropertyValue('CustomProperties')

	@property
	def CPUName(self):
		return self.GetPropertyValue('CPUName')

	@property
	def CPUClock(self):
		return self.GetPropertyValue('CPUClock')

	@property
	def CPUUsage(self):
		return self.GetPropertyValue('CPUUsage')

	@property
	def MemoryUsage(self):
		return self.GetPropertyValue('MemoryUsage')

	@property
	def AvailableRAM(self):
		return self.GetPropertyValue('AvailableRAM')

	@property
	def TotalRAM(self):
		return self.GetPropertyValue('TotalRAM')

	@property
	def DiskSpace(self):
		return self.GetPropertyValue('DiskSpace')

	@property
	def TServerCPUUsage(self):
		return self.GetPropertyValue('TServerCPUUsage')

	@property
	def TServerMemoryMB(self):
		return self.GetPropertyValue('TServerMemoryMB')

	@property
	def Uptime(self):
		return self.GetPropertyValue('Uptime')

	@property
	def VisualizerCPUUsage(self):
		return self.GetPropertyValue('VisualizerCPUUsage')

	@property
	def VisualizerMemoryMB(self):
		return self.GetPropertyValue('VisualizerMemoryMB')

	@property
	def IsActivated(self):
		return self.GetPropertyValue('IsActivated')

	@property
	def IsSecondary(self):
		return self.GetPropertyValue('IsSecondary')

	@property
	def IsSwitchToPrimaryEnabled(self):
		return self.GetPropertyValue('IsSwitchToPrimaryEnabled')

	@property
	def IsStandByActive(self):
		return self.GetPropertyValue('IsStandByActive')

	@property
	def PrimaryIP(self):
		return self.GetPropertyValue('PrimaryIP')

	@property
	def SecondaryIP(self):
		return self.GetPropertyValue('SecondaryIP')

	@property
	def RedundancyPendingObjects(self):
		return self.GetPropertyValue('RedundancyPendingObjects')
	@RedundancyPendingObjects.setter
	def RedundancyPendingObjects(self, newValue):
		self.SetPropertyValue('RedundancyPendingObjects', newValue)

	@property
	def UpdateSolutionOnInactiveServer(self):
		return self.GetPropertyValue('UpdateSolutionOnInactiveServer')
	@UpdateSolutionOnInactiveServer.setter
	def UpdateSolutionOnInactiveServer(self, newValue):
		self.SetPropertyValue('UpdateSolutionOnInactiveServer', newValue)

	@property
	def UpdateSolutionIPPathName(self):
		return self.GetPropertyValue('UpdateSolutionIPPathName')
	@UpdateSolutionIPPathName.setter
	def UpdateSolutionIPPathName(self, newValue):
		self.SetPropertyValue('UpdateSolutionIPPathName', newValue)

	@property
	def PrimaryPort(self):
		return self.GetPropertyValue('PrimaryPort')

	@property
	def SecondaryPort(self):
		return self.GetPropertyValue('SecondaryPort')

	@property
	def PairStartedTime(self):
		return self.GetPropertyValue('PairStartedTime')
	@PairStartedTime.setter
	def PairStartedTime(self, newValue):
		self.SetPropertyValue('PairStartedTime', newValue)

	@property
	def LastSwitchTime(self):
		return self.GetPropertyValue('LastSwitchTime')
	@LastSwitchTime.setter
	def LastSwitchTime(self, newValue):
		self.SetPropertyValue('LastSwitchTime', newValue)

	@property
	def LastSwitchReason(self):
		return self.GetPropertyValue('LastSwitchReason')

	@property
	def Solution(self):
		return self.GetPropertyValue('Solution')

	@property
	def Module(self):
		return self.GetPropertyValue('Module')

	@property
	def TestMode(self):
		return self.GetPropertyValue('TestMode')

	@property
	def OnlineConfig(self):
		return self.GetPropertyValue('OnlineConfig')

	@property
	def ScriptClasses(self):
		return self.GetPropertyValue('ScriptClasses')

	@property
	def ExecutionPath(self):
		return self.GetPropertyValue('ExecutionPath')

	@property
	def Product(self):
		return self.GetPropertyValue('Product')

	@property
	def LogObjectStatus(self):
		return self.GetPropertyValue('LogObjectStatus')
	@LogObjectStatus.setter
	def LogObjectStatus(self, newValue):
		self.SetPropertyValue('LogObjectStatus', newValue)

	@property
	def TagPropertyCreated(self):
		return self.GetPropertyValue('TagPropertyCreated')
	@TagPropertyCreated.setter
	def TagPropertyCreated(self, newValue):
		self.SetPropertyValue('TagPropertyCreated', newValue)

	@property
	def IsSyncModuleConnected(self):
		return self.GetPropertyValue('IsSyncModuleConnected')

	@property
	def LastInvalidSetValue(self):
		return self.GetPropertyValue('LastInvalidSetValue')

	@property
	def SyncMarker(self):
		return self.GetPropertyValue('SyncMarker')
	@SyncMarker.setter
	def SyncMarker(self, newValue):
		self.SetPropertyValue('SyncMarker', newValue)

	@property
	def CurrentTotalAssets(self):
		return self.GetPropertyValue('CurrentTotalAssets')

	@property
	def Profile(self):
		return self.GetPropertyValue('Profile')

	@property
	def ProfileName(self):
		return self.GetPropertyValue('ProfileName')

	@property
	def SerialNumber(self):
		return self.GetPropertyValue('SerialNumber')

	@property
	def ServerConnected(self):
		return self.GetPropertyValue('ServerConnected')

	@property
	def LicenseMedia(self):
		return self.GetPropertyValue('LicenseMedia')

	@property
	def ProductFamily(self):
		return self.GetPropertyValue('ProductFamily')

	@property
	def ProductModel(self):
		return self.GetPropertyValue('ProductModel')

	@property
	def LicenseType(self):
		return self.GetPropertyValue('LicenseType')

	@property
	def DateCreated(self):
		return self.GetPropertyValue('DateCreated')

	@property
	def DateModified(self):
		return self.GetPropertyValue('DateModified')

	@property
	def ExpirationDate(self):
		return self.GetPropertyValue('ExpirationDate')

	@property
	def AllowedWebClients(self):
		return self.GetPropertyValue('AllowedWebClients')

	@property
	def AllowedRichClients(self):
		return self.GetPropertyValue('AllowedRichClients')

	@property
	def AllowedTagElements(self):
		return self.GetPropertyValue('AllowedTagElements')

	@property
	def AllowedDevices(self):
		return self.GetPropertyValue('AllowedDevices')

	@property
	def AllowedRunInstances(self):
		return self.GetPropertyValue('AllowedRunInstances')

	@property
	def AllowedEngineeringUsers(self):
		return self.GetPropertyValue('AllowedEngineeringUsers')

	@property
	def ProductVersion(self):
		return self.GetPropertyValue('ProductVersion')

	@property
	def AllowediOSClients(self):
		return self.GetPropertyValue('AllowediOSClients')

	@property
	def ExtraNumber1(self):
		return self.GetPropertyValue('ExtraNumber1')

	@property
	def ExtraNumber2(self):
		return self.GetPropertyValue('ExtraNumber2')

	@property
	def AllowedWebViews(self):
		return self.GetPropertyValue('AllowedWebViews')

	@property
	def AllowedProtocolsStandard(self):
		return self.GetPropertyValue('AllowedProtocolsStandard')

	@property
	def AllowedProtocolsPremium(self):
		return self.GetPropertyValue('AllowedProtocolsPremium')

	@property
	def AllowedPI(self):
		return self.GetPropertyValue('AllowedPI')

	@property
	def IsAllowedTagElementsEqualCommPoints(self):
		return self.GetPropertyValue('IsAllowedTagElementsEqualCommPoints')

	@property
	def Registered(self):
		return self.GetPropertyValue('Registered')

	@property
	def ActivationCode(self):
		return self.GetPropertyValue('ActivationCode')

	@property
	def SubscriptionType(self):
		return self.GetPropertyValue('SubscriptionType')

	@property
	def SubscriptionExpiration(self):
		return self.GetPropertyValue('SubscriptionExpiration')

	@property
	def AllowedRemoteLicenseClients(self):
		return self.GetPropertyValue('AllowedRemoteLicenseClients')

	@property
	def RemoteLicenseServer(self):
		return self.GetPropertyValue('RemoteLicenseServer')

	@property
	def Target(self):
		return self.GetPropertyValue('Target')

	@property
	def IsPaused(self):
		return self.GetPropertyValue('IsPaused')
	@IsPaused.setter
	def IsPaused(self, newValue):
		self.SetPropertyValue('IsPaused', newValue)

	@property
	def StartStepCounter(self):
		return self.GetPropertyValue('StartStepCounter')

	@property
	def StatusMessage(self):
		return self.GetPropertyValue('StatusMessage')

	@property
	def ProductName(self):
		return self.GetPropertyValue('ProductName')

	@property
	def Company(self):
		return self.GetPropertyValue('Company')
	@Company.setter
	def Company(self, newValue):
		self.SetPropertyValue('Company', newValue)

	@property
	def VersionString(self):
		return self.GetPropertyValue('VersionString')

	@property
	def SolutionName(self):
		return self.GetPropertyValue('SolutionName')

	@property
	def SolutionPath(self):
		return self.GetPropertyValue('SolutionPath')

	@property
	def CurrentBuild(self):
		return self.GetPropertyValue('CurrentBuild')

	@property
	def TargetFramework(self):
		return self.GetPropertyValue('TargetFramework')

	@property
	def SchemaVersion(self):
		return self.GetPropertyValue('SchemaVersion')

	@property
	def VersionID(self):
		return self.GetPropertyValue('VersionID')

	@property
	def Settings(self):
		return self.GetPropertyValue('Settings')

	@property
	def AutoDuplicateQuoteEscape(self):
		return self.GetPropertyValue('AutoDuplicateQuoteEscape')
	@AutoDuplicateQuoteEscape.setter
	def AutoDuplicateQuoteEscape(self, newValue):
		self.SetPropertyValue('AutoDuplicateQuoteEscape', newValue)

	@property
	def LimitValuesMinMax(self):
		return self.GetPropertyValue('LimitValuesMinMax')

	@property
	def ChildSolutions(self):
		return self.GetPropertyValue('ChildSolutions')

	@property
	def PythonRuntimePath(self):
		return self.GetPropertyValue('PythonRuntimePath')

	@property
	def HelpUrl(self):
		return self.GetPropertyValue('HelpUrl')

	@property
	def Padding(self):
		return self.GetPropertyValue('Padding')

	@property
	def SaveFileName(self):
		return self.GetPropertyValue('SaveFileName')
	@SaveFileName.setter
	def SaveFileName(self, newValue):
		self.SetPropertyValue('SaveFileName', newValue)

	@property
	def Append(self):
		return self.GetPropertyValue('Append')
	@Append.setter
	def Append(self, newValue):
		self.SetPropertyValue('Append', newValue)

	@property
	def ConfigContent(self):
		return self.GetPropertyValue('ConfigContent')
	@ConfigContent.setter
	def ConfigContent(self, newValue):
		self.SetPropertyValue('ConfigContent', newValue)

	@property
	def SaveFormat(self):
		return self.GetPropertyValue('SaveFormat')
	@SaveFormat.setter
	def SaveFormat(self, newValue):
		self.SetPropertyValue('SaveFormat', newValue)

	@property
	def IsSavingContent(self):
		return self.GetPropertyValue('IsSavingContent')
	@IsSavingContent.setter
	def IsSavingContent(self, newValue):
		self.SetPropertyValue('IsSavingContent', newValue)

	@property
	def DocumentClient(self):
		return self.GetPropertyValue('DocumentClient')
	@DocumentClient.setter
	def DocumentClient(self, newValue):
		self.SetPropertyValue('DocumentClient', newValue)

	@property
	def SaveFileNameResolved(self):
		return self.GetPropertyValue('SaveFileNameResolved')
	@SaveFileNameResolved.setter
	def SaveFileNameResolved(self, newValue):
		self.SetPropertyValue('SaveFileNameResolved', newValue)

	@property
	def OpenExecuted(self):
		return self.GetPropertyValue('OpenExecuted')
	@OpenExecuted.setter
	def OpenExecuted(self, newValue):
		self.SetPropertyValue('OpenExecuted', newValue)

	@property
	def UseDatasetAsyncContents(self):
		return self.GetPropertyValue('UseDatasetAsyncContents')
	@UseDatasetAsyncContents.setter
	def UseDatasetAsyncContents(self, newValue):
		self.SetPropertyValue('UseDatasetAsyncContents', newValue)

	@property
	def SaveTrigger(self):
		return self.GetPropertyValue('SaveTrigger')

	@property
	def Header(self):
		return self.GetPropertyValue('Header')

	@property
	def Footer(self):
		return self.GetPropertyValue('Footer')

	@property
	def Encoding(self):
		return self.GetPropertyValue('Encoding')
	@Encoding.setter
	def Encoding(self, newValue):
		self.SetPropertyValue('Encoding', newValue)

	@property
	def DefaultURL(self):
		return self.GetPropertyValue('DefaultURL')
	@DefaultURL.setter
	def DefaultURL(self, newValue):
		self.SetPropertyValue('DefaultURL', newValue)

	@property
	def DefaultURLClient(self):
		return self.GetPropertyValue('DefaultURLClient')
	@DefaultURLClient.setter
	def DefaultURLClient(self, newValue):
		self.SetPropertyValue('DefaultURLClient', newValue)

	@property
	def DisableMultiThreading(self):
		return self.GetPropertyValue('DisableMultiThreading')
	@DisableMultiThreading.setter
	def DisableMultiThreading(self, newValue):
		self.SetPropertyValue('DisableMultiThreading', newValue)

	@property
	def Expression(self):
		return self.GetPropertyValue('Expression')

	@property
	def Running(self):
		return self.GetPropertyValue('Running')

	@property
	def ErrorMessage(self):
		return self.GetPropertyValue('ErrorMessage')

	@property
	def LastRun(self):
		return self.GetPropertyValue('LastRun')

	@property
	def LastDuration(self):
		return self.GetPropertyValue('LastDuration')

	@property
	def Counter(self):
		return self.GetPropertyValue('Counter')

	@property
	def Period(self):
		return self.GetPropertyValue('Period')
	@Period.setter
	def Period(self, newValue):
		self.SetPropertyValue('Period', newValue)

	@property
	def StopExecutionOnError(self):
		return self.GetPropertyValue('StopExecutionOnError')
	@StopExecutionOnError.setter
	def StopExecutionOnError(self, newValue):
		self.SetPropertyValue('StopExecutionOnError', newValue)

	@property
	def PeakDuration(self):
		return self.GetPropertyValue('PeakDuration')

	@property
	def PeakDateTime(self):
		return self.GetPropertyValue('PeakDateTime')

	@property
	def Policy(self):
		return self.GetPropertyValue('Policy')

	@property
	def Permission(self):
		return self.GetPropertyValue('Permission')

	@property
	def User(self):
		return self.GetPropertyValue('User')

	@property
	def RuntimeUser(self):
		return self.GetPropertyValue('RuntimeUser')

	@property
	def WindowsUser(self):
		return self.GetPropertyValue('WindowsUser')

	@property
	def Edit(self):
		return self.GetPropertyValue('Edit')

	@property
	def Run(self):
		return self.GetPropertyValue('Run')

	@property
	def Identification(self):
		return self.GetPropertyValue('Identification')

	@property
	def Logon(self):
		return self.GetPropertyValue('Logon')

	@property
	def ESign(self):
		return self.GetPropertyValue('ESign')

	@property
	def Session(self):
		return self.GetPropertyValue('Session')

	@property
	def SessionInactivityMinutes(self):
		return self.GetPropertyValue('SessionInactivityMinutes')
	@SessionInactivityMinutes.setter
	def SessionInactivityMinutes(self, newValue):
		self.SetPropertyValue('SessionInactivityMinutes', newValue)

	@property
	def SessionDurationHours(self):
		return self.GetPropertyValue('SessionDurationHours')
	@SessionDurationHours.setter
	def SessionDurationHours(self, newValue):
		self.SetPropertyValue('SessionDurationHours', newValue)

	@property
	def BlockOnInvalidAttempt(self):
		return self.GetPropertyValue('BlockOnInvalidAttempt')
	@BlockOnInvalidAttempt.setter
	def BlockOnInvalidAttempt(self, newValue):
		self.SetPropertyValue('BlockOnInvalidAttempt', newValue)

	@property
	def MaxInvalidAttempts(self):
		return self.GetPropertyValue('MaxInvalidAttempts')
	@MaxInvalidAttempts.setter
	def MaxInvalidAttempts(self, newValue):
		self.SetPropertyValue('MaxInvalidAttempts', newValue)

	@property
	def AllowShareUser(self):
		return self.GetPropertyValue('AllowShareUser')

	@property
	def UserNameMinLength(self):
		return self.GetPropertyValue('UserNameMinLength')

	@property
	def BlockOnInvalidAttempts(self):
		return self.GetPropertyValue('BlockOnInvalidAttempts')

	@property
	def BlockAging(self):
		return self.GetPropertyValue('BlockAging')

	@property
	def ContactInfo(self):
		return self.GetPropertyValue('ContactInfo')

	@property
	def PolicyName(self):
		return self.GetPropertyValue('PolicyName')

	@property
	def Blocked(self):
		return self.GetPropertyValue('Blocked')
	@Blocked.setter
	def Blocked(self, newValue):
		self.SetPropertyValue('Blocked', newValue)

	@property
	def Deleted(self):
		return self.GetPropertyValue('Deleted')
	@Deleted.setter
	def Deleted(self, newValue):
		self.SetPropertyValue('Deleted', newValue)

	@property
	def Permissions(self):
		return self.GetPropertyValue('Permissions')

	@property
	def PermissionsName(self):
		return self.GetPropertyValue('PermissionsName')

	@property
	def RunPermissions(self):
		return self.GetPropertyValue('RunPermissions')

	@property
	def Realm(self):
		return self.GetPropertyValue('Realm')

	@property
	def Alias(self):
		return self.GetPropertyValue('Alias')
	@Alias.setter
	def Alias(self, newValue):
		self.SetPropertyValue('Alias', newValue)

	@property
	def UserGroup(self):
		return self.GetPropertyValue('UserGroup')
	@UserGroup.setter
	def UserGroup(self, newValue):
		self.SetPropertyValue('UserGroup', newValue)

	@property
	def InvalidAttempts(self):
		return self.GetPropertyValue('InvalidAttempts')

	@property
	def LastBlockedUserUTC_Ticks(self):
		return self.GetPropertyValue('LastBlockedUserUTC_Ticks')

	@property
	def Protocol(self):
		return self.GetPropertyValue('Protocol')

	@property
	def Separators(self):
		return self.GetPropertyValue('Separators')

	@property
	def CurrentStation(self):
		return self.GetPropertyValue('CurrentStation')

	@property
	def ReadTime(self):
		return self.GetPropertyValue('ReadTime')
	@ReadTime.setter
	def ReadTime(self, newValue):
		self.SetPropertyValue('ReadTime', newValue)

	@property
	def WriteTime(self):
		return self.GetPropertyValue('WriteTime')
	@WriteTime.setter
	def WriteTime(self, newValue):
		self.SetPropertyValue('WriteTime', newValue)

	@property
	def BranchSeparator(self):
		return self.GetPropertyValue('BranchSeparator')

	@property
	def AttributeSeparator(self):
		return self.GetPropertyValue('AttributeSeparator')

	@property
	def DisableCheckInvalidAssets(self):
		return self.GetPropertyValue('DisableCheckInvalidAssets')
	@DisableCheckInvalidAssets.setter
	def DisableCheckInvalidAssets(self, newValue):
		self.SetPropertyValue('DisableCheckInvalidAssets', newValue)

	@property
	def ConnectionStatus(self):
		return self.GetPropertyValue('ConnectionStatus')

	@property
	def IsHistorian(self):
		return self.GetPropertyValue('IsHistorian')

	# END PROPERTIES

	# START METHODS

	def ForceValue(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ForceValue', [p0])

	def ToString(self):
		return TKObjectMethod(self.GetToken(), 'ToString', [])

	def ToggleValue(self):
		return TKObjectMethod(self.GetToken(), 'ToggleValue', [])

	def GetValueAsString(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetValueAsString', [p0])

	def IsEnumeration(self):
		return TKObjectMethod(self.GetToken(), 'IsEnumeration', [])

	def GetEnumerationName(self):
		return TKObjectMethod(self.GetToken(), 'GetEnumerationName', [])

	def Update(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'Update', [p0])

	def RemoveRow(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'RemoveRow', [p0])

	def RemoveAll(self):
		return TKObjectMethod(self.GetToken(), 'RemoveAll', [])

	def GetRowsCount(self):
		return TKObjectMethod(self.GetToken(), 'GetRowsCount', [])

	def GetColumnsCount(self):
		return TKObjectMethod(self.GetToken(), 'GetColumnsCount', [])

	def GetJObject(self):
		return TKObjectMethod(self.GetToken(), 'GetJObject', [])

	def GetJArray(self):
		return TKObjectMethod(self.GetToken(), 'GetJArray', [])

	def DeserializeObject(self):
		return TKObjectMethod(self.GetToken(), 'DeserializeObject', [])

	def DeserializeObjectFromString(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'DeserializeObjectFromString', [p0])

	def OpenLayout(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'OpenLayout', [p0, p1])

	def Locale(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'Locale', [p0])

	def OpenDisplay(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'OpenDisplay', [p0, p1])

	def CloseDisplay(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'CloseDisplay', [p0])

	def LogOnAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'LogOn', [p0, p1])

	def LogOn(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'LogOn', [p0, p1])

	def LogOnGuestAsync(self):
		return TKObjectMethod(self.GetToken(), 'LogOnGuest', [])

	def LogOnGuest(self):
		return TKObjectMethod(self.GetToken(), 'LogOnGuest', [])

	def ChangeUserPasswordAsync(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ChangeUserPasswordAsync', [p0, p1, p2])

	def PrintDisplay(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'PrintDisplay', [p0, p1])

	def PrintLayout(self):
		return TKObjectMethod(self.GetToken(), 'PrintLayout', [])

	def OpenQuickNote(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'OpenQuickNote', [p0, p1, p2, p3, p4])

	def OpenDisplayAtIndex(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'OpenDisplayAtIndex', [p0, p1])

	def SaveLayoutAsImageFile(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SaveLayoutAsImageFile', [p0])

	def GetPasswordHintAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetPasswordHintAsync', [p0])

	def OpenPreviousPage(self):
		return TKObjectMethod(self.GetToken(), 'OpenPreviousPage', [])

	def SwitchToStandby(self):
		return TKObjectMethod(self.GetToken(), 'SwitchToStandby', [])

	def SetLocalization(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SetLocalization', [p0])

	def IsDisplayOpen(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'IsDisplayOpen', [p0])

	def PrintDisplayDefaultPrinter(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'PrintDisplayDefaultPrinter', [p0, p1])

	def SaveDisplayAsImageFile(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SaveDisplayAsImageFile', [p0, p1])

	def GetCursorX(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetCursorX', [p0])

	def GetCursorY(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetCursorY', [p0])

	def PrintLayoutDefaultPrinter(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'PrintLayoutDefaultPrinter', [p0])

	def AddDisplayInCacheList(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'AddDisplayInCacheList', [p0])

	def SetMainWindowSize(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SetMainWindowSize', [p0, p1])

	def IsDisplayOpeningExecuted(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'IsDisplayOpeningExecuted', [p0])

	def SaveScreenAsImageFile(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SaveScreenAsImageFile', [p0])

	def PrintScreenDefaultPrinter(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'PrintScreenDefaultPrinter', [p0])

	def NewPopup(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'NewPopup', [p0, p1])

	def SetBlockedUserAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SetBlockedUserAsync', [p0, p1])

	def SetDeletedUserAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SetDeletedUserAsync', [p0, p1])

	def SaveDisplayAsPngFile(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SaveDisplayAsPngFile', [p0, p1])

	def LoadSolutionVersion(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'LoadSolutionVersion', [p0])

	def ShutdownCommand(self):
		return TKObjectMethod(self.GetToken(), 'ShutdownCommand', [])

	def GetComputerIP(self):
		return TKObjectMethod(self.GetToken(), 'GetComputerIP', [])

	def RunAndSaveDiagnostics(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'RunAndSaveDiagnostics', [p0])

	def GetClientConnections(self):
		return TKObjectMethod(self.GetToken(), 'GetClientConnections', [])

	def GetAllConnections(self):
		return TKObjectMethod(self.GetToken(), 'GetAllConnections', [])

	def CloseConnection(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'CloseConnection', [p0, p1])

	def SaveToTextFile(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___', p5 = '___Undefined___', p6 = '___Undefined___', p7 = '___Undefined___', p8 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SaveToTextFile', [p0, p1, p2, p3, p4, p5, p6, p7, p8])

	def AckAllWithComments(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'AckAllWithComments', [p0])

	def AckAllWithCommentsAsync(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'AckAllWithCommentsAsync', [p0, p1, p2])

	def GetItemList(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetItemList', [p0])

	def VerifyDBConnection(self):
		return TKObjectMethod(self.GetToken(), 'VerifyDBConnection', [])

	def ForceAcknowledge(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___', p5 = '___Undefined___', p6 = '___Undefined___', p7 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ForceAcknowledge', [p0, p1, p2, p3, p4, p5, p6, p7])

	def GetChildrenAreas(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetChildrenAreas', [p0])

	def GetFilter(self):
		return TKObjectMethod(self.GetToken(), 'GetFilter', [])

	def GetObjectList(self):
		return TKObjectMethod(self.GetToken(), 'GetObjectList', [])

	def ForceTrigger(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ForceTrigger', [p0, p1, p2, p3])

	def DeleteSamples(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'DeleteSamples', [p0, p1])

	def CopySettingsFromSourceDB(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'CopySettingsFromSourceDB', [p0])

	def InitializeCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'InitializeCommandAsync', [])

	def LoadCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'LoadCommandAsync', [])

	def SaveCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'SaveCommandAsync', [])

	def DeleteCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'DeleteCommandAsync', [])

	def SelectCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'SelectCommandAsync', [])

	def NextCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'NextCommandAsync', [])

	def InsertCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'InsertCommandAsync', [])

	def UpdateCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'UpdateCommandAsync', [])

	def SelectCommandWithStatusAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SelectCommandWithStatusAsync', [p0])

	def UpdateCommandWithStatusAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'UpdateCommandWithStatusAsync', [p0])

	def UpdateFromDataTableAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'UpdateFromDataTableAsync', [p0, p1])

	def UpdateFromDataTableWithStatusAsync(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'UpdateFromDataTableWithStatusAsync', [p0, p1, p2])

	def ReplaceAllContentsAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ReplaceAllContentsAsync', [p0])

	def ReplaceAllContentsWithStatusAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ReplaceAllContentsWithStatusAsync', [p0, p1])

	def BeginSelectCommandAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'BeginSelectCommandAsync', [p0])

	def EndSelectCommand(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'EndSelectCommand', [p0])

	def ExecuteCommandAsync(self):
		return TKObjectMethod(self.GetToken(), 'ExecuteCommandAsync', [])

	def Start(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'Start', [p0])

	def Stop(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'Stop', [p0])

	def BeginStop(self):
		return TKObjectMethod(self.GetToken(), 'BeginStop', [])

	def ForceReadTrigger(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ForceReadTrigger', [p0])

	def ForceWriteTrigger(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ForceWriteTrigger', [p0])

	def Open(self):
		return TKObjectMethod(self.GetToken(), 'Open', [])

	def Close(self):
		return TKObjectMethod(self.GetToken(), 'Close', [])

	def OpenModal(self):
		return TKObjectMethod(self.GetToken(), 'OpenModal', [])

	def GetCustomPropertyValue(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetCustomPropertyValue', [p0, p1])

	def SetCustomPropertyValue(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SetCustomPropertyValue', [p0, p1])

	def RemoveAllCustomProperties(self):
		return TKObjectMethod(self.GetToken(), 'RemoveAllCustomProperties', [])

	def GetCustomPropertiesAsString(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetCustomPropertiesAsString', [p0])

	def SetCustomProperties(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SetCustomProperties', [p0, p1])

	def ForceRedundancyRefreshValues(self):
		return TKObjectMethod(self.GetToken(), 'ForceRedundancyRefreshValues', [])

	def Trace(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'Trace', [p0, p1, p2, p3, p4])

	def GetExecutionFolder(self):
		return TKObjectMethod(self.GetToken(), 'GetExecutionFolder', [])

	def GetExecutionPath(self):
		return TKObjectMethod(self.GetToken(), 'GetExecutionPath', [])

	def GetTypeDefintion(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetTypeDefintion', [p0])

	def GetSerialNumber(self):
		return TKObjectMethod(self.GetToken(), 'GetSerialNumber', [])

	def GetProductPath(self):
		return TKObjectMethod(self.GetToken(), 'GetProductPath', [])

	def OpenCommand(self):
		return TKObjectMethod(self.GetToken(), 'OpenCommand', [])

	def SaveCommandWithOrientationAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'SaveCommandWithOrientationAsync', [p0])

	def GetPageCount(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetPageCount', [p0])

	def LoadCommandWithStatusAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'LoadCommandWithStatusAsync', [p0])

	def GetRequestAsync(self):
		return TKObjectMethod(self.GetToken(), 'GetRequestAsync', [])

	def GetRequestWithStatusAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetRequestWithStatusAsync', [p0])

	def BeginGetRequestAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'BeginGetRequestAsync', [p0, p1])

	def EndGetRequest(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'EndGetRequest', [p0, p1])

	def PostRequestAsync(self):
		return TKObjectMethod(self.GetToken(), 'PostRequestAsync', [])

	def BeginPostRequestAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'BeginPostRequestAsync', [p0, p1])

	def EndPostRequest(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'EndPostRequest', [p0])

	def GetTaskEventCount(self):
		return TKObjectMethod(self.GetToken(), 'GetTaskEventCount', [])

	def CreateEvent(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'CreateEvent', [p0, p1, p2, p3])

	def GetEvent(self):
		return TKObjectMethod(self.GetToken(), 'GetEvent', [])

	def AddRuntimeUserAsync(self, p0 = '___Undefined___', p1 = '___Undefined___', p2 = '___Undefined___', p3 = '___Undefined___', p4 = '___Undefined___', p5 = '___Undefined___', p6 = '___Undefined___', p7 = '___Undefined___', p8 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'AddRuntimeUserAsync', [p0, p1, p2, p3, p4, p5, p6, p7, p8])

	def RemoveRuntimeUserAsync(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'RemoveRuntimeUserAsync', [p0])

	def GetListOfUserNames(self):
		return TKObjectMethod(self.GetToken(), 'GetListOfUserNames', [])

	def GetPasswordHint(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetPasswordHint', [p0])

	def GetListOfPermissionNamesOfUsers(self):
		return TKObjectMethod(self.GetToken(), 'GetListOfPermissionNamesOfUsers', [])

	def GetListOfPredefinedUserNames(self):
		return TKObjectMethod(self.GetToken(), 'GetListOfPredefinedUserNames', [])

	def GetListOfRuntimeUserNames(self):
		return TKObjectMethod(self.GetToken(), 'GetListOfRuntimeUserNames', [])

	def GetListOfPermissionNamesOfPredefinedUsers(self):
		return TKObjectMethod(self.GetToken(), 'GetListOfPermissionNamesOfPredefinedUsers', [])

	def GetListOfPermissionNamesOfRuntimeUsers(self):
		return TKObjectMethod(self.GetToken(), 'GetListOfPermissionNamesOfRuntimeUsers', [])

	def ValidateUser(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ValidateUser', [p0, p1])

	def NewRuntimeUserAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'NewRuntimeUserAsync', [p0, p1])

	def UpdateRuntimeUserAsync(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'UpdateRuntimeUserAsync', [p0, p1])

	def GetUsersAsync(self):
		return TKObjectMethod(self.GetToken(), 'GetUsersAsync', [])

	def ReloadRuntimeUsersAsync(self):
		return TKObjectMethod(self.GetToken(), 'ReloadRuntimeUsersAsync', [])

	def AddSessionPermission(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'AddSessionPermission', [p0])

	def RemoveSessionPermission(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'RemoveSessionPermission', [p0])

	def GetLocalTags(self):
		return TKObjectMethod(self.GetToken(), 'GetLocalTags', [])

	def GetGlobalTags(self):
		return TKObjectMethod(self.GetToken(), 'GetGlobalTags', [])

	def GetObject(self, p0 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'GetObject', [p0])

	def ForceActive(self, p0 = '___Undefined___', p1 = '___Undefined___'):
		return TKObjectMethod(self.GetToken(), 'ForceActive', [p0, p1])

	# END METHODS

