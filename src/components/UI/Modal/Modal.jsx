import styles from "./Modal.module.css"

const Modal = ({ children, close }) => {
  return (
    <div className={styles.modal__outer} onClick={close}>
      <div className={styles.modal__inner} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close__btn} onClick={close}>X</div>
        {children}
      </div>
    </div>
  )
}
export default Modal
