/**
 * Function to do list box behavior
 * @param listBox
 */
const listBoxBehavior = (listBox: HTMLUListElement) => {
   let selected: number = 0
   const optionsEl = listBox.children

   const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
         case 'ArrowUp':
         case 'ArrowLeft': {
            e.preventDefault()
            if (optionsEl && selected === 0) {
               selected = optionsEl.length - 1
            } else {
               selected--
            }
            break
         }
         case 'ArrowDown':
         case 'ArrowRight': {
            e.preventDefault()
            if (optionsEl && selected === optionsEl.length - 1) {
               selected = 0
            } else {
               selected++
            }
            break
         }
         case 'Enter':
            ;(e.target as HTMLLIElement).click()
      }
      changeFocus(selected)
   }
   listBox.addEventListener('keydown', handleKeyDown)

   const changeFocus = (selected: number) => {
      let focusedOption = optionsEl?.[selected] as HTMLElement | null
      focusedOption != null && focusedOption.focus()
   }

   const focusOnSelected = () => {
      for (let i = 0; i < optionsEl.length; i++) {
         if (optionsEl[i].ariaSelected === 'true') {
            selected = i
            break
         }
      }
      changeFocus(selected)
   }
   focusOnSelected()
}
export default listBoxBehavior
