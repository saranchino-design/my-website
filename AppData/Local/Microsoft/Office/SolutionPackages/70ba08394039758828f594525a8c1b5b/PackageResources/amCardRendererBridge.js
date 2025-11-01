// Create the renderer
window.meCardRenderer = new MeRenderHelper.MeCardRenderer();

/////////// Native to JS ///////////
function executeNativeToJsEvent(eventType, eventPayload) {
  console.log(`NativeToJavaScript::
    eventType:${eventType},
    eventPayload:${eventPayload}`);

  // Pass the event to renderer
  window.meCardRenderer.postMessage(eventType, eventPayload);
}

window.executeEvent = (eventType, eventPayload) => {
  executeNativeToJsEvent(eventType, eventPayload);
}

/////////// JS to native ///////////
function executeJsToNativeEvent(eventType, eventPayload) {
  console.log(`JavaScriptToNative::
    eventType:${eventType},
    eventPayload:${eventPayload}`);

  // Pass the event to native (through OSF)
  window.external.Execute(1000, [eventType, eventPayload]);
}

window.amNativeRenderer = {
  notify: executeJsToNativeEvent
};