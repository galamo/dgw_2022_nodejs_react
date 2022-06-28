import React from "react";

export default function HeaderApp(props: { text: string, color?: string }) {
    return <h1 style={{ color: props.color || "red" }}> {props.text} </h1>
}


