type OmniaButtonProps = {
  text: string;
  className?: string;
}

export default function OmniaButton({ text, className }: OmniaButtonProps) {
  return (
    <div className="main-button">
      <button className={`theme-btn ${className}`}> {text} </button>
      <span className="arrow-btn"><i className="icon-arrow-right"></i></span>
    </div>
  )
}
