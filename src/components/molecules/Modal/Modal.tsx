import { Icon } from "@components/atoms";
import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  title?: string;
  cancelLabel?: string;
  proceedLabel?: string;
  isProceedDisabled?: boolean;
  children: React.ReactNode;
  onProceed?: () => void;
  onCancel?: () => void;
};

export interface ModalRef {
  openModal: () => void;
  closeModal: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({ children }, ref) => {
  const [show, setShow] = useState<boolean>(false);

  const onClickClose = () => {
    setShow(false);
  };

  useImperativeHandle(ref, () => ({
    openModal: () => setShow(true),
    closeModal: onClickClose,
  }));

  return createPortal(
    <>
      {show && (
        <div className="bg-base-500 absolute left-0 z-30 flex h-max-mobile w-max-mobile flex-col items-center justify-center bg-opacity-90">
          <button
            type="button"
            className="absolute right-3 top-3"
            onClick={onClickClose}
          >
            <Icon name="close" fill="white" />
          </button>
          {children}
        </div>
      )}
    </>,
    document.getElementById("modal-root") ?? document.body,
  );
});

export default Modal;
