import { FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'
import cn from 'classnames'

interface DropdownProps {
  onChange?: (val) => void
  value?: string
  items?: string[]
}

export default function Dropdown({
  onChange = () => {},
  value = '',
  items = []
}: DropdownProps): JSX.Element {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onFocus={handleOpen}
        onClick={open ? handleClose : handleOpen}
        data-dropdown-trigger="hover"
        data-dropdown-toggle="dropdownHover"
        className={cn(
          'border-2 border-gray-100 dark:border-gray-800 px-5 py-1.5 rounded-full font-bold shadow',
          open ? 'opacity-75' : 'hover:opacity-75'
        )}
      >
        {value}{' '}
        <FaCaretDown
          className={cn(
            'inline -mt-1 ml-1 -mr-1 text-2xl',
            open ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>
      <div
        className={cn(
          'absolute w-full',
          open ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        )}
      >
        <div className="mt-2 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 rounded-xl overflow-hidden py-2">
          {items.map(val => (
            <button
              onClick={() => {
                onChange(val)
                setOpen(false)
              }}
              className={cn(
                'text-left w-full px-4 py-2',
                val === value
                  ? 'bg-gray-700 dark:bg-gray-200'
                  : 'hover:bg-gray-700 dark:hover:bg-gray-200'
              )}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
