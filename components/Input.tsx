import styles from "../styles/Home.module.css";

interface InputProps {
    id: string,
    name: string,
    type: string,
    placeholder: string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = (props:InputProps) => {
    return (
        <input
        id={props.id}
        className={styles.queryInput}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      />
    )
}