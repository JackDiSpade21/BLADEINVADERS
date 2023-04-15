gdjs.HomeCode = {};
gdjs.HomeCode.GDLOGOObjects1= [];
gdjs.HomeCode.GDLOGOObjects2= [];
gdjs.HomeCode.GDLOGOObjects3= [];
gdjs.HomeCode.GDLOGOObjects4= [];
gdjs.HomeCode.GDNewTextInputObjects1= [];
gdjs.HomeCode.GDNewTextInputObjects2= [];
gdjs.HomeCode.GDNewTextInputObjects3= [];
gdjs.HomeCode.GDNewTextInputObjects4= [];
gdjs.HomeCode.GDistruzioniObjects1= [];
gdjs.HomeCode.GDistruzioniObjects2= [];
gdjs.HomeCode.GDistruzioniObjects3= [];
gdjs.HomeCode.GDistruzioniObjects4= [];
gdjs.HomeCode.GDbentornatoObjects1= [];
gdjs.HomeCode.GDbentornatoObjects2= [];
gdjs.HomeCode.GDbentornatoObjects3= [];
gdjs.HomeCode.GDbentornatoObjects4= [];
gdjs.HomeCode.GDcambiaObjects1= [];
gdjs.HomeCode.GDcambiaObjects2= [];
gdjs.HomeCode.GDcambiaObjects3= [];
gdjs.HomeCode.GDcambiaObjects4= [];
gdjs.HomeCode.GDGIOCAObjects1= [];
gdjs.HomeCode.GDGIOCAObjects2= [];
gdjs.HomeCode.GDGIOCAObjects3= [];
gdjs.HomeCode.GDGIOCAObjects4= [];
gdjs.HomeCode.GDPurpleSpaceObjects1= [];
gdjs.HomeCode.GDPurpleSpaceObjects2= [];
gdjs.HomeCode.GDPurpleSpaceObjects3= [];
gdjs.HomeCode.GDPurpleSpaceObjects4= [];
gdjs.HomeCode.GDticketObjects1= [];
gdjs.HomeCode.GDticketObjects2= [];
gdjs.HomeCode.GDticketObjects3= [];
gdjs.HomeCode.GDticketObjects4= [];


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.loadJSONFileFromStorage("Memoria");
}{gdjs.evtTools.storage.readStringFromJSONFile("Memoria", "name", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Memoria", "score", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.unloadJSONFile("Memoria");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "name");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "score");
}{gdjs.evtTools.storage.clearJSONFile("Memoria");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Memoria", "name");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bentornato"), gdjs.HomeCode.GDbentornatoObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "nuovo utente");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "esistente");
}{for(var i = 0, len = gdjs.HomeCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDbentornatoObjects1[i].setBBText("[color=red]" + "[outline=black]" + "[align=center]" + "[b]" + "Bentornato " + "[color=black]" + "[outline=red]" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "[/color]" + "[/outline]" + "." + "[/align]" + "[align=center]" + gdjs.evtTools.string.newLine() + "[b]" + "Il tuo record è " + "[color=black]" + "[outline=red]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) + "[/color]" + "[/outline]" + "[color=red]" + "[outline=black]" + "." + "[/b]" + "[/align]" + "[/outline]" + "[/color]");
}
}{for(var i = 0, len = gdjs.HomeCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDbentornatoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}}

}


};gdjs.HomeCode.asyncCallback17934412 = function (runtimeScene, asyncObjectsList) {
}
gdjs.HomeCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.HomeCode.asyncCallback17934412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

};gdjs.HomeCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


const keyIteratorReference3 = runtimeScene.getScene().getVariables().get("i");
const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("doc");
const iterableReference3 = runtimeScene.getScene().getVariables().get("risultato").getChild("docs");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("score")));
}{runtimeScene.getGame().getVariables().get("nomeonline").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("name")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("id")));
}}
}
}

}


};gdjs.HomeCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("risultato").getChild("empty"), true);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("nomeonline").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("score").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{gdjs.evtTools.firebaseTools.firestore.writeDocument("players", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name")), runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().get("ok"));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Memoria", "score", 0);
}{gdjs.evtTools.storage.writeStringInJSONFile("Memoria", "name", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("risultato").getChild("empty"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.HomeCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.HomeCode.asyncCallback17931460 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gioco", true);
}
{ //Subevents
gdjs.HomeCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.HomeCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.HomeCode.asyncCallback17931460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.HomeCode.GDGIOCAObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDGIOCAObjects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDGIOCAObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDGIOCAObjects2[k] = gdjs.HomeCode.GDGIOCAObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDGIOCAObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.HomeCode.GDNewTextInputObjects2);
{gdjs.evtTools.firebaseTools.analytics.log("partite giocate", "");
}{runtimeScene.getGame().getVariables().get("name").setString((( gdjs.HomeCode.GDNewTextInputObjects2.length === 0 ) ? "" :gdjs.HomeCode.GDNewTextInputObjects2[0].getString()));
}{runtimeScene.getGame().getVariables().get("name").setString(gdjs.evtsExt__InputValidation__ToAlphanumerical.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "classifica", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.HomeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.HomeCode.GDGIOCAObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDGIOCAObjects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDGIOCAObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDGIOCAObjects2[k] = gdjs.HomeCode.GDGIOCAObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDGIOCAObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")) == "";
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "name");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "score");
}{gdjs.evtTools.storage.clearJSONFile("Memoria");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gioco", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.HomeCode.GDGIOCAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDGIOCAObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDGIOCAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDGIOCAObjects1[k] = gdjs.HomeCode.GDGIOCAObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDGIOCAObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")) != "";
}
if (isConditionTrue_0) {
/* Reuse gdjs.HomeCode.GDGIOCAObjects1 */
{gdjs.evtTools.firebaseTools.firestore.startQuery("ControlloUtente", "players");
}{gdjs.evtTools.firebaseTools.firestore.queryWhere("ControlloUtente", "name", "==", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("name")));
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("ControlloUtente", runtimeScene.getScene().getVariables().get("risultato"), runtimeScene.getScene().getVariables().get("ok"));
}{for(var i = 0, len = gdjs.HomeCode.GDGIOCAObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDGIOCAObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HomeCode.GDGIOCAObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDGIOCAObjects1[i].setY(gdjs.HomeCode.GDGIOCAObjects1[i].getY() - (1500));
}
}
{ //Subevents
gdjs.HomeCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcambiaObjects1Objects = Hashtable.newFrom({"cambia": gdjs.HomeCode.GDcambiaObjects1});
gdjs.HomeCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cambia"), gdjs.HomeCode.GDcambiaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "esistente");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcambiaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "name");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "score");
}{gdjs.evtTools.storage.clearJSONFile("Memoria");
}{gdjs.evtsExt__URLTools__Reload.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.HomeCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PurpleSpace"), gdjs.HomeCode.GDPurpleSpaceObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDPurpleSpaceObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDPurpleSpaceObjects1[i].setYOffset(gdjs.HomeCode.GDPurpleSpaceObjects1[i].getYOffset() - (5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.HomeCode.GDGIOCAObjects1);
gdjs.copyArray(runtimeScene.getObjects("LOGO"), gdjs.HomeCode.GDLOGOObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.HomeCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("bentornato"), gdjs.HomeCode.GDbentornatoObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambia"), gdjs.HomeCode.GDcambiaObjects1);
gdjs.copyArray(runtimeScene.getObjects("istruzioni"), gdjs.HomeCode.GDistruzioniObjects1);
gdjs.copyArray(runtimeScene.getObjects("ticket"), gdjs.HomeCode.GDticketObjects1);
{firebase.analytics();
}{for(var i = 0, len = gdjs.HomeCode.GDNewTextInputObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDNewTextInputObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.HomeCode.GDistruzioniObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDistruzioniObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.HomeCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDbentornatoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.HomeCode.GDcambiaObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDcambiaObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.HomeCode.GDGIOCAObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDGIOCAObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.HomeCode.GDticketObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDticketObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.HomeCode.GDLOGOObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLOGOObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "classifica", "/endgame.html", 720, 300, 0, 500, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ticket"), gdjs.HomeCode.GDticketObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDticketObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDticketObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDticketObjects1[k] = gdjs.HomeCode.GDticketObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDticketObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.analytics.log("click su ticket", "");
}{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://www.youtube.com/watch?v=dQw4w9WgXcQ", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.HomeCode.eventsList0(runtimeScene);
}


{


gdjs.HomeCode.eventsList6(runtimeScene);
}


{


gdjs.HomeCode.eventsList7(runtimeScene);
}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDLOGOObjects1.length = 0;
gdjs.HomeCode.GDLOGOObjects2.length = 0;
gdjs.HomeCode.GDLOGOObjects3.length = 0;
gdjs.HomeCode.GDLOGOObjects4.length = 0;
gdjs.HomeCode.GDNewTextInputObjects1.length = 0;
gdjs.HomeCode.GDNewTextInputObjects2.length = 0;
gdjs.HomeCode.GDNewTextInputObjects3.length = 0;
gdjs.HomeCode.GDNewTextInputObjects4.length = 0;
gdjs.HomeCode.GDistruzioniObjects1.length = 0;
gdjs.HomeCode.GDistruzioniObjects2.length = 0;
gdjs.HomeCode.GDistruzioniObjects3.length = 0;
gdjs.HomeCode.GDistruzioniObjects4.length = 0;
gdjs.HomeCode.GDbentornatoObjects1.length = 0;
gdjs.HomeCode.GDbentornatoObjects2.length = 0;
gdjs.HomeCode.GDbentornatoObjects3.length = 0;
gdjs.HomeCode.GDbentornatoObjects4.length = 0;
gdjs.HomeCode.GDcambiaObjects1.length = 0;
gdjs.HomeCode.GDcambiaObjects2.length = 0;
gdjs.HomeCode.GDcambiaObjects3.length = 0;
gdjs.HomeCode.GDcambiaObjects4.length = 0;
gdjs.HomeCode.GDGIOCAObjects1.length = 0;
gdjs.HomeCode.GDGIOCAObjects2.length = 0;
gdjs.HomeCode.GDGIOCAObjects3.length = 0;
gdjs.HomeCode.GDGIOCAObjects4.length = 0;
gdjs.HomeCode.GDPurpleSpaceObjects1.length = 0;
gdjs.HomeCode.GDPurpleSpaceObjects2.length = 0;
gdjs.HomeCode.GDPurpleSpaceObjects3.length = 0;
gdjs.HomeCode.GDPurpleSpaceObjects4.length = 0;
gdjs.HomeCode.GDticketObjects1.length = 0;
gdjs.HomeCode.GDticketObjects2.length = 0;
gdjs.HomeCode.GDticketObjects3.length = 0;
gdjs.HomeCode.GDticketObjects4.length = 0;

gdjs.HomeCode.eventsList8(runtimeScene);

return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
