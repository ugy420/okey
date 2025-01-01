export default function Button({text, className, onClick, ...props}){
    return (
      <button className={className} onClick={onClick} {...props}>
        {text}
      </button>
    );
}