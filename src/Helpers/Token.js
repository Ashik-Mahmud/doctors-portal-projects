
const Token = (token) => {
    fetch(`https://doctors-para-server.herokuapp.com/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ uid: token }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.token);
    });
  
}

export default Token