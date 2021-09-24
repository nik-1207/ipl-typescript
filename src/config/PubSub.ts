import { LoadingEvent } from '../event/LoadingEvent'

export function subscribe(eventClass: typeof LoadingEvent, handler: (isLoading: boolean) => void) {
  const modifiedHandler = (event: { [key: string]: any }) => {
    handler(event.detail)
  }
  document.addEventListener(eventClass.name, modifiedHandler, {
    passive: true,
  })
  return {
    unsubscribe: function unsubscribe() {
      document.removeEventListener(eventClass.name, modifiedHandler)
    },
  }
}

export function publish(event: LoadingEvent) {
  const nativeEvent = new CustomEvent(event.constructor.name, {
    detail: event.isLoading,
  })
  document.dispatchEvent(nativeEvent)
}
