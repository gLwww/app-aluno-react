import './Botao.css'

export default function Botao({
  children,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`botao botao--${variant}${fullWidth ? ' botao--full' : ''}`}
    >
      {loading && <span className="botao-spinner" />}
      {children}
    </button>
  )
}
