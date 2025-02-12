//Keep the 2 next lines
this.T = this.T || {};
this.T.HTML5 = this.T.HTML5 || {};

T.HTML5.Calendar = function () {
	var parameters;
	var updateCallback;
	var subId;
	var inp;
	var CalendarObj;

	this.OnInitializeControl = function (control, _parameters, _updateCallback) {
		//debugger;

		parameters = _parameters;
		updateCallback = _updateCallback;

		subId = control.id + "_element";

		var arrayOfStrings = parameters.split(';');

		inp = document.createElement("DIV");
		inp.id = subId;

		control.appendChild(inp);

		inp.style.height = control.style.height;
		inp.style.width = control.style.width;

		CalendarObj = new ej.calendars.Calendar({
			height: String(control.height) + 'px',
        		width: String(control.width)  + 'px',
			dayHeaderFormat: arrayOfStrings[0].substring(("DayHeaderFormat=").length),
			depth: arrayOfStrings[1].substring(("Depth=").length),
			weekNumber: (arrayOfStrings[2].substring(("WeekNumber=").length) === 'True'),
		});

		CalendarObj.addEventListener("change", this.LocalPropertyChange, false);

		CalendarObj.appendTo('#' + subId)

		return true;
	};

	this.OnDisposeControl = function (control) {
		//debugger;

		CalendarObj.removeEventListener("change", this.LocalPropertyChange);

		control.removeChild(control.childNodes[0]);
	};

	this.SetPropertyValue = function (parameter, newValue) {
		//debugger;

		if (parameter == 'LinkedValue')
			CalendarObj.value = newValue;
	}

	this.LocalPropertyChange = function (parameter) {
		//debugger;

		if (parameter.name == 'change') {
			updateCallback("LinkedValue", parameter.value);
		}
	}
}

/*
					ADICIONAR ESTE CALLBACK

this.OnSizeChangedControl = function(control)
{
	if (control.Uid == "Pie1")
	{
		var pie1 = $("#" + control.id);
		pie1.data("kendoChart").resize();
	}
	if (control.Uid == "Gantt1")
	{
		var gantt1 = $("#" + control.id).data("ejGantt");
		if (gantt1 != null)
		{
			gantt1.windowResize();
		}
	}
}

*/