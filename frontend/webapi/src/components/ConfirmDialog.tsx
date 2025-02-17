import * as React from "react";

export interface ConfirmDialogProps {
    show: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmDialog:React.FC<ConfirmDialogProps> = ({title, message, show, onConfirm, onCancel}: ConfirmDialogProps) => {
    if (!show) {
        return null;
    }
    return (
        <div className="modal show d-block" tabIndex={-1} style={{backgroundColor:'rgba(0,0,0,0,5)'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={onCancel} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button onClick={onConfirm} type="button" className="btn btn-primary">OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ConfirmDialog;
