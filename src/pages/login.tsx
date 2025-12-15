import { useLogin } from "@refinedev/core";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={() => login({})}>Sign in</button>
      <p>
        Powered by
        <img
          style={{ padding: "0 5px" }}
          alt="Keycloak"
          src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fkeycloak.svg"
        />
        Keycloak
      </p>
    </div>
  );
};
