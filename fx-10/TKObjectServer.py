from TKListObj import TKListObj

from TK import TK

class TKObjectServer():
	def __init__(self):
		self.DB = TKDB(self)
		self.TK = TK()

class TKDB():
	def __init__(self, objServer):
		self.objServer = objServer
		self.RunDB = TKRunDBRoot(objServer)

class TKRunDBRoot(TKListObj):
 	def __init__(self, objServer):
 		super().__init__()
 		self.objServer = objServer

class TKDocument():
	def __init__(self):
		self.ObjectServer = TKObjectServer()

document = TKDocument()

