import { Modal }                    from 'antd';

const confirm = Modal.confirm;

export const showConfirm = (title, desc, okText, cancelText, onOk, onCancel, 
                            Icon = null, okType = 'danger') => {
    confirm({
        title,
        icon: Icon ? <Icon /> : null,
        content: desc,
        okText,
        okType,
        cancelText,
        onOk,
        onCancel
    })
}