interface Props{
    options: string[];
    name: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    label: string;
    error?: string;
    touched?: boolean;
    value?: string;
}

const MDropdown = ({options, name, id, onChange, onBlur,label, value,error, touched}:Props) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <select
                name={name}
                id={id}
                className="form-control"
                onChange={onChange}
                onBlur={onBlur}
            >
                <option value={value}>Select category</option>
                {options.map((option) => (
                    <option key={option} value={option} label={option}/>
                ))}
            </select>

            {touched && error ? (<div className="text-danger fst-italic">{error}</div>) : null}
        </div>

    );
};
export default MDropdown;
