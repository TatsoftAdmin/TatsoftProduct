var T = T || {};
T.Kernel = T.Kernel || {};
T.Kernel.Core = T.Kernel.Core || {};

T.Kernel.Core.ObjectServer = class {

	constructor()
	{
		this.DB = new T.Kernel.Core.DB(this);
		this.TK = new T.Toolkit.TK(this);
  	}


 }

