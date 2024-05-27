import React from "react";
import Button from "./Button";

const Modal = ({ isOpen, message, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        <p>{message}</p>
        <Button label="확인" onClick={onConfirm} />
        <Button label="취소" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
