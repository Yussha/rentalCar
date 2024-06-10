import styles from "./loginasadmin.module.css";
export default function LoginAsAdmin() {
  return (
    <form className={`${styles.customForm} position-absolute z-2 `}>
      <h1 className={`${styles.customTitle} fs-6 text-center mb-3`}>
        Login As Admin
      </h1>
      <div className={`${styles.customInputs} d-flex flex-column gap-3`}>
        <input
          className={`${styles.customInput}`}
          type="email"
          placeholder="Email"
        />
        <input
          className={`${styles.customInput}`}
          type="password"
          placeholder="Password"
        />
      </div>
      <div
        className={`d-flex  align-items-center justify-content-center mt-3 mb-3`}
      >
        <button type="submit" className={`${styles.customBtn}`}>
          Login
        </button>
      </div>
      <div
        className={`d-flex  align-items-center justify-content-center gap-1`}
      >
        <span style={{ fontSize: "0.9rem" }}>New here?</span>
        <button
          style={{
            fontSize: "0.9rem",
            background: "transparent",
            color: "#f5b754",
            border: "none",
          }}
        >
          Signup
        </button>
      </div>
    </form>
  );
}
