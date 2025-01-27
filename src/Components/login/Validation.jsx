export const Validation = (username, password) => {
  const errors = { username: "", password: "" };
  let isValid = true;

  if (username.length < 5) {
    errors.username = "username must b atleast of 5 characters";
    isValid = false;
  } else if (username.length > 15) {
    errors.username = "username must not exceed 15 characters";
    isValid = false;
  } else if (!/^[a-zA-Z0-9_.-]+$/.test(username)) {
    errors.username = "username only contains letters, numbers ..";
    isValid = false;
  }

  if (!password) {
    errors.password = "required";
    isValid = false;
  } else if (password.length < 8) {
    errors.password = "password must b atleast 8 characters";
    isValid = false;
  } else if (password.length > 15){
    errors.password = "password must not exceed 15 characters";
  isValid = false;
}

return {isValid, errors};
};