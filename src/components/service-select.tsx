"use client"

import { cn } from '@/lib/utils'
import React, { useEffect, useId, useMemo, useRef, useState } from 'react'

type ServiceOption = {
  value: string
  label: string
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { value: '', label: 'Select Service' },
  { value: 'cloud-assessment', label: 'Cloud Assessment' },
  { value: 'cyber-security', label: 'Cyber Security' },
  { value: 'digital-process-automation', label: 'Digital Process Automation' },
  { value: 'sharepoint-development', label: 'SharePoint Development' },
  { value: 'digital-transformation', label: 'Digital Transformation' },
  { value: 'it-consulting', label: 'IT Consulting' },
  { value: 'cloud-migration', label: 'Cloud Migration' },
  { value: 'managed-cloud-desk', label: 'Managed Cloud Desk' },
  { value: 'managed-microsoft-365', label: 'Managed Microsoft 365' },
  { value: 'managed-microsoft-azure', label: 'Managed Microsoft Azure' },
  { value: 'surface-as-a-service', label: 'Surface as a Service' },
  { value: 'other', label: 'Other' }
]

export type ServiceSelectProps = {
  name?: string
  id?: string
  required?: boolean
  className?: string
  defaultValue?: string
}

export default function ServiceSelect({
  name = 'service',
  id,
  required = true,
  className,
  defaultValue
}: ServiceSelectProps) {
  const autoId = useId()
  const labelId = `${id || autoId}-label`
  const listboxId = `${id || autoId}-listbox`
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue ?? '')
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const options = SERVICE_OPTIONS

  const selectedOption = useMemo(
    () => options.find((o) => o.value === selectedValue) ?? options[0],
    [options, selectedValue]
  )

  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      if (!containerRef.current) return
      if (!(e.target instanceof Node)) return
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false)
        setActiveIndex(-1)
      }
    }
    document.addEventListener('mousedown', onDocumentClick)
    return () => document.removeEventListener('mousedown', onDocumentClick)
  }, [])

  function openAndFocus(index: number) {
    setIsOpen(true)
    setActiveIndex(index)
  }

  function commitSelection(index: number) {
    const option = options[index]
    if (!option) return
    setSelectedValue(option.value)
    setIsOpen(false)
    setActiveIndex(-1)
    buttonRef.current?.focus()
  }

  function onButtonKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const start = e.key === 'ArrowDown' ? 0 : options.length - 1
      openAndFocus(start)
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openAndFocus(Math.max(0, options.findIndex((o) => o.value === selectedValue)))
    }
  }

  function onListKeyDown(e: React.KeyboardEvent<HTMLUListElement>) {
    if (e.key === 'Escape') {
      e.preventDefault()
      setIsOpen(false)
      buttonRef.current?.focus()
      return
    }
    if (e.key === 'Home') {
      e.preventDefault()
      setActiveIndex(0)
      return
    }
    if (e.key === 'End') {
      e.preventDefault()
      setActiveIndex(options.length - 1)
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(options.length - 1, (i === -1 ? 0 : i + 1)))
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(0, (i === -1 ? options.length - 1 : i - 1)))
      return
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (activeIndex !== -1) commitSelection(activeIndex)
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn('w-100 relative', className)}
    >
      <input type="hidden" name={name} value={selectedValue} required={required} />
      <button
        ref={buttonRef}
        id={labelId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        className={cn(
          'w-100 text-left !rounded-full h-[60px] !px-6',
          'bg-[#f6f6f6] !border-[1px] !border-[#ccc] !focus:outline-none',
          'flex items-center justify-between',
          'cursor-pointer'
        )}
        onClick={() => setIsOpen((o) => !o)}
        onKeyDown={onButtonKeyDown}
      >
        <span>{selectedOption?.label ?? 'Select Service'}</span>
        <span aria-hidden>▾</span>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          id={listboxId}
          aria-labelledby={labelId}
          tabIndex={-1}
          onKeyDown={onListKeyDown}
          className={cn(
            'absolute left-0 right-0 z-20 mt-2 max-h-72 overflow-auto',
            'rounded-xl border border-[var(--border)] bg-white shadow-lg'
          )}
        >
          {options.map((opt, index) => {
            const isActive = index === activeIndex
            const isSelected = opt.value === selectedValue
            return (
              <li
                role="option"
                aria-selected={isSelected}
                key={opt.value || 'placeholder'}
                className={cn(
                  'px-4 py-3 cursor-pointer',
                  isActive ? 'bg-[#f6f6f6]' : '',
                  isSelected ? 'text-[var(--theme)] font-semibold' : 'text-[#0f0f0f]'
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(e) => {
                  e.preventDefault()
                }}
                onClick={() => commitSelection(index)}
              >
                {opt.label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}


