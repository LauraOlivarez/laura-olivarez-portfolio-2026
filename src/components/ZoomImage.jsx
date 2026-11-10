import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// An image that enlarges in a modal dialog when clicked or activated by
// keyboard. Uses the native <dialog> element in modal mode, which gives
// us a real focus trap, Esc to close and an inert page behind it; focus
// is returned to the trigger explicitly on close.
//
// With linkTo, the image belongs to a link card: clicking the image follows
// the link, and a small separate "Enlarge" icon button (44px, labeled for
// screen readers, which also carry the alt text) opens the dialog. The image
// link is hidden from assistive tech and the tab order because the card
// already has a text link to the same place.
export default function ZoomImage({
  src,
  alt,
  caption,
  showCaption = true,
  compact = false,
  clampCaption = false,
  linkTo,
}) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  function handleClose() {
    setOpen(false)
    triggerRef.current?.focus()
  }

  function handleDialogClick(event) {
    // Anything other than the image, caption or close button is the "backdrop".
    if (!event.target.closest('.zoom-dialog__img, .zoom-dialog__caption, .zoom-dialog__close')) {
      dialogRef.current.close()
    }
  }

  return (
    <figure className={`zoom${compact ? ' zoom--compact' : ''}`}>
      {linkTo ? (
        <div className="zoom__frame">
          <Link className="zoom__link" to={linkTo} tabIndex={-1} aria-hidden="true">
            <img src={src} alt="" loading="lazy" />
          </Link>
          <button
            ref={triggerRef}
            type="button"
            className="zoom__enlarge"
            aria-haspopup="dialog"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path
                d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="square"
              />
            </svg>
            <span className="visually-hidden">Enlarge image: {alt}</span>
          </button>
        </div>
      ) : (
        <button
          ref={triggerRef}
          type="button"
          className="zoom__trigger"
          aria-haspopup="dialog"
          onClick={() => setOpen(true)}
        >
          <span className="visually-hidden">Enlarge image: </span>
          <img src={src} alt={alt} loading="lazy" />
          <span className="zoom__hint" aria-hidden="true">
            Enlarge
          </span>
        </button>
      )}
      {showCaption && caption && (
        <figcaption className={`zoom__caption${clampCaption ? ' zoom__caption--clamp' : ''}`}>{caption}</figcaption>
      )}

      <dialog
        ref={dialogRef}
        className="zoom-dialog"
        aria-label={alt}
        onClose={handleClose}
        onClick={handleDialogClick}
      >
        <div className="zoom-dialog__frame">
          <div className="zoom-dialog__content">
            <button type="button" className="zoom-dialog__close" onClick={() => dialogRef.current.close()}>
              Close
              <span aria-hidden="true"> ✕</span>
            </button>
            {open && <img className="zoom-dialog__img" src={src} alt={alt} />}
            {caption && <p className="zoom-dialog__caption">{caption}</p>}
          </div>
        </div>
      </dialog>
    </figure>
  )
}
