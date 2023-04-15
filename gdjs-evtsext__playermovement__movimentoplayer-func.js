
if (typeof gdjs.evtsExt__PlayerMovement__MovimentoPlayer !== "undefined") {
  gdjs.evtsExt__PlayerMovement__MovimentoPlayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlayerMovement__MovimentoPlayer = {};
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1= [];
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2= [];
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects3= [];


gdjs.evtsExt__PlayerMovement__MovimentoPlayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) + 50 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[k] = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 50 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[k] = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].getVariables().get("GoingRight")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].getY() > gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) + 50 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[k] = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2[i].getVariables().get("GoingUp")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getY() < gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 50 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[k] = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingDown")).setNumber(1);
}
}}

}


};gdjs.evtsExt__PlayerMovement__MovimentoPlayer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingUp")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingDown")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingLeft")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingRight")).setNumber(0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingUp")).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingDown")).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1[i].getVariables().get("GoingRight")).setNumber(1);
}
}}

}


};

gdjs.evtsExt__PlayerMovement__MovimentoPlayer.func = function(runtimeScene, Player, TopDownMovement, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
},
  _behaviorNamesMap: {
"TopDownMovement": TopDownMovement
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

gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects1.length = 0;
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects2.length = 0;
gdjs.evtsExt__PlayerMovement__MovimentoPlayer.GDPlayerObjects3.length = 0;

gdjs.evtsExt__PlayerMovement__MovimentoPlayer.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PlayerMovement__MovimentoPlayer.registeredGdjsCallbacks = [];