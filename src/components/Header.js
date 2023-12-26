import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const imageUrl =
    "https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148497067.jpg?w=900&t=st=1697541096~exp=1697541696~hmac=8414b4f7dc18f35a5cac5143f536020ecdbba2ad244c31204c0acbc1d803305d";

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        className="nav-items"
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

      <hr
        style={{ width: "100%", margin: "10px 0", border: "1px solid #ccc" }}
      />
    </header>
  );
};
export default Header;
