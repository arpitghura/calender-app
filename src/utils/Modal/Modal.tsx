import React, { Children } from "react";

interface ModalProps {
  modalTitle?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({
  onClose,
  children,
  modalTitle,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-auto h-full w-full flex items-center justify-center">
      <div className="p-6 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-between w-full">
          <h3 className="text-xl font-bold text-gray-900">{modalTitle}</h3>
          <button onClick={onClose}>X</button>
        </div>

        <div className="flex mt-2 w-full">{children}</div>
      </div>
    </div>
  );
};
