#import sys
#installPath = "<FrameworX Install Path>"
#sysPath = ";".join(sys.path)
#if sysPath.find(installPath) < 0 :
#    sys.path.append(installPath)

import clr
from types import *
from System.Diagnostics import Process

clr.AddReference("T.Toolkit")
from T.Toolkit import TK
from T.Toolkit import DataAccess

class TKDataAccess():
    def __init__(self):
        self.runtimeHostAddress = ""
        self.userName = ""
        self.password = ""
        self.name = Process.GetCurrentProcess().ProcessName
        self.initialized = False
        self.connectionStatus = "Not connected"
        self.connectionIndex = 0
        self.dataAccess = None

    def GetConnectionStatus(self):
        return self.connectionStatus

    def IsConnected(self):
        if self.name.find("python") < 0 :
            return True
        return self.connectionIndex > 0 and self.dataAccess.IsConnected(self.connectionIndex)

    def Connect(self, _runtimeHostAddress, _userName, _password):
        self.runtimeHostAddress = _runtimeHostAddress
        self.userName = _userName
        self.password = _password

        if self.initialized :
            return self.connectionStatus
        if self.name.find("python") < 0 :
            self.connectionStatus = "OK"
            self.initialized = True
            return self.connectionStatus

        self.dataAccess = DataAccess()
        self.connectionStatus = self.dataAccess.SetServer(self.runtimeHostAddress, self.userName, self.password)
        if type(self.connectionStatus) == int :
            self.connectionIndex = self.connectionStatus
            self.connectionStatus = "OK"
            self.initialized = True
            self.dataAccess.PrepareTK(self.connectionIndex)
            self.SetSyncFlag(True)
        else:
            self.dataAccess = None

        return self.connectionStatus

    def Disconnect(self):
        if self.dataAccess != None :
            self.dataAccess.CloseServer(self.connectionIndex);
        self.initialized = False
        self.connectionStatus = "Not connected"
        self.connectionIndex = 0
        self.dataAccess = None

    def SetSyncFlag(self, flag):
        if self.dataAccess == None :
            return True
        return self.dataAccess.SetSyncFlag(flag)

    def GetObjectValue(self, name):
        return TK.GetObjectValue(name)

    def SetObjectValue(self, name, newValue):
        TK.SetObjectValue(name, newValue)

    def ExecuteClassMethodOnServer(self, className, methodName, parameters):
        return TK.ExecuteClassMethodOnServer(className, methodName, parameters)

