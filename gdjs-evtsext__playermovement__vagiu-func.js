
if (typeof gdjs.evtsExt__PlayerMovement__VaGiu !== "undefined") {
  gdjs.evtsExt__PlayerMovement__VaGiu.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlayerMovement__VaGiu = {};
gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1= [];
gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects2= [];


gdjs.evtsExt__PlayerMovement__VaGiu.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1[i].getVariableNumber(gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1[i].getVariables().get("GoingUp")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1[k] = gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1[i].getVariableNumber(gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1[i].getVariables().get("GoingDown")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1[k] = gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PlayerMovement__VaGiu.func = function(runtimeScene, Player, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects1.length = 0;
gdjs.evtsExt__PlayerMovement__VaGiu.GDPlayerObjects2.length = 0;

gdjs.evtsExt__PlayerMovement__VaGiu.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlayerMovement__VaGiu.registeredGdjsCallbacks = [];