export function subscribe(eventClass: any, handler: any) {
  const modifiedHandler = (event: any) => {
    handler(event.detail);
  };
  document.addEventListener(eventClass.name, modifiedHandler, {
    passive: true,
  });
  return {
    unsubscribe: function unsubscribe() {
      document.removeEventListener(eventClass.name, handler);
    },
  };
}

export function publish(event:any) {
  let nativeEvent = new CustomEvent(event.constructor.name, {
    detail: event.args,
  });
  document.dispatchEvent(nativeEvent);
}
