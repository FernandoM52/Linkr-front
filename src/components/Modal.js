import ReactModal from "react-modal";

export function Modal(props) {
  const { showModal } = props;

  return (
    <ReactModal
      isOpen={showModal}
      ariaHideApp={false}
      okButtonProps={{ style: { backgroundColor: "#1877F2" } }}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.8)"
        },
        content: {
          width: "33%",
          height: "25%",
          position: "absolute",
          top: "30%",
          left: "32%",
          backgroundColor: "#333333",
          border: "none",
          color: "white",
          fontFamily: "Lato",
          fontSize: "34px",
          fontWeight: "700",
          lineHeight: "41px",
          textAlign: "center",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "50px",
          outline: "none",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        },
      }}
    >
      {props.children}
    </ReactModal>
  );
}
