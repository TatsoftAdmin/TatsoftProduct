var T = T || {};
T.Kernel = T.Kernel || {};
T.Kernel.Core = T.Kernel.Core || {};

T.Kernel.Core.DB = class {

	constructor(objServer)
  	{ 
		this.objServer = objServer;
		this.RunDB = new T.Kernel.Core.RunDBRoot(objServer);	
  	}


 }

