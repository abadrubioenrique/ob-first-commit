export const Checkbox = ({ label, value, onChange }) => {
    return (
      <label className="remember-label">{label}
      <input type="checkbox" checked={value} onChange={onChange}/>
      <span className="checkmark"></span>
  </label>
    );
  };