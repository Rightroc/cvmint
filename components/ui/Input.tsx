interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;

  register?: any;
  error?: string;

  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  disabled?: boolean;
}

export default function Input({
  label,
  type = "text",
  placeholder,

  register,

  error,

  value,
  onChange,

  disabled,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full rounded-lg border p-3 outline-none focus:border-blue-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}