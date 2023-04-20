gdjs.FineCode = {};
gdjs.FineCode.GDgrazieObjects1= [];
gdjs.FineCode.GDgrazieObjects2= [];
gdjs.FineCode.GDgrazieObjects3= [];
gdjs.FineCode.GDwinnersObjects1= [];
gdjs.FineCode.GDwinnersObjects2= [];
gdjs.FineCode.GDwinnersObjects3= [];
gdjs.FineCode.GDdescrObjects1= [];
gdjs.FineCode.GDdescrObjects2= [];
gdjs.FineCode.GDdescrObjects3= [];
gdjs.FineCode.GDPurpleSpaceObjects1= [];
gdjs.FineCode.GDPurpleSpaceObjects2= [];
gdjs.FineCode.GDPurpleSpaceObjects3= [];
gdjs.FineCode.GDLOGOObjects1= [];
gdjs.FineCode.GDLOGOObjects2= [];
gdjs.FineCode.GDLOGOObjects3= [];
gdjs.FineCode.GDPlayerendObjects1= [];
gdjs.FineCode.GDPlayerendObjects2= [];
gdjs.FineCode.GDPlayerendObjects3= [];
gdjs.FineCode.GDfirstObjects1= [];
gdjs.FineCode.GDfirstObjects2= [];
gdjs.FineCode.GDfirstObjects3= [];
gdjs.FineCode.GDfirst2Objects1= [];
gdjs.FineCode.GDfirst2Objects2= [];
gdjs.FineCode.GDfirst2Objects3= [];
gdjs.FineCode.GDfirst22Objects1= [];
gdjs.FineCode.GDfirst22Objects2= [];
gdjs.FineCode.GDfirst22Objects3= [];
gdjs.FineCode.GDboxObjects1= [];
gdjs.FineCode.GDboxObjects2= [];
gdjs.FineCode.GDboxObjects3= [];
gdjs.FineCode.GDname1Objects1= [];
gdjs.FineCode.GDname1Objects2= [];
gdjs.FineCode.GDname1Objects3= [];
gdjs.FineCode.GDname2Objects1= [];
gdjs.FineCode.GDname2Objects2= [];
gdjs.FineCode.GDname2Objects3= [];
gdjs.FineCode.GDname3Objects1= [];
gdjs.FineCode.GDname3Objects2= [];
gdjs.FineCode.GDname3Objects3= [];
gdjs.FineCode.GDpuntiObjects1= [];
gdjs.FineCode.GDpuntiObjects2= [];
gdjs.FineCode.GDpuntiObjects3= [];
gdjs.FineCode.GDpoint1Objects1= [];
gdjs.FineCode.GDpoint1Objects2= [];
gdjs.FineCode.GDpoint1Objects3= [];
gdjs.FineCode.GDpoint2Objects1= [];
gdjs.FineCode.GDpoint2Objects2= [];
gdjs.FineCode.GDpoint2Objects3= [];
gdjs.FineCode.GDpoint3Objects1= [];
gdjs.FineCode.GDpoint3Objects2= [];
gdjs.FineCode.GDpoint3Objects3= [];
gdjs.FineCode.GDPRIMOObjects1= [];
gdjs.FineCode.GDPRIMOObjects2= [];
gdjs.FineCode.GDPRIMOObjects3= [];
gdjs.FineCode.GDprimofotoObjects1= [];
gdjs.FineCode.GDprimofotoObjects2= [];
gdjs.FineCode.GDprimofotoObjects3= [];
gdjs.FineCode.GDseconfotoObjects1= [];
gdjs.FineCode.GDseconfotoObjects2= [];
gdjs.FineCode.GDseconfotoObjects3= [];
gdjs.FineCode.GDterzfotoObjects1= [];
gdjs.FineCode.GDterzfotoObjects2= [];
gdjs.FineCode.GDterzfotoObjects3= [];
gdjs.FineCode.GDHomeObjects1= [];
gdjs.FineCode.GDHomeObjects2= [];
gdjs.FineCode.GDHomeObjects3= [];


gdjs.FineCode.mapOfGDgdjs_46FineCode_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.FineCode.GDHomeObjects1});
gdjs.FineCode.mapOfGDgdjs_46FineCode_46GDPRIMOObjects2Objects = Hashtable.newFrom({"PRIMO": gdjs.FineCode.GDPRIMOObjects2});
gdjs.FineCode.mapOfGDgdjs_46FineCode_46GDPRIMOObjects2Objects = Hashtable.newFrom({"PRIMO": gdjs.FineCode.GDPRIMOObjects2});
gdjs.FineCode.mapOfGDgdjs_46FineCode_46GDPRIMOObjects1Objects = Hashtable.newFrom({"PRIMO": gdjs.FineCode.GDPRIMOObjects1});
gdjs.FineCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PRIMO"), gdjs.FineCode.GDPRIMOObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FineCode.mapOfGDgdjs_46FineCode_46GDPRIMOObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FineCode.GDPRIMOObjects2.length;i<l;++i) {
    if ( gdjs.FineCode.GDPRIMOObjects2[i].getVariableNumber(gdjs.FineCode.GDPRIMOObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.FineCode.GDPRIMOObjects2[k] = gdjs.FineCode.GDPRIMOObjects2[i];
        ++k;
    }
}
gdjs.FineCode.GDPRIMOObjects2.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://www.instagram.com/flaschmidt/", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PRIMO"), gdjs.FineCode.GDPRIMOObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FineCode.mapOfGDgdjs_46FineCode_46GDPRIMOObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FineCode.GDPRIMOObjects2.length;i<l;++i) {
    if ( gdjs.FineCode.GDPRIMOObjects2[i].getVariableNumber(gdjs.FineCode.GDPRIMOObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.FineCode.GDPRIMOObjects2[k] = gdjs.FineCode.GDPRIMOObjects2[i];
        ++k;
    }
}
gdjs.FineCode.GDPRIMOObjects2.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://www.instagram.com/___ironia/", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PRIMO"), gdjs.FineCode.GDPRIMOObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FineCode.mapOfGDgdjs_46FineCode_46GDPRIMOObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FineCode.GDPRIMOObjects1.length;i<l;++i) {
    if ( gdjs.FineCode.GDPRIMOObjects1[i].getVariableNumber(gdjs.FineCode.GDPRIMOObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.FineCode.GDPRIMOObjects1[k] = gdjs.FineCode.GDPRIMOObjects1[i];
        ++k;
    }
}
gdjs.FineCode.GDPRIMOObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://www.instagram.com/damiano.mercia/", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.FineCode.asyncCallback14215844 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), false);
}}
gdjs.FineCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.FineCode.asyncCallback14215844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FineCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tick") >= 7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14876388);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tick");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
}
{ //Subevents
gdjs.FineCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("descr"), gdjs.FineCode.GDdescrObjects2);
{for(var i = 0, len = gdjs.FineCode.GDdescrObjects2.length ;i < len;++i) {
    gdjs.FineCode.GDdescrObjects2[i].setOpacity(gdjs.FineCode.GDdescrObjects2[i].getOpacity() - (600 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("descr"), gdjs.FineCode.GDdescrObjects1);
{for(var i = 0, len = gdjs.FineCode.GDdescrObjects1.length ;i < len;++i) {
    gdjs.FineCode.GDdescrObjects1[i].setOpacity(gdjs.FineCode.GDdescrObjects1[i].getOpacity() + (600 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.FineCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14261588);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("descr"), gdjs.FineCode.GDdescrObjects2);
{for(var i = 0, len = gdjs.FineCode.GDdescrObjects2.length ;i < len;++i) {
    gdjs.FineCode.GDdescrObjects2[i].setBBText("[b]" + "[color=black]" + "[outline=red]" + "Avete distrutto più di " + "[/outline]" + "[/color]" + "[color=red]" + "[outline=black]" + "90.000" + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + " nemici!" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "E siete morti solo " + "[/outline]" + "[/color]" + "[color=red]" + "[outline=black]" + "650 " + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + "volte!" + "[/outline]" + "[/color]" + "[/b]");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18464044);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("descr"), gdjs.FineCode.GDdescrObjects2);
{for(var i = 0, len = gdjs.FineCode.GDdescrObjects2.length ;i < len;++i) {
    gdjs.FineCode.GDdescrObjects2[i].setBBText("[b]" + "[color=black]" + "[outline=red]" + "Avete raccolto più di " + "[/outline]" + "[/color]" + "[color=red]" + "[outline=black]" + "2300" + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + " powerups!" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "E ben " + "[/outline]" + "[/color]" + "[color=red]" + "[outline=black]" + "700" + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + " satelliti!" + "[/outline]" + "[/color]" + "[/b]");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17156716);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("descr"), gdjs.FineCode.GDdescrObjects2);
{for(var i = 0, len = gdjs.FineCode.GDdescrObjects2.length ;i < len;++i) {
    gdjs.FineCode.GDdescrObjects2[i].setBBText("[b]" + "[color=black]" + "[outline=red]" + "Avete giocato più di " + "[/outline]" + "[/color]" + "[color=red]" + "[outline=black]" + "1000" + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + " partite!" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "E dopo avete abbandonato ben " + "[/outline]" + "[/color]" + "[color=red]" + "[outline=black]" + "250" + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + " volte!" + "[/outline]" + "[/color]" + "[/b]");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15038516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("descr"), gdjs.FineCode.GDdescrObjects2);
{for(var i = 0, len = gdjs.FineCode.GDdescrObjects2.length ;i < len;++i) {
    gdjs.FineCode.GDdescrObjects2[i].setBBText("[b]" + "[color=black]" + "[outline=red]" + "Avete cliccato più volte sul " + "[/outline]" + "[/color]" + "[color=red]" + "[outline=black]" + "disco di Lucas" + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + " che sul " + "[color=red]" + "[outline=black]" + "ticket di Satellite!" + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + "" + "[/outline]" + "[/color]" + "[/b]");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12412044);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("descr"), gdjs.FineCode.GDdescrObjects1);
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "tick");
}{for(var i = 0, len = gdjs.FineCode.GDdescrObjects1.length ;i < len;++i) {
    gdjs.FineCode.GDdescrObjects1[i].setBBText("[b]" + "[color=black]" + "[outline=red]" + "Grazie per avere giocato, ci vediamo " + "[color=red]" + "[outline=black]" + "la prossima volta" + "[/outline]" + "[/color]" + "[color=black]" + "[outline=red]" + "!" + "[/outline]" + "[/color]" + "[/b]");
}
}}

}


};gdjs.FineCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("first"), gdjs.FineCode.GDfirstObjects1);
gdjs.copyArray(runtimeScene.getObjects("grazie"), gdjs.FineCode.GDgrazieObjects1);
gdjs.copyArray(runtimeScene.getObjects("winners"), gdjs.FineCode.GDwinnersObjects1);
{firebase.analytics();
}{for(var i = 0, len = gdjs.FineCode.GDfirstObjects1.length ;i < len;++i) {
    gdjs.FineCode.GDfirstObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.FineCode.GDgrazieObjects1.length ;i < len;++i) {
    gdjs.FineCode.GDgrazieObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.FineCode.GDwinnersObjects1.length ;i < len;++i) {
    gdjs.FineCode.GDwinnersObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tick");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.FineCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FineCode.mapOfGDgdjs_46FineCode_46GDHomeObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PurpleSpace"), gdjs.FineCode.GDPurpleSpaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("descr"), gdjs.FineCode.GDdescrObjects1);
{for(var i = 0, len = gdjs.FineCode.GDPurpleSpaceObjects1.length ;i < len;++i) {
    gdjs.FineCode.GDPurpleSpaceObjects1[i].setYOffset(gdjs.FineCode.GDPurpleSpaceObjects1[i].getYOffset() - (8));
}
}{for(var i = 0, len = gdjs.FineCode.GDdescrObjects1.length ;i < len;++i) {
    gdjs.FineCode.GDdescrObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


gdjs.FineCode.eventsList0(runtimeScene);
}


{


gdjs.FineCode.eventsList2(runtimeScene);
}


{


gdjs.FineCode.eventsList3(runtimeScene);
}


};

gdjs.FineCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FineCode.GDgrazieObjects1.length = 0;
gdjs.FineCode.GDgrazieObjects2.length = 0;
gdjs.FineCode.GDgrazieObjects3.length = 0;
gdjs.FineCode.GDwinnersObjects1.length = 0;
gdjs.FineCode.GDwinnersObjects2.length = 0;
gdjs.FineCode.GDwinnersObjects3.length = 0;
gdjs.FineCode.GDdescrObjects1.length = 0;
gdjs.FineCode.GDdescrObjects2.length = 0;
gdjs.FineCode.GDdescrObjects3.length = 0;
gdjs.FineCode.GDPurpleSpaceObjects1.length = 0;
gdjs.FineCode.GDPurpleSpaceObjects2.length = 0;
gdjs.FineCode.GDPurpleSpaceObjects3.length = 0;
gdjs.FineCode.GDLOGOObjects1.length = 0;
gdjs.FineCode.GDLOGOObjects2.length = 0;
gdjs.FineCode.GDLOGOObjects3.length = 0;
gdjs.FineCode.GDPlayerendObjects1.length = 0;
gdjs.FineCode.GDPlayerendObjects2.length = 0;
gdjs.FineCode.GDPlayerendObjects3.length = 0;
gdjs.FineCode.GDfirstObjects1.length = 0;
gdjs.FineCode.GDfirstObjects2.length = 0;
gdjs.FineCode.GDfirstObjects3.length = 0;
gdjs.FineCode.GDfirst2Objects1.length = 0;
gdjs.FineCode.GDfirst2Objects2.length = 0;
gdjs.FineCode.GDfirst2Objects3.length = 0;
gdjs.FineCode.GDfirst22Objects1.length = 0;
gdjs.FineCode.GDfirst22Objects2.length = 0;
gdjs.FineCode.GDfirst22Objects3.length = 0;
gdjs.FineCode.GDboxObjects1.length = 0;
gdjs.FineCode.GDboxObjects2.length = 0;
gdjs.FineCode.GDboxObjects3.length = 0;
gdjs.FineCode.GDname1Objects1.length = 0;
gdjs.FineCode.GDname1Objects2.length = 0;
gdjs.FineCode.GDname1Objects3.length = 0;
gdjs.FineCode.GDname2Objects1.length = 0;
gdjs.FineCode.GDname2Objects2.length = 0;
gdjs.FineCode.GDname2Objects3.length = 0;
gdjs.FineCode.GDname3Objects1.length = 0;
gdjs.FineCode.GDname3Objects2.length = 0;
gdjs.FineCode.GDname3Objects3.length = 0;
gdjs.FineCode.GDpuntiObjects1.length = 0;
gdjs.FineCode.GDpuntiObjects2.length = 0;
gdjs.FineCode.GDpuntiObjects3.length = 0;
gdjs.FineCode.GDpoint1Objects1.length = 0;
gdjs.FineCode.GDpoint1Objects2.length = 0;
gdjs.FineCode.GDpoint1Objects3.length = 0;
gdjs.FineCode.GDpoint2Objects1.length = 0;
gdjs.FineCode.GDpoint2Objects2.length = 0;
gdjs.FineCode.GDpoint2Objects3.length = 0;
gdjs.FineCode.GDpoint3Objects1.length = 0;
gdjs.FineCode.GDpoint3Objects2.length = 0;
gdjs.FineCode.GDpoint3Objects3.length = 0;
gdjs.FineCode.GDPRIMOObjects1.length = 0;
gdjs.FineCode.GDPRIMOObjects2.length = 0;
gdjs.FineCode.GDPRIMOObjects3.length = 0;
gdjs.FineCode.GDprimofotoObjects1.length = 0;
gdjs.FineCode.GDprimofotoObjects2.length = 0;
gdjs.FineCode.GDprimofotoObjects3.length = 0;
gdjs.FineCode.GDseconfotoObjects1.length = 0;
gdjs.FineCode.GDseconfotoObjects2.length = 0;
gdjs.FineCode.GDseconfotoObjects3.length = 0;
gdjs.FineCode.GDterzfotoObjects1.length = 0;
gdjs.FineCode.GDterzfotoObjects2.length = 0;
gdjs.FineCode.GDterzfotoObjects3.length = 0;
gdjs.FineCode.GDHomeObjects1.length = 0;
gdjs.FineCode.GDHomeObjects2.length = 0;
gdjs.FineCode.GDHomeObjects3.length = 0;

gdjs.FineCode.eventsList4(runtimeScene);

return;

}

gdjs['FineCode'] = gdjs.FineCode;
