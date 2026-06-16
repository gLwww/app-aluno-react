import './InputField.css'

export default function InputField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required,
}) {
  return (
    <div className="input-field">
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-control${error ? ' input-control--error' : ''}`}
        autoComplete="off"
      />
      {error && <span className="input-error-msg">{error}</span>}
    </div>
  )
}
