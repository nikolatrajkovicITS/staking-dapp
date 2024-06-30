import { useContext } from 'react'

import modalContext from '@/context/modal/modal.context'

export default function useModalState() {
  const context = useContext(modalContext)

  if (!Object.keys(context).length) {
    throw new Error('ModalContext must be used within its provider')
  }

  return context
}
