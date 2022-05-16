
const CreateUser = async(user) => {

      await fetch(`https://doctors-para-server.herokuapp.com/users?email=${user?.email}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          uid: user?.uid,
          email: user?.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          
        });

};

export default CreateUser;