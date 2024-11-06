export default function Button({children,textonly,className, ...props}){
    let cssClass = textonly ? 'text-button' : 'button';
    cssClass += ' ' + className 
    return (
        <button className={cssClass} {...props}>{children}</button>
    );
}