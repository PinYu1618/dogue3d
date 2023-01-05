import { useEffect } from 'react'
import Router from 'next/router'
import { useBeforeUnload } from 'react-use'

export const useLeavePageConfirm = (
  cb?: Function,
  isConfirm = true,
  message = 'Are you sure want to leave this page?'
) => {
  useBeforeUnload(isConfirm, message)

  useEffect(() => {
    const handler = () => {
      if (isConfirm && !window.confirm(message)) {
        throw 'Route Canceled'
      } else {
        cb && cb()
      }
    }

    Router.events.on('beforeHistoryChange', handler)

    return () => {
      Router.events.off('beforeHistoryChange', handler)
    }
  }, [isConfirm, message])
}
