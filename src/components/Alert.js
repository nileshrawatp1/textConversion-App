import React from 'react';;


export default function Alert(props) {

    const capitalize = (word) => {
        let text = word.toLowerCase();
        text = text.charAt(0).toUpperCase() + text.slice(1);
        return text;
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)} :</strong> {props.alert.msg}
        </div>
    )
}
