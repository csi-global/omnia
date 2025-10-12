"use client"

import { cn } from '@/lib/utils'
import React, { useEffect, useId, useMemo, useRef, useState } from 'react'

type RegionOption = {
  value: string
  label: string
  href: string
}

const REGION_OPTIONS: RegionOption[] = [
  { value: 'uk', label: 'UK', href: 'https://omniaservices.co.uk/' },
  { value: 'in', label: 'INDIA', href: 'https://omniaservices.in' }
]

export type RegionSelectProps = {
  className?: string
  defaultValue?: string
  variant?: 'default' | 'topbar'
}

export default function RegionSelect({ className, defaultValue, variant = 'default' }: RegionSelectProps) {
  const autoId = useId()
  const labelId = `${autoId}-label`
  const listboxId = `${autoId}-listbox`
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue ?? '')
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const options = REGION_OPTIONS

  const selectedOption = useMemo(
    () => options.find((o) => o.value === selectedValue) ?? options[0],
    [options, selectedValue]
  )

  // Auto-select based on current hostname when no defaultValue provided
  useEffect(() => {
    if (defaultValue !== undefined) return
    if (selectedValue) return
    try {
      const host = window.location.hostname
      if (host.includes('co.uk')) {
        setSelectedValue('uk')
      } else if (host.endsWith('.in') || host.includes('.in')) {
        setSelectedValue('in')
      } else {
        setSelectedValue('uk') // fallback
      }
    } catch {
      setSelectedValue('uk')
    }
  }, [defaultValue, selectedValue])

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
    if (option.href) {
      window.location.href = option.href
    }
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

  const isTopbar = variant === 'topbar'

  return (
    <div
      ref={containerRef}
      className={cn('inline-block relative', className)}
    >
      <button
        ref={buttonRef}
        id={labelId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        className={cn(
          'text-left rounded-full text-sm',
          'flex items-center gap-2 cursor-pointer focus:outline-none',
          isTopbar
            ? 'h-[28px] px-3 bg-transparent text-white border border-white/40 hover:border-white/70'
            : 'h-[44px] px-4 bg-[#f6f6f6] text-[#0f0f0f] border border-[var(--border)]'
        )}
        onClick={() => setIsOpen((o) => !o)}
        onKeyDown={onButtonKeyDown}
      >
        <span>{selectedOption?.label ?? 'Select'}</span>
        <span aria-hidden className={cn(isTopbar ? 'text-white/90' : 'text-[#0f0f0f]/70')}>▾</span>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          id={listboxId}
          aria-labelledby={labelId}
          tabIndex={-1}
          onKeyDown={onListKeyDown}
          className={cn(
            'absolute left-0 z-50 mt-2 min-w-[140px] max-h-72 overflow-auto',
            'rounded-xl border shadow-lg',
            isTopbar
              ? 'bg-[#0f172a] border-white/15 text-white'
              : 'bg-white border-[var(--border)] text-[#0f0f0f]'
          )}
        >
          {options.map((opt, index) => {
            const isActive = index === activeIndex
            const isSelected = opt.value === selectedValue
            return (
              <li
                role="option"
                aria-selected={isSelected}
                key={opt.value}
                className={cn(
                  'px-4 py-2 cursor-pointer text-sm',
                  isTopbar
                    ? (isActive ? 'bg-white/10' : '')
                    : (isActive ? 'bg-[#f6f6f6]' : ''),
                  isSelected ? 'text-[var(--theme)] font-semibold' : ''
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


