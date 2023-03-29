
export interface IProps {
    title: string;
    children: JSX.Element;
    onClose: () => void;
}

export const Modal = (props: IProps) => {

    const { title, children, onClose } = props;

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}