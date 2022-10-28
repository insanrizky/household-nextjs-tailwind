interface IInput {
  label: string;
  type: string;
  className?: string;
  placeholder?: string;
  [others: string | number | symbol]: any;
}

const Input = ({ label, type, placeholder, ...rest}: IInput) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type={type}
        className="
          mt-1
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        "
        placeholder={placeholder}
        {...rest}
      />
    </label>
  )
}

export default Input;
