import { DOMAttributes } from 'react'

declare module 'react' {
   interface HTMLAttributes<T> extends DOMAttributes<T> {
      customAttribute?: string
   }
}
