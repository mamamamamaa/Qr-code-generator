import QRCode from "react-qr-code";
import { useState } from "react";
import style from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Input, StyledBtn } from "./Main.styled";
import { Header } from "./Header/Header";

const toastFallOptions = {
  duration: 4000,
  position: "top-center",

  // Styling
  style: {},
  className: "",

  // Custom Icon
  icon: "❌",

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: "#000",
    secondary: "#fff",
  },

  // Aria
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
};
const toastSuccessOptions = {
  duration: 4000,
  position: "top-center",

  // Styling
  style: {},
  className: "",

  // Custom Icon
  icon: "✅",

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: "#000",
    secondary: "#fff",
  },

  // Aria
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
};

export const App = () => {
  const [query, setQuery] = useState("https://t.me/mamamaama");
  const regexp = new RegExp("^http(s)?://([\\w-]+.)+[\\w-]+(/[\\w- ./?%&=])?$");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = e.target.elements.qrQuery.value;
    if (!regexp.test(data)) {
      toast.error("It's not a URL string!!!", toastFallOptions);
      e.target.elements.qrQuery.value = "";
      return;
    }
    toast.success("Success!!!", toastSuccessOptions);
    setQuery(e.target.elements.qrQuery.value);
    e.target.elements.qrQuery.value = "";
  };

  return (
    <>
      <Header />
      <div className={style.AppContainer}>
        <Toaster position="top-center" reverseOrder={false} />

        <div className={style.container}>
          <div className={style.box}>
            <form className={style.form} onSubmit={onSubmit}>
              <Input
                type="text"
                name="qrQuery"
                title="You should enter a URL!"
                placeholder="Enter a URL..."
              />
              <StyledBtn type="submit">Generate</StyledBtn>
            </form>
          </div>
          <div className={style.code}>
            <QRCode
              size={256}
              style={{
                height: "auto",
                maxWidth: "100%",
                borderRadius: "10px",
                width: "100%",
              }}
              value={query}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
